// @flow

export type State = {
  requestResult: ?string,
};

export const initialState: State = {
  requestResult: null,
};

export type Action = {
  type: 'LoadSuccess',
  requestResult: string,
};

export function reduce(state: State, action: Action): State {
  switch (action.type) {
    case 'LoadSuccess':
      return {
        ...state,
        requestResult: action.requestResult,
      };
    default:
      return action;
  }
}
