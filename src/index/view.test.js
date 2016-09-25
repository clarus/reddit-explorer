// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import Index from './view';
import * as Model from './model';

function handle() {
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Index
      handle={handle}
      state={Model.initialState}
    />,
    div,
  );
});
