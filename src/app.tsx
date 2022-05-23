import ApiWatcher from './watchers/api.watcher';
import DomWatcher from './watchers/dom.watcher';
import { getUsersTweetDetail, isGlobalObjectsWithUsers, User, Username } from './models/users';
import { BetterObject, dbg, info, injectWrapper } from './utils';
import { UserInfo } from './components/user-info';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h, render } from 'preact';

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
  ApiWatcher().subscribe(['^https://twitter.com/i/api/graphql/[^/]+?/TweetDetail'], (data, url) => {
    info(`GraphQL data received from: ${url}`);
    dbg(`GraphQL data:`, data);
    getUsersTweetDetail(data).forEach((user) => {
      dbg(`Setting userStore user from GraphQL:`, user.screen_name);
      userStore.set(user.screen_name, user);
    });
  });

  DomWatcher('#react-root').subscribe('div[style^="transform: translateY"]', (el) => {
    dbg('Updated el: ', el);
    const userElements: UserElements = new Map();
    const userDiv = el.querySelector('div[id]:not([style])');
    dbg('userDiv: ', userDiv);
    if (userDiv != null && userDiv instanceof HTMLDivElement) {
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
            userElements.set(username, [...userDivs.slice(0, indexId), userDiv, ...userDivs.slice(indexId + 1)]);
          }
        } else {
          dbg(`Adding new userElement for ${username} with userDiv:`, userDiv);
          userElements.set(username, [userDiv]);
        }
        renderUserElements(userElements);
      }
    }
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
        //   PICTURE   Very long user title with unicode junk...
        //   PICTURE   @username · TIME · <injection point>
        //   PICTURE
        //
        // So it is the second child div.
        const div = userDiv.children[1];
        if (div instanceof HTMLElement) {
          // Copy styles from the first element
          const copySourceEl = div.querySelector('div > a span');
          let styles: CSSStyleDeclaration | undefined;
          if (copySourceEl instanceof HTMLElement) {
            styles = window.getComputedStyle(copySourceEl);
          }
          render(<UserInfo user={user} styles={styles} />, injectWrapper(div));
        }
      }
    }
  }
}
