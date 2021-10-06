import {
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILED,
  USER_PROFILE_BEGIN,
} from './actionTypes';
import URL from '../helper/urls';

export function fetchProfile(id) {
  return (dispatch) => {
    const url = URL.fetchProfile(id);
    dispatch(user_profile_begin());
    const token = localStorage.getItem('token');
    fetch(url, {
      // Adding method type
      method: 'GET',
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
            dispatch(user_profile_success(data.data.user));
          }, 500);
        } else {
          setTimeout(() => {
            dispatch(user_profile_failed(data.error));
          }, 500);
        }
      })
      .catch((err) => console.log('error', err));
  };
}

export function user_profile_begin() {
  return {
    type: USER_PROFILE_BEGIN,
  };
}

export function user_profile_success(user) {
  return {
    type: USER_PROFILE_SUCCESS,
    user: user,
  };
}

export function user_profile_failed(error) {
  return {
    type: USER_PROFILE_FAILED,
    error: error,
  };
}
