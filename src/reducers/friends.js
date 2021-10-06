import {
  ADD_FRIEND_BEGIN,
  ADD_FRIEND_FAILED,
  ADD_FRIEND_SUCCESS,
  CLEAR_FRIEND_STATE,
  FETCH_USER_FRIENDS_BEGIN,
  FETCH_USER_FRIENDS_FAILED,
  FETCH_USER_FRIENDS_SUCCESS,
  REMOVE_FRIEND_SUCCESS,
  REMOVE_FRIEND_FAILED,
  REMOVE_FRIEND_BEGIN,
} from '../actions/actionTypes';
const initialFriendsState = {
  friendships: [],
  inProgress: false,
  error: null,
};

export default function friends(state = initialFriendsState, action) {
  switch (action.type) {
    case FETCH_USER_FRIENDS_FAILED: {
      return {
        ...state,
        error: action.error,
        inProgress: false,
      };
    }
    case FETCH_USER_FRIENDS_BEGIN: {
      return {
        ...state,
        error: null,
        inProgress: true,
      };
    }
    case FETCH_USER_FRIENDS_SUCCESS: {
      return {
        ...state,
        error: null,
        inProgress: false,
        friendships: action.friendships,
      };
    }
    case ADD_FRIEND_SUCCESS: {
      return {
        ...state,
        error: false,
        inProgress: false,
        friendships: [...state.friendships, action.friendship],
      };
    }
    case ADD_FRIEND_BEGIN: {
      return {
        ...state,
        inProgress: true,
        error: null,
      };
    }
    case ADD_FRIEND_FAILED: {
      return {
        ...state,
        inProgress: false,
        error: action.error,
      };
    }
    case CLEAR_FRIEND_STATE: {
      return {
        ...state,
        inProgress: false,
        error: null,
      };
    }
    case REMOVE_FRIEND_SUCCESS: {
      return {
        ...state,
        error: false,
        inProgress: false,
        friendships: state.friendships.filter(
          (friendship) => friendship._id !== action.id
        ),
      };
    }
    case REMOVE_FRIEND_BEGIN: {
      return {
        ...state,
        inProgress: true,
        error: null,
      };
    }
    case REMOVE_FRIEND_FAILED: {
      return {
        ...state,
        inProgress: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
}
