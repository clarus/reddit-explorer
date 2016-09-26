// @flow
import React, { PureComponent } from 'react';
import * as ModelLinks from '../../model/links';

type Props = {
  links: ModelLinks.State,
};

export default class Posts extends PureComponent<void, Props, void> {
  renderPost(id: string, post: ModelLinks.Link) {
    return (
      <li key={id}>
        <a href={post.url}>{post.title}</a>
        <p>{post.score} – {post.author}</p>
      </li>
    );
  }

  render() {
    return (
      <ul>
        {Object.keys(this.props.links).map((linkId) =>
          this.renderPost(linkId, this.props.links[linkId])
        )}
      </ul>
    );
  }
}
