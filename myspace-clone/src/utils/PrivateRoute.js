import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render = {() => {
        if (localStorage.getItem("token")) {
          return <Component />;
        } else {
          console.log('Privateroute.js redirecting!');
          return <Redirect to="/home" />;
        }
      }}
    />
  );
};

export default PrivateRoute;