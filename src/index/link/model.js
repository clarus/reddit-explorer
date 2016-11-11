// @flow
import * as Type from '../../type';

export type State = {
  comments: {[link: string]: Type.Comments},
};

export const initialState: State = {
  comments: {},
};

export type Commit = {
  type: 'Add',
  link: string,
  comments: Type.Comments,
};

export function reduce(state: State, commit: Commit): State {
  switch (commit.type) {
    case 'Add':
      return {
        ...state,
        comments: {
          ...state.comments,
          [commit.link]: commit.comments,
        },
      };
    default:
      return state;
  }
}
