// @flow
import React, { PureComponent } from 'react';
import * as Controller from './controller';
import * as Model from './model';
import * as Route from '../route';
import * as HomeController from './home/controller';
import * as SubredditController from './subreddit/controller';
import IndexFooter from './view.footer';
import IndexHeader from './view.header';
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

  subTitle(route: Route.Valid): ?string {
    switch (route.type) {
      case 'Home':
        return null;
      case 'Link':
        const commentAndLink = this.props.state.link.comments[route.link];
        return commentAndLink && `r/${commentAndLink.link.subreddit}`;
      case 'Subreddit':
        return `r/${route.subreddit}`;
      default:
        return null;
    }
  }

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
        <IndexHeader
          dispatch={this.props.dispatch}
          route={this.props.route}
        />
        <section className="section">
          <div className="container">
            {this.renderContent()}
          </div>
        </section>
        <IndexFooter />
      </div>
    );
  }
}
