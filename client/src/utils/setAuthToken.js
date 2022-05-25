import axios from "axios";
// set the authentication token to header
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
