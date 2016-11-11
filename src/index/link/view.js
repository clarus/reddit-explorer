// @flow
import React, { PureComponent } from 'react';
import * as Type from '../../type';
import * as Util from '../../util';
import * as LinkModel from './model';

type Props = {
  link: string,
  state: LinkModel.State,
};

export default class Link extends PureComponent<void, Props, void> {
  renderLink(link: Type.Link) {
    return (
      <div>
        <h2>{link.title}</h2>
        <h3>{link.num_comments} {Util.pluralize('comment', link.num_comments)}</h3>
      </div>
    );
  }

  renderComments(comments: Type.Comments) {
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
    return comments ?
      <div>
        {this.renderLink(comments.link)}
        {this.renderComments(comments.comments)}
      </div> :
      <p>Loading...</p>;
  }
}
