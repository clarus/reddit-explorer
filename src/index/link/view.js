// @flow
import React, { PureComponent } from 'react';
import * as Type from '../../type';
import * as Util from '../../util';
import * as LinkModel from './model';
import LinkComment from './view.comment';
import Thumbnail from '../../view/thumbnail';

type Props = {
  link: string,
  state: LinkModel.State,
};

export default class Link extends PureComponent<void, Props, void> {
  renderLink(link: Type.Link) {
    return (
      <div className="columns" style={{marginBottom: 40}}>
        <div className="column is-1">
          <Thumbnail thumbnail={link.thumbnail} />
        </div>
        <div className="column">
          <p className="title is-4">
            <a href={link.url}>{link.title}</a>
          </p>
          <p className="title is-5">
            {link.num_comments} {Util.pluralize('comment', link.num_comments)}
          </p>
        </div>
      </div>
    );
  }

  renderComments(comments: Type.Comments) {
    return Object.keys(comments).map(commentId =>
      <LinkComment
        comment={comments[commentId]}
        key={commentId}
      />
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
