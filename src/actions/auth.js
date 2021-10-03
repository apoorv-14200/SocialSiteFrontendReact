import { LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS } from './actionTypes';
import URL from '../helper/urls';

const url = URL.login();

export function authorizeuser(data) {
  console.log(data);
  return (dispatch) => {
    dispatch(login_start());
    fetch(url, {
      // Adding method type
      method: 'POST',

      // Adding body or contents to send
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
      // Adding headers to the request
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.success) {
          setTimeout(() => {
            dispatch(login_success(data.data));
          }, 2000);
        } else {
          setTimeout(() => {
            dispatch(login_failed(data.error));
          }, 2000);
        }
      })
      .catch((err) => console.log('error', err));
  };
}

export function login_start(data) {
  // console.log(user_info);
  return {
    type: LOGIN_START,
  };
}
export function login_success(user) {
  // console.log(user_info);
  return {
    type: LOGIN_SUCCESS,
    user: user,
  };
}
export function login_failed(error) {
  // console.log('failed due to', error);
  return {
    type: LOGIN_FAILED,
    error: error,
  };
}
