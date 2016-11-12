// @flow
import React, { PureComponent } from 'react';
import * as Type from '../../type';
import * as Util from '../../util';

type Props = {
  comment: Type.Comment,
};

export default class LinkComment extends PureComponent<void, Props, void> {
  render() {
    return (
      <div className="card is-fullwidth">
        <div className="card-content">
          <div className="content">
            <p className="title is-6">
              {this.props.comment.author} – {this.props.comment.score} {Util.pluralize('point', this.props.comment.score)}
            </p>
            <p dangerouslySetInnerHTML={{__html: this.props.comment.body_html}} />
          </div>
        </div>
      </div>
    );
  }
}
