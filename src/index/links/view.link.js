// @flow
import React, { PureComponent } from 'react';
import * as Link from '../../type/link';

type Props = {
  link: Link.t,
};

export default class LinksLink extends PureComponent<void, Props, void> {
  render() {
    return (
      <li>
        <a href={this.props.link.url}>{this.props.link.title}</a>
        <p>{this.props.link.score} – {this.props.link.author}</p>
      </li>
    );
  }
}
