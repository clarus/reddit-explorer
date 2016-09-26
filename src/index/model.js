// @flow
import * as ModelLinks from '../model/links';

export type State = {
  links: ModelLinks.State,
  requestResult: ?string,
};

export const initialState: State = {
  links: ModelLinks.initialState,
  requestResult: null,
};

export type Action = {
  type: '@@redux/INIT',
} | {
  type: 'Links',
  action: ModelLinks.Action,
} | {
  type: 'LoadSuccess',
  requestResult: string,
};

export function reduce(state: State, action: Action): State {
  switch (action.type) {
    case '@@redux/INIT':
      return state;
    case 'Links':
      return {
        ...state,
        links: ModelLinks.reduce(state.links, action.action),
      };
    case 'LoadSuccess':
      return {
        ...state,
        requestResult: action.requestResult,
      };
    default:
      return action;
  }
}
