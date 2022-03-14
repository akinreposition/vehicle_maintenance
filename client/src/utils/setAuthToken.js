// import axios from "axios";

const setAuthToken = token => {
    if(token){
        fetch.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete fetch.headers.common['x-auth-token'];
        
    }
};

export default setAuthToken;