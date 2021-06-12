import React, { memo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SplashScreen from "../views/SplashScreen/SplashScreen";
const router = memo(() => {
  return (
    <Router>
      <Switch>
       {/*  <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
        <Route exact path="/" component={SplashScreen} />
      </Switch>
    </Router>
  );
});

export default router;
