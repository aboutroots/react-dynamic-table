//@flow

import { dummyPosts } from './dummyData';
import type { postType } from '../flow/exports';

export const addPost = (post: postType) => ({
  type: 'ADD_POST',
  post,
});

export const setPosts = (posts: Array<postType>) => ({
  type: 'SET_POSTS',
  posts,
});

export const fetchPostsFromApi = () => {
  // eslint-disable-next-line flowtype/no-weak-types
  return (dispatch: (action: Object) => void) => {
    mockPostsApiCall().then(posts => dispatch(setPosts(posts)));
  };
};

const mockPostsApiCall = () => {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(dummyPosts);
    }, 300);
  });
};
