// @flow
import * as Link from '../type/link';

export type State = {[id: string]: Link.t};

export const initialState: State = {};

export type Commit = {
  type: 'Add',
  links: {[id: string]: Link.t},
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
