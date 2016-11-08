// @flow
import * as Ship from 'redux-ship';
import * as Effect from '../effect';
import * as Route from '../route';
import * as Model from './model';

export type Action = {
  type: 'Load',
  route: Route.t,
};

function* load(): Ship.Ship<Effect.t, Model.Action, Model.State, void> {
  const url = 'http://www.reddit.com/r/aww/hot.json?raw_json=1';
  const requestResult = yield* Effect.httpRequest(url);
  yield* Ship.commit({
    type: 'LoadSuccess',
    requestResult: requestResult.text,
  });
  const linksArray = JSON.parse(requestResult.text).data.children;
  const links = linksArray.reduce((accumulator, link) => ({
    ...accumulator,
    [link.data.id]: link.data,
  }), {});
  yield* Ship.commit({
    type: 'Links',
    action: {
      type: 'Add',
      links,
    },
  });
}

export function controller(action: Action): Ship.Ship<Effect.t, Model.Action, Model.State, void> {
  switch (action.type) {
    case 'Load':
      return load();
    default:
      return action;
  }
}
