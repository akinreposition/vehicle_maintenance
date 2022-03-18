import setAuthToken from "../utils/setAuthToken";
import { setLoading } from "./logAction";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "./types";

// Load user
export const loadUser = async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await fetch.get("/api/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({ type: AUTH_ERROR });
  }
};

// Register User
export const register = (formData) => async (dispatch) => {
  const config = {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await fetch.post("/api/users", config);

    const data = await res.json();

    dispatch({
      type: REGISTER_SUCCESS,
      payload: data,
    });

    loadUser();
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response,
    });
  }
};

// Login User
export const loginUser = (formData) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/users", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });

    loadUser();
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.msg,
    });
  }
};

// Logout
export const logout = (dispatch) => dispatch({ type: LOGOUT });

// Clear Errors
export const clearErrors = (dispatch) => dispatch({ type: CLEAR_ERRORS });
