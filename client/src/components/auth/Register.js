import React, { useState } from "react";
import { connect } from "react-router-dom";
import { register } from "../../actions/authAction";
import PropTypes from "prop-types";

const Register = ({
  authUser: { token, isAuthenticated, error },
  register,
}) => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      // setAlert('Please enter all fields', 'danger');
      prompt("Please enter all fields", "danger");
    } else if (password !== password2) {
      // setAlert('Passwords do not match', 'danger');
      prompt("Password do not match", "danger");
    } else {
      const formData = {
        name,
        email,
        password,
        date: new Date()
      }
      register(formData);
      console.log(formData);
      setUser({
        name: "",
        email: "",
        password: "",
        password2: "",
      });
    }
  };
  return (
    <div className="form-container">
      <h1>
        <span className="text-primary">Register</span>
        New Account
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
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
            minLength="6"
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
}
const mapStateToProps = (state) => ({
  authUser: state.authUser,
});

export default connect(mapStateToProps, { register })(Register);
