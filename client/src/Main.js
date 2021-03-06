import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// materialise css import
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
// component and pages
import LogHome from "./components/pages/LogHome";
import LandingPage from "./components/pages/LandingPage";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import About from "./components/pages/About";
import Maintenance from "./components/maintenances/Maintenance";
// React-Redux provider and store
import { Provider } from "react-redux";
import store from "./store";
//  set the token to header
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const Main = () => {
  useEffect(() => {
    // Initialize material JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <Router>
          <Routes>
            {/* <PrivateRoute path='/' element={<LandingPage />} /> */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/logs" element={<LogHome />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </Fragment>
    </Provider>
  );
};

export default Main;
