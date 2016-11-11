// @flow
import * as LinkModel from './link/model';
import * as SubredditModel from './subreddit/model';

export type State = {
  link: LinkModel.State,
  subreddit: SubredditModel.State,
};

export const initialState: State = {
  link: LinkModel.initialState,
  subreddit: SubredditModel.initialState,
};

export type Commit = {
  type: 'Link',
  commit: LinkModel.Commit,
} | {
  type: 'Subreddit',
  commit: SubredditModel.Commit,
};

export function reduce(state: State, commit: Commit): State {
  switch (commit.type) {
    case 'Link':
      return {
        ...state,
        link: LinkModel.reduce(state.link, commit.commit),
      };
    case 'Subreddit':
      return {
        ...state,
        subreddit: SubredditModel.reduce(state.subreddit, commit.commit),
      };
    default:
      return state;
  }
}
