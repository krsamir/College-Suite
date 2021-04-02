import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./component/Authentication/LoginScreen";
import ProtectedRoute from "./component/Authentication/Protected";
import OwnerHome from "./component/Owner/Home";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <ProtectedRoute path="/" exact component={OwnerHome} />
        <Route path="/login" exact component={LoginScreen} />

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
