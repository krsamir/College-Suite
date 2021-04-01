import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OwnerHome from "./component/Owner/Home";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={OwnerHome} />
        <Route
          path="*"
          component={() => {
            return "404 Not Found!!";
          }}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
