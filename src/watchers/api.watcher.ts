import { v4 as uuid } from 'uuid';
import { dbg } from '../utils';

type ApiCallback = (data: unknown, url: string) => void;

type ApiSubscriber = {
  urls: RegExp[];
  callback: ApiCallback;
};

type SubscriberId = ReturnType<typeof uuid>;
const subscribers = new Map<SubscriberId, ApiSubscriber>();

const orig_XMLHttpRequest = window.XMLHttpRequest;

export default function ApiWatcher() {
  function subscribe(urls: string[] | RegExp[], callback: ApiCallback) {
    const id = uuid();
    subscribers.set(id, {
      urls: urls.map((url) => (typeof url === 'string' ? new RegExp(url) : url)),
      callback,
    });
    return function unsubscribe() {
      subscribers.delete(id);
    };
  }

  window.XMLHttpRequest = class extends orig_XMLHttpRequest {
    constructor() {
      super();
      this.addEventListener('readystatechange', () => {
        if (this.readyState === XMLHttpRequest.DONE && typeof this.response === 'string') {
          //dbg(`XMLHttpRequest on 'readystatechange' for ${this.responseURL}`);
          subscribers.forEach(({ urls, callback }) => {
            urls
              .filter((url) => this.responseURL.match(url))
              .forEach(() => {
                const data = JSON.parse(this.response) as unknown;
                callback(data, this.responseURL);
              });
          });
        }
      });
    }
  };

  return {
    subscribe,
  };
}

const fetch = window.fetch;
window.fetch = (...args) =>
  (async (args) => {
    dbg('Intercepting fetch:', args);
    const result = await fetch(...args);
    dbg('Intercepting fetch result:', result);
    return result;
  })(args);
