// @flow
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import './index.css';
import * as Ship from 'redux-ship';
import * as Effect from './effect';
import Index from './index/view';
import * as Controller from './index/controller';
import * as Route from './route';
import store from './store';

function padTwoDigits(n: number): string {
  return n < 10 ? '0' + String(n) : String(n);
}

function isoLocaleTimeString(date: Date): string {
  return padTwoDigits(date.getHours()) + ':' +
    padTwoDigits(date.getMinutes()) + ':' +
    padTwoDigits(date.getSeconds()) + '.' +
    (date.getMilliseconds() / 1000).toFixed(3).slice(2, 5);
}

function snapshotShape<Effect, Action>(
  snapshot: Ship.Snapshot<Effect, Action>
): string[] {
  return snapshot.map((snapshotItem) => snapshotItem.type);
}

function* controller(action: Controller.Action) {
  const {snapshot} = yield* Ship.snap(Controller.controller(action));
  const now = new Date();
  console.group('ship', '@', isoLocaleTimeString(now), action.type);
  console.log('action', action);
  console.log('shape', ...snapshotShape(snapshot));
  console.log('snapshot', snapshot);
  console.groupEnd();
}

function dispatch(action: Controller.Action): void {
  Ship.run(Effect.run, store, controller(action));
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
