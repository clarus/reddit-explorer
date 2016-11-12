// @flow
import React, { PureComponent } from 'react';

type Props = {
  thumbnail: string,
};

export default class Thumbnail extends PureComponent<void, Props, void> {
  render() {
    switch (this.props.thumbnail) {
      case '':
      case 'default':
      case 'self':
        return <i aria-hidden className="fa fa-commenting-o fa-5x" />;
      default:
        return (
          <figure className="image is-64x64">
            <img alt="thumbnail" src={this.props.thumbnail} />
          </figure>
        );
    }
  }
}
