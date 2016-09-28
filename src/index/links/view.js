// @flow
import React, { PureComponent } from 'react';
import LinksLink from './view.link';
import * as ModelLinks from '../../model/links';

type Props = {
  links: ModelLinks.State,
};

export default class Links extends PureComponent<void, Props, void> {
  render() {
    return (
      <ul>
        {Object.keys(this.props.links).map((linkId) =>
          <LinksLink
            key={linkId}
            link={this.props.links[linkId]}
          />
        )}
      </ul>
    );
  }
}
