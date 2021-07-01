import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import LoginPage from "./container/LoginPage";
import ProfilePage from "./container/ProfilePage";

const ProtectedRoute = ({
  component: Component,
  authed,
  loginPage,
  ...rest
}) => {
  return loginPage ? (
    <Route
      {...rest}
      render={props =>
        authed && authed.token ? (
          <Redirect
            to={{ pathname: "/profile", state: { from: props.location } }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  ) : (
    <Route
      {...rest}
      render={props =>
        authed && authed.token ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

class App extends Component {
  state = {
    token: localStorage.getItem("@tokenId")
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <ProtectedRoute
            exact
            authed={this.state}
            loginPage={true}
            path="/"
            component={LoginPage}
          />
          <ProtectedRoute
            exact
            authed={this.state}
            path="/profile"
            component={ProfilePage}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;

