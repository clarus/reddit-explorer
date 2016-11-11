// @flow
import * as Type from '../type';

export type State = {[id: string]: Type.Link};

export const initialState: State = {};

export type Commit = {
  type: 'Add',
  links: {[id: string]: Type.Link},
};

export function reduce(state: State, commit: Commit): State {
  switch (commit.type) {
    case 'Add':
      return {
        ...state,
        ...commit.links,
      };
    default:
      return state;
  }
}
