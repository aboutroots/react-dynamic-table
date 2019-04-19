const defaultState = {};
export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [action.post, ...state];
    case 'SET_POSTS':
      return [...action.posts];
    default:
      return state;
  }
};
