import { ADD_POST_FAILED, ADD_POST_SUCCESS, UPDATE_POSTS } from './actionTypes';
import URL from '../helper/urls';

export function fetchposts() {
  const url = URL.fetchposts();
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

export function createPost(content) {
  const url = URL.createPost();
  return (dispatch) => {
    const token = localStorage.getItem('token');
    fetch(url, {
      // Adding method type
      method: 'POST',

      // Adding body or contents to send
      body: JSON.stringify({
        content: content,
      }),
      // Adding headers to the request
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.success) {
          setTimeout(() => {
            dispatch(create_post_success(data.data.post));
          }, 500);
        } else {
          setTimeout(() => {
            dispatch(create_post_failed(data.error));
          }, 500);
        }
      })
      .catch((err) => console.log('error', err));
  };
}

export function create_post_success(post) {
  return {
    type: ADD_POST_SUCCESS,
    post: post,
  };
}
export function create_post_failed(error) {
  return {
    type: ADD_POST_FAILED,
    error: error,
  };
}
