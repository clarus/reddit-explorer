// @flow
import React, { PureComponent } from 'react';
import * as Route from '../route';
import * as Controller from './controller';

type Props = {
  dispatch: (action: Controller.Action) => void,
  route: Route.t,
};

export default class IndexHeader extends PureComponent<void, Props, void> {
  handleClickLink = (event: SyntheticEvent): void => {
    event.preventDefault();
    if (event.target instanceof HTMLAnchorElement) {
      this.props.dispatch({
        type: 'ClickLink',
        url: event.target.pathname,
      });
    }
  };

  subTitle(route: Route.Valid): ?string {
    switch (route.type) {
      case 'Home':
        return null;
      case 'Link':
        return null;
      case 'Subreddit':
        return `r/${route.subreddit}`;
      default:
        return null;
    }
  }

  render() {
    return (
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <p className="title is-1">
              <a href="/" onClick={this.handleClickLink}>Reddit Explorer</a>
            </p>
            <p className="subtitle is-3">
              {this.props.route.type === 'Valid' && this.subTitle(this.props.route.route)}
            </p>
          </div>
        </div>
      </section>
    );
  }
}
