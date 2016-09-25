// @flow
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/view';
import store from './store';

function render() {
  ReactDOM.render(
    <App
      dispatch={store.dispatch}
      state={store.getState()}
    />,
    document.getElementById('root'),
  );
}

store.subscribe(render);
render();

store.dispatch({
  type: 'Load',
});
