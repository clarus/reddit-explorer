// @flow
import React, { PureComponent } from 'react';
import * as HomeController from './controller';
import HomeSubreddit from './view.subreddit';

type Props = {
  dispatch: (action: HomeController.Action) => void,
};

export default class Home extends PureComponent<void, Props, void> {
  render() {
    return (
      <div className="content">
        <p>This Reddit Explorer uses the <a href="https://github.com/clarus/redux-ship">Redux Ship</a> effect handler. Open the Javascript console to see the logs. The sources are on <a href="https://github.com/clarus/reddit-explorer">GitHub</a>.</p>
        {['reactjs', 'javascript', 'aww'].map(subreddit =>
          <HomeSubreddit
            dispatch={this.props.dispatch}
            key={subreddit}
            subreddit={subreddit}
          />
        )}
      </div>
    );
  }
}
