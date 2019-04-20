import React from 'react';
import { shallow } from 'enzyme';
import { TablePagination } from '../../components/Tabular/TablePagination';

let wrapper, setCurrentPage, currentPage, pagesCount;

beforeEach(() => {
  setCurrentPage = jest.fn();
  currentPage = 0;
  pagesCount = 5;
  wrapper = shallow(
    <TablePagination
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      pagesCount={pagesCount}
    />
  );
});

test('should render TablePagination', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should set current page', () => {
  wrapper
    .find('p')
    .at(1)
    .simulate('click');
  expect(setCurrentPage).toHaveBeenLastCalledWith(1);
});
