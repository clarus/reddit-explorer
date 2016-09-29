// @flow
import pathToRegexp from 'path-to-regexp';

export type Invalid = {
  type: 'NotFound',
};

export type Valid = {
  type: 'Index',
} | {
  type: 'Subreddit',
  subreddit: string,
};

export type t = {
  type: 'Invalid',
  route: Invalid,
} | {
  type: 'Valid',
  route: Valid,
};

const routes: {[pattern: string]: string} = {
  '/': 'Index',
  '/r/:subreddit': 'Subreddit',
};

export function parse(url: string): t {
  const results = Object.keys(routes).map((pattern): any => {
    const keys = [];
    const regexp = pathToRegexp(pattern, keys);
    const args = regexp.exec(url);
    if (args) {
      const namedArgs = keys.reduce((accumulator, key, keyIndex) => ({
        ...accumulator,
        [key.name]: args[keyIndex + 1],
      }), {});
      return {
        type: 'Valid',
        route: {
          type: (routes[pattern]: any),
          ...namedArgs,
        },
      };
    }
    return null;
  }).filter((route) => route !== null);
  return results.length !== 0 ? results[0] : {
    type: 'Invalid',
    route: {
      type: 'NotFound',
    },
  };
}

export function print(route: Valid): string {
  const pattern = Object.keys(routes).find((pattern) => routes[pattern] === route.type);
  if (pattern) {
    ...
  }
  return '';
}

console.log(pathToRegexp('/r/:subreddit').exec('/r/bla/'));
console.log(parse('/r/bla'));
