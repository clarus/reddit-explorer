// @flow
import * as Ship from 'redux-ship';
import * as Api from '../../api';
import * as LinkModel from './model';

export type Action = {
  type: 'Load',
  link: string,
};

type Control<A> = Ship.Ship<*, LinkModel.Commit, LinkModel.State, A>;

function* load(linkId: string): Control<void> {
  const currentComments = yield* Ship.getState(state => state.comments[linkId]);
  if (!currentComments) {
    const {comments, link} = yield* Api.comments(linkId);
    yield* Ship.commit({
      type: 'Add',
      comments,
      link,
      linkId,
    });
  }
}

export function* control(action: Action): Control<void> {
  switch (action.type) {
    case 'Load':
      yield* load(action.link);
      return;
    default:
      return;
  }
}
