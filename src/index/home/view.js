// @flow
import React, { PureComponent } from 'react';
import * as Route from '../../route';
import * as HomeController from './controller';

type Props = {
  dispatch: (action: HomeController.Action) => void,
};

export default class Home extends PureComponent<void, Props, void> {
  handleClickLink = (event: SyntheticEvent): void => {
    event.preventDefault();
    if (event.target instanceof HTMLAnchorElement) {
      this.props.dispatch({
        type: 'ClickLink',
        url: event.target.pathname,
      });
    }
  };

  render() {
    return (
      <div className="content">
        {['reactjs', 'javascript', 'aww'].map(subreddit =>
          <p className="title is-4" key={subreddit}>
            <a
              href={Route.print({type: 'Subreddit', subreddit})}
              onClick={this.handleClickLink}
            >
              r/{subreddit}
            </a>
          </p>
        )}
      </div>
    );
  }
}
