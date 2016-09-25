import * as Redux from 'redux';
import createLogger from 'redux-logger';
import * as Model from './index/model';

const middlewares = [
  createLogger(),
];

export default Redux.createStore(
  Model.reduce,
  Model.initialState,
  Redux.applyMiddleware(...middlewares),
);
