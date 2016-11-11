// @flow
import React, { PureComponent } from 'react';
import * as Type from '../../type';
import * as SubredditController from './controller';
import * as SubredditModel from './model';
import SubredditLink from './view.link';

type Props = {
  dispatch: (action: SubredditController.Action) => void,
  state: SubredditModel.State,
  subreddit: string,
};

export default class Subreddit extends PureComponent<void, Props, void> {
  renderLinks(links: Type.Links) {
    return (
      <div>
        {Object.keys(links).map(linkId =>
          <SubredditLink
            dispatch={this.props.dispatch}
            key={linkId}
            id={linkId}
            link={links[linkId]}
          />
        )}
      </div>
    );
  }

  render() {
    const links = this.props.state.links[this.props.subreddit];
    return links ? this.renderLinks(links) : <p>Loading...</p>;
  }
}
