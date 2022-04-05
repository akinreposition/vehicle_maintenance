import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../actions/authAction";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";

const Register = ({
  authUser: { token, isAuthenticated, error },
  register,
}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  });

  const { firstName, lastName, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      // setAlert('Please enter all fields', 'danger');
      M.toast({ html: "Please enter all fields" });
    } else if (password !== password2) {
      // setAlert('Passwords do not match', 'danger');
      M.toast({ html: "Passwords do not match!" });
    } else {
      const formData = {
        firstName,
        lastName,
        email,
        password,
      };
      register(formData);
      console.log(formData);
      setUser({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password2: "",
      });
    }
    setTimeout(() => {
      navigate("/login");
    }, 5000);
  };
  return (
    <div className="form-container">
      <h3>
        <span className="text-primary">Register</span> Account
      </h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={onChange}
            required
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
            minLength="8"
            maxLength="12"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password2"
            name="password2"
            value={password2}
            onChange={onChange}
            required
            minLength="6"
            maxLength="12"
          />
        </div>
        <button
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        >
          {" "}
          Register
        </button>
      </form>
    </div>
  );
};

Register.prototype = {
  Register: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  authUser: state.authUser,
});

export default connect(mapStateToProps, { register })(Register);
