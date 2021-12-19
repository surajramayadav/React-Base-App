import React from "react";
import { Department } from "../pages/Department";
import Employee from "../pages/Employee";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

export const Routes = () => {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Employee} />
      <Route exact path="/department" component={Department} />
  
      </Switch>
    </Router>
  );
};
