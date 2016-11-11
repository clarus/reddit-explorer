// @flow
import * as Ship from 'redux-ship';
import * as Effect from '../../effect';
import * as SubredditModel from './model';

export type Action = {
  type: 'Load',
  subreddit: string,
};

type Control<A> = Ship.Ship<*, SubredditModel.Commit, SubredditModel.State, A>;

function* load(subreddit: string): Control<void> {
  const url = `http://www.reddit.com/r/${subreddit}/hot.json?raw_json=1`;
  const requestResult = yield* Effect.httpRequest(url);
  const linksArray = JSON.parse(requestResult.text).data.children;
  const links = linksArray.reduce((accumulator, link) => ({
    ...accumulator,
    [link.data.id]: link.data,
  }), {});
  yield* Ship.commit({
    type: 'Add',
    links,
  });
}

export function* control(action: Action): Control<void> {
  switch (action.type) {
    case 'Load':
      yield* load(action.subreddit);
      return;
    default:
      return;
  }
}
