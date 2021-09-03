import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./views/auth/Signin";
import Signup from "./views/auth/Signup";
import ConfirmAccount from "./views/auth/Confirm";
import ForgotPassword from "./views/auth/forgot";
import routes from "./routes";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/shards-dashboards.1.1.0.min.css";
import "./assets/main.css";
import "./assets/index.scss";

export default () => (
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker(props => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          />
        );
      })}
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/confirm-account" component={ConfirmAccount} />
      <Route path="/forgot-password" component={ForgotPassword} />
    </div>
  </Router>
);
