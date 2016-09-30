// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import Index from './view';
import * as Model from './model';

function dispatch() {
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Index
      dispatch={dispatch}
      state={Model.initialState}
    />,
    div,
  );
});
