// @flow
import React, { PureComponent } from 'react';

type Props = {
};

export default class Home extends PureComponent<void, Props, void> {
  render() {
    return (
      <div>
        <h1>Reddit</h1>
        <ul>
          {['reactjs', 'javascript', 'aww'].map(subreddit =>
            <li key={subreddit}><a href={`/r/${subreddit}`}>{subreddit}</a></li>
          )}
        </ul>
      </div>
    );
  }
}
