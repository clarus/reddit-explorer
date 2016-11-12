// @flow
import React, { PureComponent } from 'react';
import * as Route from '../../route';
import * as HomeController from './controller';

type Props = {
  dispatch: (action: HomeController.Action) => void,
  subreddit: string,
};

export default class HomeSubreddit extends PureComponent<void, Props, void> {
  handleClickLink = (event: SyntheticEvent): void => {
    event.preventDefault();
    this.props.dispatch({
      type: 'ClickLink',
      route: this.route(),
    });
  };

  route(): Route.Valid {
    return {
      type: 'Subreddit',
      subreddit: this.props.subreddit,
    };
  }

  render() {
    return (
      <p className="title is-4">
        <a
          href={Route.printHref(this.route())}
          onClick={this.handleClickLink}
        >
          r/{this.props.subreddit}
        </a>
      </p>
    );
  }
}
