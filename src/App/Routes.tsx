import React from "react";
import { Route, Switch } from "react-router-dom";
import Account from "modules/Account/Account";
import About from "modules/About/About";
import Home from "modules/Home/Home";
import SignIn from "modules/SignIn/SignIn";
import SignUp from "modules/SignUp/SignUp";

const Routes: React.SFC = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/sign-in" component={SignIn} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/account" component={Account} />
    </Switch>
  </div>
);

export default Routes;
