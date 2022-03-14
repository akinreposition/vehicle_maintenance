import React from "react";
import { Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({
  component: { Component, ...rest },
  state: { isAuthenticated, loading },
  props,
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !loading ? (
          <Navigate to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  authUser: state.authUser,
});
export default connect(mapStateToProps, {})(PrivateRoute);
