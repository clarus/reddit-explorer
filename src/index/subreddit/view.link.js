// @flow
import React, { PureComponent } from 'react';
import * as Route from '../../route';
import * as Type from '../../type';
import * as Util from '../../util';
import * as SubredditController from './controller';
import Thumbnail from '../../view/thumbnail';

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
      route: this.route(),
    });
  };

  route(): Route.Valid {
    return {
      type: 'Link',
      link: this.props.id,
      subreddit: this.props.link.subreddit,
    };
  }

  render() {
    return (
      <div className="card is-fullwidth">
        <div className="card-content">
          <div className="content">
            <div className="columns">
              <div className="column is-1">
                <div onClick={this.handleClickComments} style={{cursor: 'pointer'}}>
                  <Thumbnail thumbnail={this.props.link.thumbnail} />
                </div>
              </div>
              <div className="column">
                <p className="title is-5">
                  <a href={Route.print(this.route())} onClick={this.handleClickComments}>
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
