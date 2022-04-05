import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from "./types";

//  Get technicians from server
export const getTechnicians = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/technicians");
    const data = res.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response,
    });
  }
};
//  Set Loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
