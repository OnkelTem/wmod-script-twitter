import { v4 as uuid } from 'uuid';

type DomCallback = (mutations: MutationRecord[]) => void;

type DomSubscriber = DomCallback;

type SubscriberId = ReturnType<typeof uuid>;

export default function DomWatcher(selector: string, options?: MutationObserverInit) {
  const subscribers = new Map<SubscriberId, DomSubscriber>();

  function subscribe(callback: DomCallback) {
    const id = uuid();
    subscribers.set(id, callback);
    return function unsubscribe() {
      subscribers.delete(id);
    };
  }

  document.addEventListener('DOMContentLoaded', function () {
    const root = document.querySelector(selector);
    if (root != null) {
      new MutationObserver((mutations) => {
        for (const callback of subscribers.values()) {
          callback(mutations);
        }
      }).observe(root, options);
    }
  });

  return {
    subscribe,
  };
}
