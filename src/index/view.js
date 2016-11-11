// @flow
import React, { PureComponent } from 'react';
import * as Controller from './controller';
import * as Model from './model';
import * as Route from '../route';
import * as HomeController from './home/controller';
import * as SubredditController from './subreddit/controller';
import Link from './link/view';
import Home from './home/view';
import NotFound from './not-found/view';
import Subreddit from './subreddit/view';

type Props = {
  dispatch: (action: Controller.Action) => void,
  route: Route.t,
  state: Model.State,
};

export default class Index extends PureComponent<void, Props, void> {
  handleDispatchHome = (action: HomeController.Action): void => {
    this.props.dispatch({
      type: 'Home',
      action,
    });
  };

  handleDispatchSubreddit = (action: SubredditController.Action): void => {
    this.props.dispatch({
      type: 'Subreddit',
      action,
    });
  };

  renderValidContent(route: Route.Valid) {
    switch (route.type) {
      case 'Home':
        return (
          <Home
            dispatch={this.handleDispatchHome}
          />
        );
      case 'Link':
        return (
          <Link
            link={route.link}
            state={this.props.state.link}
          />
        );
      case 'Subreddit':
        return (
          <Subreddit
            dispatch={this.handleDispatchSubreddit}
            state={this.props.state.subreddit}
            subreddit={route.subreddit}
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
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Reddit Explorer
              </h1>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            {this.renderContent()}
          </div>
        </section>
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <p>
                Built by <a href="https://github.com/clarus">Guillaume Claret</a> using <a href="https://github.com/clarus/redux-ship">Redux Ship</a>.
              </p>
              <p>
                <a className="icon" href="https://github.com/clarus/reddit-explorer">
                  <i className="fa fa-github" />
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
