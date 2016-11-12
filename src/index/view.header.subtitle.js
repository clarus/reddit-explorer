// @flow
import React, { PureComponent } from 'react';
import * as Route from '../route';
import * as Controller from './controller';

type Props = {
  dispatch: (action: Controller.Action) => void,
  route: Route.Valid,
  title: string,
};

export default class IndexHeaderSubtitle extends PureComponent<void, Props, void> {
  handleClickLink = (event: SyntheticEvent): void => {
    event.preventDefault();
    this.props.dispatch({
      type: 'ClickLink',
      route: this.props.route,
    });
  };

  render() {
    return (
      <a href={Route.printHref(this.props.route)} onClick={this.handleClickLink}>
        {this.props.title}
      </a>
    );
  }
}
