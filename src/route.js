// @flow

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

const notFound: t = {
  type: 'Invalid',
  route: {
    type: 'NotFound',
  },
};

export function parse(url: string): t {
  const args = url.split('/').slice(1);
  if (!args[0]) {
    return {
      type: 'Valid',
      route: {
        type: 'Index',
      },
    };
  }
  if (args[0] === 'r') {
    if (!args[1]) {
      return notFound;
    }
    return {
      type: 'Valid',
      route: {
        type: 'Subreddit',
        subreddit: args[1],
      },
    };
  }
  return notFound;
}
