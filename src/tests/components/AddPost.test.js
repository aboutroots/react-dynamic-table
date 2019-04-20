import React from 'react';
import { shallow } from 'enzyme';
import { AddPost } from '../../components/AddPost/AddPost';
import moment from 'moment';

let wrapper, addPost, afterAdd;

beforeEach(() => {
  addPost = jest.fn();
  afterAdd = jest.fn();
  wrapper = shallow(<AddPost addPost={addPost} afterAdd={afterAdd} />);
});

test('should render AddPost properly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should call addPost on submit', () => {
  wrapper.setState({
    id: '1',
    username: 'test',
    postTitle: 'test',
    views: '1',
    likes: '1',
    createdAt: moment('1970-01-01', 'YYYY-MM-DD').valueOf(),
  });
  wrapper.find('form').simulate('submit', { preventDefault: () => {} });
  expect(addPost).toHaveBeenLastCalledWith({
    id: 1,
    username: 'test',
    postTitle: 'test',
    views: 1,
    likes: 1,
    createdAt: moment('1970-01-01', 'YYYY-MM-DD').valueOf(),
  });
});

test('should call afterAdd on submit', () => {
  wrapper.setState({
    id: '1',
    username: 'test',
    postTitle: 'test',
    views: '1',
    likes: '1',
    createdAt: moment('1970-01-01', 'YYYY-MM-DD').valueOf(),
  });
  wrapper.find('form').simulate('submit', { preventDefault: () => {} });
  expect(afterAdd).toHaveBeenCalled();
});

test('should not add post with any empty value', () => {
  let defaultState = {
    id: '1',
    username: 'test',
    postTitle: 'test',
    views: '1',
    likes: '1',
    createdAt: moment('1970-01-01', 'YYYY-MM-DD').valueOf(),
  };
  Object.keys(defaultState).forEach(key => {
    wrapper.setState({
      ...defaultState,
      [key]: '',
    });
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(addPost).not.toHaveBeenCalled();
  });
});
