// @flow
import React, { PureComponent } from 'react';
import * as Type from '../../type';
import SubredditLink from './view.link';
import * as SubredditModel from './model';

type Props = {
  state: SubredditModel.State,
};

export default class Subreddit extends PureComponent<void, Props, void> {
  renderLinks(links: Type.Links) {
    return (
      <ul>
        {Object.keys(links).map(linkId =>
          <SubredditLink
            key={linkId}
            link={links[linkId]}
          />
        )}
      </ul>
    );
  }

  render() {
    return this.props.state.links && this.renderLinks(this.props.state.links);
  }
}
