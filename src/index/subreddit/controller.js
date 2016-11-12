// @flow
import * as Ship from 'redux-ship';
import * as Api from '../../api';
import * as Effect from '../../effect';
import * as Route from '../../route';
import * as SubredditModel from './model';

export type Action = {
  type: 'ClickLink',
  route: Route.Valid,
} | {
  type: 'Load',
  subreddit: string,
};

type Control<A> = Ship.Ship<*, SubredditModel.Commit, SubredditModel.State, A>;

function* load(subreddit: string): Control<void> {
  const currentLinks = yield* Ship.getState(state => state.links[subreddit]);
  if (!currentLinks) {
    const links = yield* Api.hot(subreddit);
    yield* Ship.commit({
      type: 'Add',
      links,
      subreddit,
    });
  }
}

export function* control(action: Action): Control<void> {
  switch (action.type) {
    case 'ClickLink':
      yield* Effect.transitionTo(action.route);
      return;
    case 'Load':
      yield* load(action.subreddit);
      return;
    default:
      return;
  }
}
