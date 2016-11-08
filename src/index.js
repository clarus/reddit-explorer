// @flow
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import './index.css';
import * as Ship from 'redux-ship';
import {logControl} from 'redux-ship-logger';
import * as Effect from './effect';
import Index from './index/view';
import * as Controller from './index/controller';
import * as Route from './route';
import store from './store';

function dispatch(action: Controller.Action): void {
  Ship.run(Effect.run, store, logControl(Controller.control)(action));
}

const history = createHistory();

function route(): Route.t {
  return Route.parse(history.location.pathname);
}

function render() {
  ReactDOM.render(
    <Index
      dispatch={dispatch}
      route={route()}
      state={store.getState()}
    />,
    document.getElementById('root'),
  );
}

store.subscribe(render);

history.listen((location) => {
  dispatch({
    type: 'Load',
    route: Route.parse(location.pathname),
  });
});

render();

dispatch({
  type: 'Load',
  route: route(),
});
