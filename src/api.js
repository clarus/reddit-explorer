// @flow
import * as Ship from 'redux-ship';
import * as Effect from './effect';
import * as Type from './type';

export function* hot<Commit, State>(
  subreddit: string
): Ship.Ship<*, Commit, State, Type.Links> {
  const url = `http://www.reddit.com/r/${subreddit}/hot.json?raw_json=1`;
  const requestResult = yield* Effect.httpRequest(url);
  const linksArray = JSON.parse(requestResult.text).data.children;
  return linksArray.reduce((accumulator, link) => ({
    ...accumulator,
    [link.data.id]: link.data,
  }), {});
}
