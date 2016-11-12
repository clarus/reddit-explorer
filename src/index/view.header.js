// @flow
import React, { PureComponent } from 'react';
import * as Route from '../route';
import * as Controller from './controller';
import IndexHeaderSubtitle from './view.header.subtitle';

type Props = {
  dispatch: (action: Controller.Action) => void,
  route: Route.t,
};

export default class IndexHeader extends PureComponent<void, Props, void> {
  handleClickLink = (event: SyntheticEvent): void => {
    event.preventDefault();
    this.props.dispatch({
      type: 'ClickLink',
      route: this.homeRoute,
    });
  };

  homeRoute: Route.Valid = {
    type: 'Home',
  };

  renderSubTitle(route: Route.Valid) {
    switch (route.type) {
      case 'Home':
        return null;
      case 'Link':
      case 'Subreddit':
        return (
          <IndexHeaderSubtitle
            dispatch={this.props.dispatch}
            route={{
              type: 'Subreddit',
              subreddit: route.subreddit,
            }}
            title={`r/${route.subreddit}`}
          />
        );
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
              <a href={Route.print(this.homeRoute)} onClick={this.handleClickLink}>
                Reddit Explorer
              </a>
            </p>
            <p className="subtitle is-3">
              {this.props.route.type === 'Valid' && this.renderSubTitle(this.props.route.route)}
            </p>
          </div>
        </div>
      </section>
    );
  }
}
