import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Home from "./components/pages/Home";
import LandingPage from "./components/pages/LandingPage";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import About from "./components/pages/About";
import RountlineChecks from "./components/maintenances/MaintenanceChecks";
import { Provider } from "react-redux";
import store from "./store";


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
            {/* <PrivateRoute path='/' element={<Home />} /> */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/maintenance" element={ <RountlineChecks />} />
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
