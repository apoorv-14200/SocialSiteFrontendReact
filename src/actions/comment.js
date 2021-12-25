import { ADD_COMMENT_FAILED, ADD_COMMENT_SUCCESS } from './actionTypes';
import URL from '../helper/urls';
import { logout } from './auth';

export function createComment(content, id) {
  const url = URL.createComment();
  return (dispatch) => {
    const token = localStorage.getItem('token');
    fetch(url, {
      // Adding method type
      method: 'POST',

      // Adding body or contents to send
      body: JSON.stringify({
        content: content,
        post_id: id,
      }),
      // Adding headers to the request
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status == '401') {
          dispatch(logout());
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.success) {
          setTimeout(() => {
            dispatch(create_comment_success(data.comment, id));
          }, 500);
        } else {
          setTimeout(() => {
            dispatch(create_comment_failed(data.error));
          }, 500);
        }
      })
      .catch((err) => console.log('error', err));
  };
}

export function create_comment_success(comment, id) {
  return {
    type: ADD_COMMENT_SUCCESS,
    comment: comment,
    post_id: id,
  };
}
export function create_comment_failed(error) {
  return {
    type: ADD_COMMENT_FAILED,
    error: error,
  };
}
