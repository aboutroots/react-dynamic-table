// @flow
import type { postType } from '../flow/exports';

const defaultState = [];

// eslint-disable-next-line flowtype/no-weak-types
export default (state: Array<postType> = defaultState, action: Object) => {
  switch (action.type) {
    case 'ADD_POST':
      return [action.post, ...state];
    case 'SET_POSTS':
      return [...action.posts];
    default:
      return state;
  }
};
