const defaultState = {
  activeUser: null,
};
export default (state = defaultState, action) => {
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
