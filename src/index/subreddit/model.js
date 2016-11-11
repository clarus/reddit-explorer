// @flow
import * as Type from '../../type';

export type State = {
  links: {[subreddit: string]: Type.Links},
};

export const initialState: State = {
  links: {},
};

export type Commit = {
  type: 'Add',
  links: Type.Links,
  subreddit: string,
};

export function reduce(state: State, commit: Commit): State {
  switch (commit.type) {
    case 'Add':
      return {
        ...state,
        links: {
          ...state.links,
          [commit.subreddit]: commit.links,
        },
      };
    default:
      return state;
  }
}
