import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { loginUser, clearErrors } from "../../actions/authAction";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";
import NavBar from "../layout/NavBar";

const Login = ({ authUser: { isAuthenticated, error }, loginUser }) => {
  let navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/logs");
    }

    if (error === "Invalid Credentials") {
      M.toast({ html: "Invalid Credentials" });

      clearErrors();
    }
    //   eslint-disable-next-line
  }, [error, isAuthenticated, navigate]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      M.toast({ html: "Please fill all fields" });
    } else {
      loginUser({
        email,
        password,
      });
    }
    setUser({
      email: "",
      password: "",
    });
  };
  return (
    <>
    <NavBar />
    <div className="form-container">
      <h3>
        Account <span className="text-primary">Login</span>
      </h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
    </>
    
  );
};

Login.prototype = {
  login: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  authUser: state.authUser,
});
export default connect(mapStateToProps, { loginUser, clearErrors })(Login);
