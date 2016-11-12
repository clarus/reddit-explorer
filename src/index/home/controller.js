// @flow
import * as Ship from 'redux-ship';
import * as Effect from '../../effect';
import * as Route from '../../route';

export type Action = {
  type: 'ClickLink',
  route: Route.Valid,
};

type Control<A> = Ship.Ship<*, empty, void, A>;

export function* control(action: Action): Control<void> {
  switch (action.type) {
    case 'ClickLink':
      yield* Effect.transitionTo(action.route);
      return;
    default:
      return;
  }
}
