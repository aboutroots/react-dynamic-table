export const setUserNameFilter = value => ({
  type: 'SET_USERNAME_FILTER',
  value,
});

export const setItemsOnPageFilter = value => ({
  type: 'SET_ITEMS_ON_PAGE_FILTER',
  value,
});

export const setSortByFilter = value => ({
  type: 'SET_SORT_BY_FILTER',
  value,
});

export const setSortDirectionFilter = value => ({
  type: 'SET_SORT_DIRECTION_FILTER',
  value,
});

export const setCurrentPage = page => ({
  type: 'SET_CURRENT_PAGE_FILTER',
  page,
});
