import moment from 'moment';

const filters = {
  sortBy: 'createdAt',
  sortDirection: 'desc',
  userNameFilter: '',
  itemsOnPage: 5,
  currentPage: 0,
};

const altFilters = {
  sortBy: 'id',
  sortDirection: 'asc',
  userNameFilter: 'b',
  itemsOnPage: 10,
  currentPage: 0,
};

const posts = [
  {
    id: 1,
    username: 'John15',
    postTitle: 'Hello World',
    views: 15,
    likes: 90,
    createdAt: moment('01-01-2019', 'MM-DD-YYYY').valueOf(),
  },
  {
    id: 2,
    username: 'Mary',
    postTitle: 'World',
    views: 5,
    likes: 30,
    createdAt: moment('01-02-2019', 'MM-DD-YYYY').valueOf(),
  },
  {
    id: 3,
    username: 'Bob',
    postTitle: 'zzzz',
    views: 10,
    likes: 20,
    createdAt: moment('01-03-2019', 'MM-DD-YYYY').valueOf(),
  },
];

export { filters, altFilters, posts };
