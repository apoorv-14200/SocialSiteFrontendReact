import { FETCH_SEARCH_USERS, CLEAR_SERACH } from './actionTypes';
import URL from '../helper/urls';

export function SearchUsers(text) {
  const url = URL.SearchUsers(text);
  return (dispatch) => {
    const token = localStorage.getItem('token');
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(updateSearch(data.data.users));
      })
      .catch((err) => console.log('error', err));
  };
}

export function updateSearch(searchResults) {
  return {
    type: FETCH_SEARCH_USERS,
    results: searchResults,
  };
}
export function clearSearch() {
  return {
    type: CLEAR_SERACH,
  };
}
