// @flow
import * as Controller from './index/controller';

export type Invalid = {
  type: 'NotFound',
};

export type Valid = {
  type: 'Home',
} | {
  type: 'Link',
  link: string,
  subreddit: string,
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
  switch (args[0]) {
    case 'link':
      if (!args[1] || !args[2]) {
        return notFound;
      }
      return valid({
        type: 'Link',
        link: args[2],
        subreddit: args[1],
      });
    case 'r':
      if (!args[1]) {
        return notFound;
      }
      return valid({
        type: 'Subreddit',
        subreddit: args[1],
      });
    default:
      return notFound;
  }
}

export function print(route: Valid): string {
  switch (route.type) {
    case 'Home':
      return '/';
    case 'Link':
      return `/link/${route.subreddit}/${route.link}`;
    case 'Subreddit':
      return `/r/${route.subreddit}`;
    default:
      return '';
  }
}

export function loadAction(route: Valid): ?Controller.Action {
  switch (route.type) {
    case 'Home':
      return null;
    case 'Link':
      return {
        type: 'Link',
        action: {
          type: 'Load',
          link: route.link,
        },
      };
    case 'Subreddit':
      return {
        type: 'Subreddit',
        action: {
          type: 'Load',
          subreddit: route.subreddit,
        },
      };
    default:
      return null;
  }
}
