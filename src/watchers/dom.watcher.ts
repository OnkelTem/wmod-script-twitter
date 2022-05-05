import { v4 as uuid } from 'uuid';

type DomCallback = (element: Element) => void;

type DomSubscriber = {
  selector: string;
  callback: DomCallback;
};

type SubscriberId = ReturnType<typeof uuid>;

export default function DomWatcher(rootSelector: string) {
  const subscribers = new Map<SubscriberId, DomSubscriber>();

  function subscribe(selector: string, callback: (element: Element) => void) {
    const id = uuid();
    subscribers.set(id, { selector, callback });
    return function unsubscribe() {
      subscribers.delete(id);
    };
  }

  document.addEventListener('DOMContentLoaded', function () {
    const root = document.querySelector(rootSelector);
    if (root != null) {
      new MutationObserver((list) => {
        for (const m of list) {
          if (m.type === 'childList') {
            const nodes = m.addedNodes;
            for (const n of nodes) {
              if (n instanceof Element) {
                for (const watcher of subscribers.values()) {
                  const { selector, callback } = watcher;
                  if (n.matches(selector)) {
                    callback(n);
                  }
                }
              }
            }
          }
        }
      }).observe(root, {
        childList: true,
        subtree: true,
      });
    }
  });

  return {
    subscribe,
  };
}
