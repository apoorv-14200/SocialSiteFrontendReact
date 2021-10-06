import {
  CLEAR_PROFILE_STATE,
  USER_PROFILE_BEGIN,
  USER_PROFILE_FAILED,
  USER_PROFILE_SUCCESS,
} from '../actions/actionTypes';

const initialProfileState = {
  inProgress: false,
  user: {},
  error: null,
};

export default function profile(state = initialProfileState, action) {
  switch (action.type) {
    case USER_PROFILE_BEGIN: {
      return {
        ...state,
        inProgress: true,
        error: null,
      };
    }
    case USER_PROFILE_SUCCESS: {
      return {
        ...state,
        inProgress: false,
        user: action.user,
        error: null,
      };
    }
    case USER_PROFILE_FAILED: {
      return {
        ...state,
        inProgress: false,
        error: action.error,
      };
    }
    case CLEAR_PROFILE_STATE: {
      return {
        inProgress: false,
        user: {},
        error: null,
      };
    }
    default: {
      return state;
    }
  }
}
