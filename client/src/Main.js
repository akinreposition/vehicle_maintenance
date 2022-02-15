import React, { Fragment, useEffect } from 'react'
import NavBar from './components/layout/NavBar';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Home from './components/pages/Home';

const Main = () => {
  useEffect(() => {
    // Initialize material JS
    M.AutoInit();
  })
  return (
    <Fragment>
        <NavBar />
        <Home />
    </Fragment>
  )
}

export default Main