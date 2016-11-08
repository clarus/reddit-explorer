// @flow
import React, { PureComponent } from 'react';
import SubredditLink from './view.link';
import * as ModelLinks from '../../model/links';

type Props = {
  links: ModelLinks.State,
};

export default class Subreddit extends PureComponent<void, Props, void> {
  render() {
    return (
      <ul>
        {Object.keys(this.props.links).map(linkId =>
          <SubredditLink
            key={linkId}
            link={this.props.links[linkId]}
          />
        )}
      </ul>
    );
  }
}
