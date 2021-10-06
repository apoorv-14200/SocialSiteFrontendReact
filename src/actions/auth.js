import {
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  AUTHENTICATE_USER,
  LOG_OUT,
  CLEAR_AUTH_STATE,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILED,
} from './actionTypes';
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
          localStorage.setItem('token', data.data.token);
          setTimeout(() => {
            dispatch(login_success(data.data.user));
          }, 1000);
        } else {
          setTimeout(() => {
            dispatch(login_failed(data.error));
          }, 1000);
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

export function AuthenticateUser(user) {
  return {
    type: AUTHENTICATE_USER,
    user: user,
  };
}

export function logout() {
  return {
    type: LOG_OUT,
  };
}
export function clearauthstate() {
  return {
    type: CLEAR_AUTH_STATE,
  };
}
