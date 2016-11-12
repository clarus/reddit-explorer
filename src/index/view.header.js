// @flow
import React, { PureComponent } from 'react';
import * as Route from '../route';

type Props = {
  route: Route.t,
};

export default class IndexHeader extends PureComponent<void, Props, void> {
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
              Reddit Explorer
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
