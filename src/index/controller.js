// @flow
import * as Ship from 'redux-ship';
import * as Effect from '../effect';
import * as Model from './model';

export type Action = {
  type: 'Load',
};

function* load(): Ship.t<Effect.t, Model.Action, Model.State, void> {
  const url = 'http://www.reddit.com/r/aww/hot.json?raw_json=1';
  const requestResult = yield* Effect.httpRequest(url);
  yield* Ship.dispatch({
    type: 'LoadSuccess',
    requestResult: requestResult.text,
  });
  const linksArray = JSON.parse(requestResult.text).data.children;
  const links = linksArray.reduce((accumulator, link) => ({
    ...accumulator,
    [link.data.id]: link.data,
  }), {});
  yield* Ship.dispatch({
    type: 'Links',
    action: {
      type: 'Add',
      links,
    },
  });
}

export function controller(action: Action): Ship.t<Effect.t, Model.Action, Model.State, void> {
  switch (action.type) {
    case 'Load':
      return load();
    default:
      return action;
  }
}
