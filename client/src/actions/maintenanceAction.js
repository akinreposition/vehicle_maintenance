import axios from "axios";
import {
    ADD_MAINTENANCE,
    DELETE_MAINTENANCE,
    UPDATE_MAINTENANCE,
    GET_MAINTENANCE,
    MAINTENANCE_ERROR
} from './types'

// Add maintenance to server.
export const AddMaintenance = (maintenanceCheck) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type" : "application/json"
        }
    }
    try {
        const res = await axios.post ("/api/maintenance", config, maintenanceCheck);
        const data = await res.json();

        dispatch({
            type: ADD_MAINTENANCE,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: MAINTENANCE_ERROR,
            payload: error.response.data
        });
    }
}