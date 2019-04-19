// @flow
type State = {
  sortBy: string,
  sortDirection: string,
  userNameFilter: string,
  itemsOnPage: number,
  currentPage: number,
};

const defaultState = {
  sortBy: 'createdAt',
  sortDirection: 'desc',
  userNameFilter: '',
  itemsOnPage: 5,
  currentPage: 0,
};

// eslint-disable-next-line flowtype/no-weak-types
export default (state: State = defaultState, action: Object): State => {
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
