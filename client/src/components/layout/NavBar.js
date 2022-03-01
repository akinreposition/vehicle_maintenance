import React from "react";
// import { Link } from 'react-router-dom';


const NavBar = () => {
    // const handleLogout = () => {
    //     logout();
    //     clearCards();
    // }; 
        
    // const authLinks = (
    //     <Fragment>
    //         <li>Hello { user && user.name }</li>
    //         <li>
    //             <a onClick={handleLogout} href="#!">
    //                 <i classname="fas fa-sign-out-alt"></i> <span className="hide-sm">Logout</span>
    //             </a>
    //         </li>
    //     </Fragment>
    // )

    // const guestLinks = (
    //     <Fragment>
    //         <li>
    //           <Link to="/register">Register</Link>
    //         </li>
    //         {"|"}
    //         <li>
    //           <Link to="/login">Login</Link>
    //         </li>
    //     </Fragment>
    // )
  return (
    <div className="navbar bg-primary">
            <h6>
                Vehicle Maintenance Log
            </h6>
            <ul>
              {/* {isAuthenticated ? authLinks : guestLinks}         */}
            </ul>
        </div>
  );
};

export default NavBar;
