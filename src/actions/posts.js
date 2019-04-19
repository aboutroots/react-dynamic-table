import { dummyPosts } from './dummyData';

export const addPost = post => ({
  type: 'ADD_POST',
  post,
});

export const setPosts = posts => ({
  type: 'SET_POSTS',
  posts,
});

export const fetchPostsFromApi = () => {
  return dispatch => {
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
