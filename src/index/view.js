// @flow
import React, { PureComponent } from 'react';
import logo from '../logo.svg';
import './view.css';
import * as Controller from './controller';
import * as Model from './model';
import * as Route from '../route';
import Home from './home/view';
import NotFound from './not-found/view';
import Subreddit from './subreddit/view';

type Props = {
  dispatch: (action: Controller.Action) => void,
  route: Route.t,
  state: Model.State,
};

export default class Index extends PureComponent<void, Props, void> {
  renderValidContent(route: Route.Valid) {
    switch (route.type) {
      case 'Home':
        return <Home />;
      case 'Subreddit':
        return (
          <Subreddit
            state={this.props.state.subreddit}
          />
        );
      default:
        return null;
    }
  }

  renderInvalidContent(route: Route.Invalid) {
    switch (route.type) {
      case 'NotFound':
        return <NotFound />;
      default:
        return null;
    }
  }

  renderContent() {
    switch (this.props.route.type) {
      case 'Valid':
        return this.renderValidContent(this.props.route.route);
      case 'Invalid':
        return this.renderInvalidContent(this.props.route.route);
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="Index">
        <div className="Index-header">
          <img src={logo} className="Index-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {this.renderContent()}
      </div>
    );
  }
}
