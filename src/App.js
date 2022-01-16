import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./index.scss"
import { Dashboard} from "./Pages"

const App = () => (
  <>
    <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Redirect to="/dashboard" />
    </Switch>
  </>
);

export default App;