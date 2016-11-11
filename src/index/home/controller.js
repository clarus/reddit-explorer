// @flow
import * as Ship from 'redux-ship';
import * as Effect from '../../effect';

export type Action = {
  type: 'ClickLink',
  url: string,
};

type Control<A> = Ship.Ship<*, empty, void, A>;

export function* control(action: Action): Control<void> {
  switch (action.type) {
    case 'ClickLink':
      yield* Effect.transitionTo(action.url);
      return;
    default:
      return;
  }
}
