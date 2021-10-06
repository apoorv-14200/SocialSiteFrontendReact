import { TOGGLE_LIKE_SUCCESS, TOGGLE_LIKE_FAILED } from './actionTypes';
import URL from '../helper/urls';

export function toggleLike(id, type) {
  const url = URL.toggleLike(id, type);
  return (dispatch) => {
    const token = localStorage.getItem('token');
    fetch(url, {
      // Adding method type
      method: 'POST',
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
            dispatch(
              toggle_like_success(
                data.data.deleted,
                id,
                type,
                data.data.liketosent
              )
            );
          }, 50);
        } else {
          setTimeout(() => {
            dispatch(toggle_like_failed(data.error));
          }, 50);
        }
      })
      .catch((err) => console.log('error', err));
  };
}

export function toggle_like_success(deleted, id, type, like) {
  return {
    type: TOGGLE_LIKE_SUCCESS,
    deleted: deleted,
    id: id,
    likeabletype: type,
    like: like,
  };
}
export function toggle_like_failed(error) {
  return {
    type: TOGGLE_LIKE_FAILED,
    error: error,
  };
}
