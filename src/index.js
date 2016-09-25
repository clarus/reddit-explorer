// @flow
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as Ship from 'redux-ship';
import * as Effect from './effect';
import Index from './index/view';
import * as Controller from './index/controller';
import store from './store';

function handle(action: Controller.Action): void {
  Ship.run(Effect.run, store.dispatch, store.getState, Controller.controller(action));
}

function render() {
  ReactDOM.render(
    <Index
      handle={handle}
      state={store.getState()}
    />,
    document.getElementById('root'),
  );
}

store.subscribe(render);
render();

handle({
  type: 'Load',
});
