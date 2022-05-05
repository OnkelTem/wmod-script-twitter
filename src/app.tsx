import ApiWatcher from './watchers/api.watcher';
import DomWatcher from './watchers/dom.watcher';
import { isGlobalObjectsWithUsers, User, Username } from './models/users';
import { BetterObject, injectWrapper } from './utils';
import { UserInfo } from './components/user-info';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h, render } from 'preact';

const userStore = new Map<Username, User>();

type UserElements = Map<Username, HTMLElement[]>;

export default function app() {
  ApiWatcher().subscribe(
    ['^https://twitter.com/i/api/2/search/adaptive.json', '^https://twitter.com/i/api/2/timeline/home.json'],
    (data) => {
      if (isGlobalObjectsWithUsers(data)) {
        BetterObject.values(data.globalObjects.users).forEach((user) => {
          userStore.set(user.screen_name, user);
        });
      }
    },
  );

  DomWatcher('#react-root').subscribe('div[style^="transform: translateY"]', (el) => {
    const userElements: UserElements = new Map();
    const userDiv = el.querySelector('div[id]:not([style])');
    if (userDiv != null && userDiv instanceof HTMLDivElement) {
      const link = userDiv.querySelector('a[href]');
      if (link != null && link instanceof HTMLAnchorElement) {
        const url = new URL(link.href);
        const username = url.pathname.substring(1);
        if (userElements.has(username)) {
          const elements = userElements.get(username)!;
          const indexId = elements.findIndex((el) => el.id === userDiv.id);
          if (indexId === -1) {
            elements.push(userDiv);
          } else {
            userElements.set(username, [...elements.slice(0, indexId), userDiv, ...elements.slice(indexId + 1)]);
          }
        } else {
          userElements.set(username, [userDiv]);
        }
      }
    }
    renderUserElements(userElements);
  });
}

/**
 * Main render function
 */
function renderUserElements(userElements: UserElements) {
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
          const copySourceEl = div.querySelector('div:nth-of-type(2) > a');
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
