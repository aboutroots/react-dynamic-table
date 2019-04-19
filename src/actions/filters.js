//@flow

export const setUserNameFilter = (value: string) => ({
  type: 'SET_USERNAME_FILTER',
  value,
});

export const setItemsOnPageFilter = (value: number) => ({
  type: 'SET_ITEMS_ON_PAGE_FILTER',
  value,
});

export const setSortByFilter = (value: string) => ({
  type: 'SET_SORT_BY_FILTER',
  value,
});

export const setSortDirectionFilter = (value: 'asc' | 'desc') => ({
  type: 'SET_SORT_DIRECTION_FILTER',
  value,
});

export const setCurrentPage = (page: number) => ({
  type: 'SET_CURRENT_PAGE_FILTER',
  page,
});
