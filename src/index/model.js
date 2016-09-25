// @flow

export type State = {
  requestResult: ?string,
};

export const initialState: State = {
  requestResult: null,
};

export type Action = {
  type: '@@redux/INIT',
} | {
  type: 'LoadSuccess',
  requestResult: string,
};

export function reduce(state: State, action: Action): State {
  switch (action.type) {
    case '@@redux/INIT':
      return state;
    case 'LoadSuccess':
      return {
        ...state,
        requestResult: action.requestResult,
      };
    default:
      return action;
  }
}
