import { selectFiltered } from '../../selectors/posts';
import { filters, altFilters, posts } from '../__fixtures';

test('should filter test data properly 1', () => {
  expect(selectFiltered(posts, undefined, filters).length).toEqual(3);
});

test('should filter test data properly 2', () => {
  expect(selectFiltered(posts, undefined, altFilters).length).toEqual(1);
});
