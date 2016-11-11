// @flow
import React, { PureComponent } from 'react';
import * as Type from '../../type';

type Props = {
  link: Type.Link,
};

export default class SubredditLink extends PureComponent<void, Props, void> {
  render() {
    return (
      <li>
        <a href={this.props.link.url}>{this.props.link.title}</a>
        <p>{this.props.link.score} – {this.props.link.author}</p>
      </li>
    );
  }
}
