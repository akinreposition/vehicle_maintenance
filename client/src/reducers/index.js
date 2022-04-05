import { combineReducers } from "redux";
import { logReducer } from "./logReducer";
import { authReducer } from "./authReducer";
import { technicianReducer } from "./technicianReducer";

export default combineReducers({
  log: logReducer,
  authUser: authReducer,
  tech: technicianReducer
});
