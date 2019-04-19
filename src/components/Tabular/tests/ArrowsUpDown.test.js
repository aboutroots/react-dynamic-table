import React from 'react';
import { shallow } from 'enzyme';
import { ArrowsUpDown } from '../ArrowsUpDown';

let wrapper, setSortByFilter, setSortDirectionFilter, columnName;

beforeEach(() => {
  setSortByFilter = jest.fn();
  setSortDirectionFilter = jest.fn();
  columnName = 'test';
  wrapper = shallow(
    <ArrowsUpDown
      setSortByFilter={setSortByFilter}
      setSortDirectionFilter={setSortDirectionFilter}
      columnName={columnName}
    />
  );
});

test('should render ArrowsUpDown', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle asc sorting', () => {
  wrapper.find('FaAngleUp').simulate('click');
  expect(setSortDirectionFilter).toHaveBeenLastCalledWith('asc');
});

test('should handle desc sorting', () => {
  wrapper.find('FaAngleDown').simulate('click');
  expect(setSortDirectionFilter).toHaveBeenLastCalledWith('desc');
});

test('should handle sorting by column', () => {
  wrapper.find('FaAngleDown').simulate('click');
  expect(setSortByFilter).toHaveBeenLastCalledWith('test');

  wrapper.setProps({ columnName: 'test2' });
  wrapper.find('FaAngleDown').simulate('click');
  expect(setSortByFilter).toHaveBeenLastCalledWith('test2');
});
