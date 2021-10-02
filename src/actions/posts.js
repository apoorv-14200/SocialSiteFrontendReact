import { UPDATE_POSTS } from './actionTypes';
const url = '/api/posts?page=1&limit=5';

export function fetchposts() {
  return (dispatch) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(updatePosts(data.data.posts));
      })
      .catch((err) => console.log('error', err));
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts: posts,
  };
}
