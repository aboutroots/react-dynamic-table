import moment from 'moment';

export const selectFiltered = (
  posts,
  activeUser,
  { userNameFilter, sortBy, sortDirection }
) => {
  return posts
    .map(post => {
      const active = post.username === activeUser;
      return {
        ...post,
        active,
      };
    })
    .filter(post => {
      return post.username.toLowerCase().includes(userNameFilter.toLowerCase());
    })
    .sort((a, b) => {
      let compare = null;
      if (sortBy === 'createdAt') {
        const first = moment(a.createdAt);
        const second = moment(b.createdAt);
        compare = first.isSameOrBefore(second, 'day') ? 1 : -1;
      } else if (typeof a[sortBy] === 'string') {
        const first = a[sortBy].toLowerCase();
        const second = b[sortBy].toLowerCase();
        compare = first.localeCompare(second);
      } else {
        compare = a[sortBy] > b[sortBy] ? 1 : -1;
      }

      return sortDirection === 'asc' ? compare : -compare;
    });
};

export const selectPaginated = (posts, { currentPage, itemsOnPage }) => {
  const slice_start = currentPage * itemsOnPage;
  const slice_end = slice_start + itemsOnPage;

  return posts.slice(slice_start, slice_end);
};
