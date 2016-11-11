// @flow
import * as Ship from 'redux-ship';
import * as Model from './model';
import * as SubredditController from './subreddit/controller';

export type Action = {
  type: 'Subreddit',
  action: SubredditController.Action,
};

type Control<A> = Ship.Ship<*, Model.Commit, Model.State, A>;

export function* control(action: Action): Control<void> {
  switch (action.type) {
    case 'Subreddit':
      yield* Ship.map(
        commit => ({type: 'Subreddit', commit}),
        state => state.subreddit,
        SubredditController.control(action.action)
      );
      return;
    default:
      return;
  }
}
