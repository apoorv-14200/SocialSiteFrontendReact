import {
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  SIGNUP_START,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
  AUTHENTICATE_USER,
  LOG_OUT,
  CLEAR_AUTH_STATE,
  EDIT_PROFILE_FAILED,
  EDIT_PROFILE_SUCCESS,
} from '../actions/actionTypes';
const initialAuthState = {
  user: {},
  error: null,
  isLoggedIn: false,
  inProgress: false,
  profile: '',
};

export default function auth(state = initialAuthState, action) {
  console.log('action----->', action);
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        inProgress: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        inProgress: false,
        error: null,
        user: action.user,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        inProgress: false,
        error: action.error,
      };
    }
    case SIGNUP_START: {
      return {
        ...state,
        inProgress: true,
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        inProgress: false,
        error: null,
        user: action.user,
      };
    }
    case SIGNUP_FAILED: {
      return {
        ...state,
        inProgress: false,
        error: action.error,
      };
    }
    case AUTHENTICATE_USER: {
      return {
        ...state,
        error: null,
        user: action.user,
        isLoggedIn: true,
      };
    }
    case LOG_OUT: {
      return {
        user: {},
        error: null,
        isLoggedIn: false,
        inProgress: false,
      };
    }
    case CLEAR_AUTH_STATE: {
      return {
        ...state,
        error: null,
        editmode: false,
      };
    }
    case EDIT_PROFILE_FAILED: {
      return {
        ...state,
        inProgress: false,
        error: action.error,
      };
    }
    case EDIT_PROFILE_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        inProgress: false,
        error: false,
        user: action.user,
        editmode: false,
      };
    }
    default: {
      return state;
    }
  }
}
