import React from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { logout } from "../../actions/authAction";

const NavBar = ({ title, icon, logout }) => {
  // const handleLogout = () => {
  //   logout();
  // };

  // const authLinks = (
  //   <Fragment>
  //     <li>
  //       Hello 
  //       {/* {user && user.name} */}
  //     </li>
  //     <li>
  //       <a onClick={handleLogout} href="#!">
  //         <i classname="fas fa-sign-out-alt"></i>{" "}
  //         <span className="hide-sm">Logout</span>
  //       </a>
  //     </li>
  //   </Fragment>
  // );

  // const guestLinks = (
  //   <Fragment>
  //     <li>
  //       <Link to="/register">Register</Link>
  //     </li>
  //     {"|"}
  //     <li>
  //       <Link to="/login">Login</Link>
  //     </li>
  //   </Fragment>
  // );
  return (
    <div className="navbar bg-primary">
      <h6>{title}</h6>
      {/* <ul>{isAuthenticated ? authLinks : guestLinks}</ul> */}
    </div>
  );
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  logout: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
  title: "Vehicle Maintenance Log",
  icon: ""
};

const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps, { logout })(NavBar);
