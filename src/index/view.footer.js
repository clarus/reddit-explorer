// @flow
import React, { PureComponent } from 'react';

type Props = {
};

export default class IndexFooter extends PureComponent<void, Props, void> {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              Built by <a href="https://github.com/clarus">Guillaume Claret</a> using <a href="https://github.com/clarus/redux-ship">Redux Ship</a>.
            </p>
            <p>
              <a className="icon" href="https://github.com/clarus/reddit-explorer">
                <i className="fa fa-github" />
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
