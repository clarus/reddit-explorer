// @flow
import * as SubredditModel from './subreddit/model';

export type State = {
  subreddit: SubredditModel.State,
};

export const initialState: State = {
  subreddit: SubredditModel.initialState,
};

export type Commit = {
  type: 'Subreddit',
  commit: SubredditModel.Commit,
};

export function reduce(state: State, commit: Commit): State {
  switch (commit.type) {
    case 'Subreddit':
      return {
        ...state,
        subreddit: SubredditModel.reduce(state.subreddit, commit.commit),
      };
    default:
      return state;
  }
}
