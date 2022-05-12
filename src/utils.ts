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
    //console.log(injectEl);
  }
  return injectEl;
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
