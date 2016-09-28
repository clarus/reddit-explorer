// @flow
import * as Link from '../type/link';

export type State = {[id: string]: Link.t};

export const initialState: State = {};

export type Action = {
  type: 'Add',
  links: {[id: string]: Link.t},
};

export function reduce(state: State, action: Action): State {
  switch (action.type) {
    case 'Add':
      return {
        ...state,
        ...action.links,
      };
    default:
      return action;
  }
}
