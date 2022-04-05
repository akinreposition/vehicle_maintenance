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

//  Add technicians to server
export const addTechnicians = (tech) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/technicians", {
      method: "POST",
      body: JSON.stringify(tech),
    });
    const data = res.json();

    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response,
    });
  }
};

//  Delete technician from server
export const deleteTechnicians = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/technicians/ ${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_TECH,
      payload: id,
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
