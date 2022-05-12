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
