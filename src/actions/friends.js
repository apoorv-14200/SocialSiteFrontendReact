import {
  FETCH_USER_FRIENDS_BEGIN,
  FETCH_USER_FRIENDS_SUCCESS,
  FETCH_USER_FRIENDS_FAILED,
  ADD_FRIEND_BEGIN,
  ADD_FRIEND_FAILED,
  ADD_FRIEND_SUCCESS,
  REMOVE_FRIEND_BEGIN,
  REMOVE_FRIEND_FAILED,
  REMOVE_FRIEND_SUCCESS,
  UPDATE_POSTS,
  CLEAR_FRIEND_STATE,
} from './actionTypes';
import URL from '../helper/urls';
import { logout } from './auth';

export function fetchFriends() {
  return (dispatch) => {
    const url = URL.fetchFriends();
    const token = localStorage.getItem('token');
    dispatch(fetch_friends_begin());
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
        if (response.status == '401') {
          dispatch(logout());
        }
        return response.json();
      })
      .then((data) => {
        console.log('Data', data);
        if (data.success) {
          setTimeout(() => {
            dispatch(fetch_friends_success(data.data.friendships));
          }, 500);
        } else {
          setTimeout(() => {
            dispatch(fetch_friends_failed(data.error));
          }, 500);
        }
      })
      .catch((err) => console.log('error', err));
  };
}

export function fetch_friends_success(friendships) {
  return {
    type: FETCH_USER_FRIENDS_SUCCESS,
    friendships: friendships,
  };
}

export function fetch_friends_begin() {
  return {
    type: FETCH_USER_FRIENDS_BEGIN,
  };
}
export function fetch_friends_failed(error) {
  return {
    type: FETCH_USER_FRIENDS_FAILED,
    error: error,
  };
}

export function AddFriend(id) {
  return (dispatch) => {
    const url = URL.AddFriend(id);
    const token = localStorage.getItem('token');
    dispatch(add_friend_begin());
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
        if (response.status == '401') {
          dispatch(logout());
        }
        return response.json();
      })
      .then((data) => {
        console.log('Data', data);
        if (data.success) {
          setTimeout(() => {
            dispatch(add_friend_success(data.data.friendship));
          }, 500);
        } else {
          setTimeout(() => {
            dispatch(add_friend_failed(data.error));
          }, 500);
        }
      })
      .catch((err) => console.log('error', err));
  };
}

export function add_friend_success(friendship) {
  return {
    type: ADD_FRIEND_SUCCESS,
    friendship: friendship,
  };
}

export function add_friend_begin() {
  return {
    type: ADD_FRIEND_BEGIN,
  };
}
export function add_friend_failed(error) {
  return {
    type: ADD_FRIEND_FAILED,
    error: error,
  };
}

export function clear_friend_state() {
  return {
    type: CLEAR_FRIEND_STATE,
  };
}

export function RemoveFriend(id) {
  return (dispatch) => {
    const url = URL.RemoveFriend(id);
    const token = localStorage.getItem('token');
    dispatch(remove_friend_begin());
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
        if (response.status == '401') {
          dispatch(logout());
        }
        return response.json();
      })
      .then((data) => {
        console.log('Data', data);
        if (data.success) {
          setTimeout(() => {
            dispatch(remove_friend_success(data.removed_id));
          }, 500);
        } else {
          setTimeout(() => {
            dispatch(remove_friend_failed(data.error));
          }, 500);
        }
      })
      .catch((err) => console.log('error', err));
  };
}

export function remove_friend_success(id) {
  return {
    type: REMOVE_FRIEND_SUCCESS,
    id: id,
  };
}

export function remove_friend_begin() {
  return {
    type: REMOVE_FRIEND_BEGIN,
  };
}
export function remove_friend_failed(error) {
  return {
    type: REMOVE_FRIEND_FAILED,
    error: error,
  };
}
