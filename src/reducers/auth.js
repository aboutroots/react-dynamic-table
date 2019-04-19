// @flow
type State = { +activeUser: null | string };

const defaultState = {
  activeUser: null,
};

// eslint-disable-next-line flowtype/no-weak-types
export default (state: State = defaultState, action: Object): State => {
  switch (action.type) {
    case 'AUTHENTICATE_USER':
      return {
        ...state,
        activeUser: action.userName,
      };
    default:
      return state;
  }
};
