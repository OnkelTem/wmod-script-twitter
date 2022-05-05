import { v4 as uuid } from "uuid";

type ApiCallback = (data: unknown) => void;

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
      urls: urls.map((url) =>
        typeof url === "string" ? new RegExp(url) : url
      ),
      callback,
    });
    return function unsubscribe() {
      subscribers.delete(id);
    };
  }

  window.XMLHttpRequest = class extends orig_XMLHttpRequest {
    constructor() {
      super();
      this.addEventListener("readystatechange", () => {
        if (
          this.readyState === XMLHttpRequest.DONE &&
          typeof this.response === "string"
        ) {
          subscribers.forEach(({ urls, callback }) => {
            urls
              .filter((url) => this.responseURL.match(url))
              .forEach(() => {
                const data = JSON.parse(this.response) as unknown;
                callback(data);
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
