import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import NavBar from "./components/layout/NavBar";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <div>Home</div>
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <div>Log In</div>
        </Route>
        <Route path="/customer">
          <div>Customers</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
