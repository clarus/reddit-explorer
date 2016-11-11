// @flow
import React, { PureComponent } from 'react';
import * as Type from '../../type';
import * as LinkModel from './model';

type Props = {
  link: string,
  state: LinkModel.State,
};

export default class Link extends PureComponent<void, Props, void> {
  renderLinks(comments: Type.Comments) {
    return (
      <ul>
        {Object.keys(comments).map(commentId =>
          <li key={commentId}>
            <p>{comments[commentId].body}</p>
            <p>{comments[commentId].score} – {comments[commentId].author}</p>
          </li>
        )}
      </ul>
    );
  }

  render() {
    const comments = this.props.state.comments[this.props.link];
    return comments ? this.renderLinks(comments) : <p>Loading...</p>;
  }
}
