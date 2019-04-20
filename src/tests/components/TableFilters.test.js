import React from 'react';
import { shallow } from 'enzyme';
import { TableFilters } from '../../components/Tabular/TableFilters';
import { filters, altFilters } from '../__fixtures';

let wrapper,
  userNameFilter,
  itemsOnPage,
  setUserNameFilter,
  setItemsOnPageFilter;

beforeEach(() => {
  setUserNameFilter = jest.fn();
  setItemsOnPageFilter = jest.fn();
  itemsOnPage = filters.itemsOnPage;
  userNameFilter = filters.userNameFilter;
  wrapper = shallow(
    <TableFilters
      setItemsOnPageFilter={setItemsOnPageFilter}
      setUserNameFilter={setUserNameFilter}
      itemsOnPage={itemsOnPage}
      userNameFilter={userNameFilter}
    />
  );
});

test('should render TableFilters properly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render TableFilters with alt data properly', () => {
  wrapper.setProps({
    itemsOnPage: altFilters.itemsOnPage,
    userNameFilter: altFilters.userNameFilter,
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle username input text change', () => {
  wrapper
    .find('input')
    .simulate('change', { currentTarget: { value: 'test' } });
  expect(setUserNameFilter).toHaveBeenLastCalledWith('test');
});

test('should handle selecting items on page number change', () => {
  wrapper.find('select').simulate('change', { currentTarget: { value: '20' } });
  expect(setItemsOnPageFilter).toHaveBeenLastCalledWith(20);
});
