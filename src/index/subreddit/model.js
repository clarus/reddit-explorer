// @flow
import * as Type from '../../type';

export type State = {
  links: ?Type.Links,
};

export const initialState: State = {
  links: null,
};

export type Commit = {
  type: 'Add',
  links: Type.Links,
};

export function reduce(state: State, commit: Commit): State {
  switch (commit.type) {
    case 'Add':
      return {
        ...state,
        links: commit.links,
      };
    default:
      return state;
  }
}
