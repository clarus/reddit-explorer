// @flow
import React, { PureComponent } from 'react';

type Props = {
  thumbnail: string,
};

export default class Thumbnail extends PureComponent<void, Props, void> {
  render() {
    return this.props.thumbnail !== 'default' && this.props.thumbnail !== 'self' ?
      <figure className="image is-64x64">
        <img alt="thumbnail" src={this.props.thumbnail} />
      </figure> :
      <i aria-hidden className="fa fa-commenting-o fa-5x" />;
  }
}
