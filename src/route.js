// @flow

export type Invalid = {
  type: 'NotFound',
};

export type Valid = {
  type: 'Home',
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

function valid(route: Valid): t {
  return {
    type: 'Valid',
    route,
  };
}

const notFound: t = {
  type: 'Invalid',
  route: {
    type: 'NotFound',
  },
};

export function parse(url: string): t {
  const args = url.split('/').slice(1);
  if (!args[0]) {
    return valid({
      type: 'Home',
    });
  }
  if (args[0] === 'r') {
    if (!args[1]) {
      return notFound;
    }
    return valid({
      type: 'Subreddit',
      subreddit: args[1],
    });
  }
  return notFound;
}
