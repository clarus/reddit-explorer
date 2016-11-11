// @flow
import * as Type from '../../type';

export type State = {
  comments: {
    [linkId: string]: {
      comments: Type.Comments,
      link: Type.Link,
    },
  },
};

export const initialState: State = {
  comments: {},
};

export type Commit = {
  type: 'Add',
  comments: Type.Comments,
  link: Type.Link,
  linkId: string,
};

export function reduce(state: State, commit: Commit): State {
  switch (commit.type) {
    case 'Add':
      return {
        ...state,
        comments: {
          ...state.comments,
          [commit.linkId]: {
            comments: commit.comments,
            link: commit.link,
          },
        },
      };
    default:
      return state;
  }
}
