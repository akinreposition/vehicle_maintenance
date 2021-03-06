import axios from "axios";
import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  SEARCH_LOGS,
  DELETE_LOG,
  UPDATE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
} from "./types";

//  Get logs from server
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    // fetch is used for hit the endpoint using json server
    // const res = await fetch("/api/logs");

    // axios is used to the endpoint & getting data from mongo.db
    const res = await axios.get("/api/logs");
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response,
    });
  }
};

// Add new log
export const addLog = (log) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    setLoading();
    //  fetch is used to hit json server endpoint
    // const res = await fetch("/logs", {
    //   method: "POST",
    //   body: JSON.stringify(log),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // axios is used to the endpoint & getting data from mongo.db
    const res = await axios.post("/api/logs", log, config);
    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

//  Delete logs from server
export const deleteLogs = (id) => async (dispatch) => {
  try {
    setLoading();
    //  fetch is used to hit json server endpoint
    // await fetch.delete(`/logs/${id}`);

    // axios is used to the endpoint & getting data from mongo.db
    await axios.delete(`/api/logs/${id}`);

    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

//  Update logs from server
export const updateLog = (log) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    setLoading();

    //  fetch is used to hit json server endpoint
    // const res = await fetch(`/logs/${log.id}`, {
    //   method: "PUT",
    //   body: JSON.stringify(log),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // axios is used to the endpoint & getting data from mongo.db
    const res = await axios.put(`/api/logs/${log.id}`, log, config);

    const data = await res.json();

    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

//  Search logs from server
export const searchLogs = (text) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/api/logs?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

//  Set current log
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

//  Clear current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

//  set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
