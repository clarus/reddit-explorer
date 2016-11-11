// @flow
import * as Ship from 'redux-ship';
import * as Effect from './effect';
import * as Type from './type';

export function* comments<Commit, State>(
  linkId: string
): Ship.Ship<*, Commit, State, {
  comments: Type.Comments,
  link: Type.Link,
}> {
  const url = `http://www.reddit.com/comments/${linkId}.json?raw_json=1`;
  const requestResult = yield* Effect.httpRequest(url);
  const result = JSON.parse(requestResult.text);
  const link = result[0].data.children[0].data;
  const commentsArray = result[1].data.children;
  const comments = commentsArray.reduce((accumulator, comment) => ({
    ...accumulator,
    [comment.data.id]: comment.data,
  }), {});
  return {comments, link};
}

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
