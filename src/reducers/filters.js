const defaultState = {
  sortBy: 'createdAt',
  sortDirection: 'desc',
  userNameFilter: '',
  itemsOnPage: 5,
  currentPage: 0,
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_USERNAME_FILTER':
      return {
        ...state,
        userNameFilter: action.value,
      };
    case 'SET_ITEMS_ON_PAGE_FILTER':
      return {
        ...state,
        itemsOnPage: action.value,
      };
    case 'SET_SORT_BY_FILTER':
      return {
        ...state,
        sortBy: action.value,
      };
    case 'SET_SORT_DIRECTION_FILTER':
      return {
        ...state,
        sortDirection: action.value,
      };
    case 'SET_CURRENT_PAGE_FILTER':
      return {
        ...state,
        currentPage: action.page,
      };
    default:
      return state;
  }
};
