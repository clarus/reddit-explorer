// @flow
import * as Ship from 'redux-ship';
import * as Effect from '../effect';
import * as Model from './model';

export type Action = {
  type: 'Load',
};

function* load(): Ship.t<Effect.t, Model.Action, Model.State, void> {
  const request = {
    body: null,
    method: 'GET',
    url: 'http://www.reddit.com/r/aww/hot.json',
  };
  const requestResult = yield* Effect.httpRequest(request);
  yield* Ship.dispatch({
    type: 'LoadSuccess',
    requestResult: requestResult.text,
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
