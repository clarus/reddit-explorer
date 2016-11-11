// @flow
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import * as Ship from 'redux-ship';
import {logControl} from 'redux-ship-logger';
import * as Effect from './effect';
import Index from './index/view';
import * as Controller from './index/controller';
import * as Route from './route';
import store from './store';

const history = createHistory();

function dispatch(action: Controller.Action): void {
  Ship.run(
    effect => Effect.run(history, effect),
    store,
    logControl(Controller.control)(action)
  );
}

function render() {
  ReactDOM.render(
    <Index
      dispatch={dispatch}
      route={Route.parse(history.location.pathname)}
      state={store.getState()}
    />,
    document.getElementById('root'),
  );
}

store.subscribe(render);

function load(location): void {
  render();
  const route = Route.parse(location.pathname);
  if (route.type === 'Valid') {
    const loadAction = Route.loadAction(route.route);
    if (loadAction) {
      dispatch(loadAction);
    }
  }
}

history.listen(location => load(location));
load(history.location);
