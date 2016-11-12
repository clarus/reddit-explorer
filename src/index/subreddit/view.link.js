// @flow
import React, { PureComponent } from 'react';
import * as Type from '../../type';
import * as Util from '../../util';
import * as SubredditController from './controller';

type Props = {
  dispatch: (action: SubredditController.Action) => void,
  id: string,
  link: Type.Link,
};

export default class SubredditLink extends PureComponent<void, Props, void> {
  handleClickComments = (event: SyntheticEvent): void => {
    event.preventDefault();
    this.props.dispatch({
      type: 'ClickLink',
      url: `/link/${this.props.id}`,
    });
  };

  renderThumbnail(thumbnail: string) {
    const thumbnailLink = Util.thumbnailLink(thumbnail);
    return thumbnailLink ?
      <figure className="image is-64x64">
        <img alt="thumbnail" src={thumbnailLink} />
      </figure> :
      <div style={{textDecoration: 'none'}}>
        <i aria-hidden className="fa fa-commenting-o fa-5x" />
      </div>;
  }

  render() {
    return (
      <div className="card is-fullwidth">
        <div className="card-content">
          <div className="content">
            <div className="columns">
              <div className="column is-1">
                <div onClick={this.handleClickComments} style={{cursor: 'pointer'}}>
                  {this.renderThumbnail(this.props.link.thumbnail)}
                </div>
              </div>
              <div className="column">
                <p className="title is-5">
                  <a href={`/link/${this.props.id}`} onClick={this.handleClickComments}>
                    {this.props.link.title}
                  </a>
                </p>
                {this.props.link.score} {Util.pluralize('point', this.props.link.score)} by <a href={`https://www.reddit.com/user/${this.props.link.author}`}>{this.props.link.author}</a>
                <br />
                {this.props.link.num_comments} {Util.pluralize('comment', this.props.link.num_comments)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
