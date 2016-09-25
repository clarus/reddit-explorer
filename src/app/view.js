// @flow
import React, { PureComponent } from 'react';
import logo from '../logo.svg';
import './view.css';

type Props = {
};

export default class App extends PureComponent<void, Props, void> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
