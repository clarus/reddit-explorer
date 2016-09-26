// @flow

export type Link = {
  author: string,
  permalink: string,
  score: number,
  title: string,
  url: string,
};

export type State = {[id: string]: Link};

export const initialState: State = {};

export type Action = {
  type: 'Add',
  links: {[id: string]: Link},
};

export function reduce(state: State, action: Action): State {
  switch (action.type) {
    case 'Add':
      return {
        ...state,
        ...action.links,
      };
    default:
      return action;
  }
}
