// @flow
import React, { PureComponent } from 'react';
import logo from '../logo.svg';
import './view.css';
import * as Controller from './controller';
import * as Model from './model';
import Posts from './posts/view';

type Props = {
  handle: (action: Controller.Action) => void,
  state: Model.State,
};

export default class Index extends PureComponent<void, Props, void> {
  render() {
    return (
      <div className="Index">
        <div className="Index-header">
          <img src={logo} className="Index-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p>
          {!this.props.state.requestResult && 'Loading...'}
        </p>
        <Posts
          links={this.props.state.links}
        />
      </div>
    );
  }
}
