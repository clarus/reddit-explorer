// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './view';
import * as Model from './model';

function handle() {
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <App
      handle={handle}
      state={Model.initialState}
    />,
    div,
  );
});
