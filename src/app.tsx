import ApiWatcher from './watchers/api.watcher';
import DomWatcher from './watchers/dom.watcher';
import {
  getUsersFollowing as getUsersFollow,
  getUsersTweetDetail,
  isGlobalObjectsWithUsers,
  User,
  Username,
} from './models/users';
import { BetterObject, dbg, info, injectWrapper } from './utils';
import { UserInfo } from './components/user-info';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h, render } from 'preact';
import rgbHex from 'rgb-hex';

const userStore = new Map<Username, User>();

type UserElements = Map<Username, HTMLElement[]>;

export default function app() {
  // Regular results
  ApiWatcher().subscribe(
    [
      '^https://twitter.com/i/api/2/search/adaptive.json',
      '^https://twitter.com/i/api/2/timeline/home.json',
      '^https://twitter.com/i/api/2/timeline/home_latest.json',
      '^https://twitter.com/i/api/2/notifications/all.json',
      '^https://twitter.com/i/api/2/guide.json',
    ],
    (data, url) => {
      info(`Data received from: ${url}`);
      if (isGlobalObjectsWithUsers(data)) {
        dbg(`Received data with GlobalObjectsWithUsers:`, data);
        BetterObject.values(data.globalObjects.users).forEach((user) => {
          dbg(`Setting userStore user:`, user.screen_name);
          userStore.set(user.screen_name, user);
        });
      } else {
        dbg(`Received data is not of GlobalObjectsWithUsers:`, data);
      }
    },
  );

  // GraphQL results
  ApiWatcher().subscribe(
    ['^https://twitter.com/i/api/graphql/[^/]+?/(TweetDetail|Following|Followers)'],
    (data, url) => {
      info(`GraphQL data received from: ${url}`);
      dbg(`GraphQL data:`, data);
      getUsersTweetDetail(data).forEach((user) => {
        dbg(`Setting userStore user from GraphQL TweetDetail:`, user.screen_name);
        userStore.set(user.screen_name, user);
      });
      getUsersFollow(data).forEach((user) => {
        dbg(`Setting userStore user from GraphQL Follow:`, user.screen_name);
        userStore.set(user.screen_name, user);
      });
    },
  );

  // Watch body style attribute change to detect theme mode
  DomWatcher('body', { attributes: true, attributeFilter: ['style'] }).subscribe((mutations) => {
    const m = mutations[0];
    if (m != null && m.type === 'attributes') {
      if (m.attributeName === 'style' && m.target instanceof HTMLBodyElement) {
        const styles = window.getComputedStyle(m.target);
        const color = rgbHex(styles.backgroundColor);
        m.target.setAttribute('data-theme', color === 'ffffff' ? 'light' : color === '000000' ? 'dark' : 'dim');
      }
    }
  });

  DomWatcher('#react-root', { childList: true, subtree: true }).subscribe((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        const nodes = mutation.addedNodes;
        for (const node of nodes) {
          if (node instanceof Element && node.matches('div[style^="transform: translateY"]')) {
            dbg('Updated el: ', node);
            const userElements: UserElements = new Map();
            //const userDiv = el.querySelector('div[id]:not([style])');
            const userDivs = [...window.$x('.//div[div[2]/div/a[count(div) = 1]]', node)];
            dbg('userDivs: ', userDivs);
            if (userDivs.length > 0) {
              const userDiv = userDivs[0];
              //for (const userDiv of )
              dbg('userDiv: ', userDiv);
              if (userDiv instanceof HTMLDivElement) {
                const link = userDiv.querySelector('a[href]');
                if (link != null && link instanceof HTMLAnchorElement) {
                  const url = new URL(link.href);
                  const username = url.pathname.substring(1);
                  if (userElements.has(username)) {
                    dbg(`Updating userElement for ${username}`);
                    const userDivs = userElements.get(username)!;
                    const indexId = userDivs.findIndex((knownUserDiv) => knownUserDiv.id === userDiv.id);
                    if (indexId === -1) {
                      dbg(`Adding new userDiv for existing ${username}:`, userDiv);
                      userDivs.push(userDiv);
                    } else {
                      dbg(`Updating userDiv for existing ${username}:`, userDiv);
                      userElements.set(username, [
                        ...userDivs.slice(0, indexId),
                        userDiv,
                        ...userDivs.slice(indexId + 1),
                      ]);
                    }
                  } else {
                    dbg(`Adding new userElement for ${username} with userDiv:`, userDiv);
                    userElements.set(username, [userDiv]);
                  }
                  renderUserElements(userElements);
                }
              }
            }
          }
        }
      }
    });
  });
}

/**
 * Main render function
 */
function renderUserElements(userElements: UserElements) {
  dbg('Rending userElements: ', userElements);
  for (const [username, userDivs] of userElements.entries()) {
    if (userStore.has(username)) {
      const user = userStore.get(username)!;
      for (const userDiv of userDivs) {
        // We need to find the proper place for injection
        // Tweet header looks like:
        //
        //   PICTURE
        //   PICTURE   Very long user title with unicode junk...  -- firstLineDiv
        //   PICTURE   @username · TIME · <injection point>       -- secondLineDiv
        //   PICTURE
        //
        // So it is the second child div.
        // Тут нужно добавить
        const firstLineDiv = userDiv.children[0];
        // We need to apply custom class to it
        dbg('firstLineDiv', firstLineDiv);
        if (user.followed_by && user.following) {
          if (!firstLineDiv.classList.contains('friend')) {
            firstLineDiv.classList.add('friend');
            const styles = window.getComputedStyle(firstLineDiv);
            dbg('styles', styles);
          }
        }
        const secondLineDiv = userDiv.children[1];
        dbg('secondLineDiv', secondLineDiv);
        if (secondLineDiv instanceof HTMLElement) {
          // Copy styles from the first element
          const copySourceEl = secondLineDiv.querySelector('div > a span');
          let styles: CSSStyleDeclaration | undefined;
          if (copySourceEl instanceof HTMLElement) {
            styles = window.getComputedStyle(copySourceEl);
          }
          render(
            <UserInfo
              user={user}
              styles={styles}
              variant={window.location.pathname.match(/(following|followers)$/) ? 'short' : 'full'}
            />,
            injectWrapper(secondLineDiv),
          );
        }
      }
    }
  }
}
