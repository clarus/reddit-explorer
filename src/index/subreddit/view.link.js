// @flow
import React, { PureComponent } from 'react';
import * as Type from '../../type';
import * as SubredditController from './controller';

type Props = {
  dispatch: (action: SubredditController.Action) => void,
  id: string,
  link: Type.Link,
};

export default class SubredditLink extends PureComponent<void, Props, void> {
  handleClickLink = (event: SyntheticEvent): void => {
    event.preventDefault();
    if (event.target instanceof HTMLAnchorElement) {
      this.props.dispatch({
        type: 'ClickLink',
        url: event.target.pathname,
      });
    }
  };

  render() {
    return (
      <li>
        <p>
          <a href={this.props.link.url}>{this.props.link.title}</a>
        </p>
        <p>
          <a onClick={this.handleClickLink} href={`/link/${this.props.id}`}>
            {this.props.link.num_comments} comment{this.props.link.num_comments === 1 || 's'}
          </a>
        </p>
        <p>{this.props.link.score} – {this.props.link.author}</p>
      </li>
    );
  }
}
