import * as Redux from 'redux';
import createLogger from 'redux-logger';
import * as Ship from 'redux-ship';
import * as Effect from './effect';
import * as Controller from './app/controller';
import * as Model from './app/model';

const middlewares = [
  Ship.middleware(Effect.run, Controller.controller),
  createLogger(),
];

export default Redux.createStore(
  Model.reduce,
  Model.initialState,
  Redux.applyMiddleware(...middlewares),
);
