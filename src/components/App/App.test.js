import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

let wrapper, authenticateUser, fetchPostsFromApi;

beforeEach(() => {
  authenticateUser = jest.fn();
  fetchPostsFromApi = jest.fn();
  wrapper = shallow(
    <App
      authenticateUser={authenticateUser}
      fetchPostsFromApi={fetchPostsFromApi}
    />
  );
});
test('should render App', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should perform actions on componentDidMount', () => {
  expect(authenticateUser).toHaveBeenCalled();
  expect(fetchPostsFromApi).toHaveBeenCalled();
});
