// @flow
import * as Ship from 'redux-ship';
import * as Effect from '../effect';
import * as Model from './model';
import * as HomeController from './home/controller';
import * as LinkController from './link/controller';
import * as SubredditController from './subreddit/controller';

export type Action = {
  type: 'ClickLink',
  url: string,
} | {
  type: 'Home',
  action: HomeController.Action,
} | {
  type: 'Link',
  action: LinkController.Action,
} | {
  type: 'Subreddit',
  action: SubredditController.Action,
};

type Control<A> = Ship.Ship<*, Model.Commit, Model.State, A>;

export function* control(action: Action): Control<void> {
  switch (action.type) {
    case 'ClickLink':
      yield* Effect.transitionTo(action.url);
      return;
    case 'Home':
      yield* Ship.map(
        commit => commit,
        state => {},
        HomeController.control(action.action)
      );
      return;
    case 'Link':
      yield* Ship.map(
        commit => ({type: 'Link', commit}),
        state => state.link,
        LinkController.control(action.action)
      );
      return;
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
