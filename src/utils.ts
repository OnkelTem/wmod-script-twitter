export const BetterObject: {
  keys<T extends Record<string, unknown>>(object: T): (keyof T)[];
  values<T extends Record<string, unknown>>(Object: T): T[keyof T][];
} = {
  keys: (o) => Object.keys(o) as any,
  values: (o) => Object.values(o) as any,
};

// Makes a wrapper element
export class WrapperHTMLElement extends HTMLElement {
  constructor() {
    super();
  }
}

const WrapperName = 'custom-wrapper';

window.customElements.define(WrapperName, WrapperHTMLElement);

enum InjectModes {
  APPEND = 'append',
}

export function injectWrapper(container: HTMLElement, mode: InjectModes = InjectModes.APPEND) {
  let injectEl: HTMLElement | null;
  injectEl = container.querySelector(WrapperName);
  if (injectEl == null) {
    injectEl = document.createElement(WrapperName);
    if (mode === 'append') {
      container.appendChild(injectEl);
    }
  }
  return injectEl;
}

import lodashFind from 'lodash.find';

export function isObject(arg: unknown): arg is Record<string, unknown> {
  return arg != null && typeof arg === 'object' && !Array.isArray(arg);
}

/**
 * In a deep structure finds item by path, e.g. data['foo']['bar']
 * @param data
 * @param path
 * @returns
 */
export function findNestedItemByPath<T>(data: unknown, path: Array<string | number>): T | undefined {
  let current = data;
  for (const i of path) {
    if (isObject(current)) {
      current = current[i];
    } else if (Array.isArray(current) && typeof i === 'number') {
      current = current[i];
    } else {
      break;
    }
  }
  return isObject(current) ? (current as T) : undefined;
}

export function* findDeep(data: unknown, query: Record<string, string>): Generator {
  if (isObject(data)) {
    const res = lodashFind(data, query);
    if (res != undefined) {
      yield res;
    } else {
      for (const a in data) {
        yield* findDeep(data[a], query);
      }
    }
  } else if (Array.isArray(data)) {
    const res = lodashFind(data, query);
    if (res != undefined) {
      yield res;
    } else {
      for (const a of data) {
        yield* findDeep(a, query);
      }
    }
  }
}

export function dbg(...params: any) {
  if (__DEBUG__) {
    // eslint-disable-next-line
    console.log(PACKAGE_NAME + ' DEBUG: ', ...params);
  }
}

export function info(...params: any) {
  // eslint-disable-next-line
  console.log(PACKAGE_NAME + ' INFO: ', ...params);
}

declare global {
  interface Window {
    $x: (xpath: string, context?: Node) => Generator<Node>;
  }
}

// Add $x function to Window
if (window['$x'] == null) {
  window.$x = function* $x(xpath: string, context?: Node) {
    dbg('context=', context);

    const iterator = window.document.evaluate(
      xpath,
      context ?? document.documentElement,
      null,
      XPathResult.ORDERED_NODE_ITERATOR_TYPE,
      null,
    );
    let node = iterator.iterateNext();
    while (node) {
      yield node;
      node = iterator.iterateNext();
    }
  };
}
