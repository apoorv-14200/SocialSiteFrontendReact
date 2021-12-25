import { EDIT_PROFILE_FAILED, EDIT_PROFILE_SUCCESS } from './actionTypes';
import URL from '../helper/urls';
import { logout } from './auth';

const url = URL.editProfile();

export function edit_user_profile(name, password, confirmpassword, id) {
  console.log(id);
  return (dispatch) => {
    const token = localStorage.getItem('token');
    fetch(url, {
      // Adding method type
      method: 'POST',

      // Adding body or contents to send
      body: JSON.stringify({
        name: name,
        password: password,
        confirmpassword: confirmpassword,
        id: '' + id,
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
          localStorage.setItem('token', data.data.token);
          setTimeout(() => {
            dispatch(edit_profile_success(data.data.user));
          }, 500);
        } else {
          setTimeout(() => {
            dispatch(edit_profile_failed(data.error));
          }, 500);
        }
      })
      .catch((err) => console.log('error', err));
  };
}

export function edit_profile_success(user) {
  return {
    type: EDIT_PROFILE_SUCCESS,
    user: user,
  };
}

export function edit_profile_failed(error) {
  return {
    type: EDIT_PROFILE_FAILED,
    error: error,
  };
}
