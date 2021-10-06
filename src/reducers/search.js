import { CLEAR_SERACH, FETCH_SEARCH_USERS } from '../actions/actionTypes';

const initialSearchState = {
  results: [],
};

export default function search(state = initialSearchState, action) {
  switch (action.type) {
    case FETCH_SEARCH_USERS: {
      return {
        ...state,
        results: action.results,
      };
    }
    case CLEAR_SERACH: {
      return {
        results: [],
      };
    }
    default: {
      return state;
    }
  }
}
