// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import Index from './view';
import * as Model from './model';

function dispatch() {
}

const home = {
  type: 'Valid',
  route: {
    type: 'Home',
  },
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Index
      dispatch={dispatch}
      route={home}
      state={Model.initialState}
    />,
    div,
  );
});
