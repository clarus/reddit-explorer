// @flow
import * as ModelLinks from '../model/links';

export type State = {
  links: ModelLinks.State,
  requestResult: ?string,
};

export const initialState: State = {
  links: ModelLinks.initialState,
  requestResult: null,
};

export type Commit = {
  type: 'Links',
  commit: ModelLinks.Commit,
} | {
  type: 'LoadSuccess',
  requestResult: string,
};

export function reduce(state: State, commit: Commit): State {
  switch (commit.type) {
    case 'Links':
      return {
        ...state,
        links: ModelLinks.reduce(state.links, commit.commit),
      };
    case 'LoadSuccess':
      return {
        ...state,
        requestResult: commit.requestResult,
      };
    default:
      return state;
  }
}
