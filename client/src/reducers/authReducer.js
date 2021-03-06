import {
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  CLEAR_ERRORS,
  LOGOUT,
} from "../actions/types";

const initialState = {
  token: null,
  isAuthenticated: false,
  loading: true,
  user: null,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case REGISTER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: false,
        loading: false,
      };
    case LOGIN_SUCCESS:
      localStorage.getItem("token");
      return {
        ...state,
        payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
