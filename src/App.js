import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import App_Home from "./pages"
import Home from "./pages/home"
import Time from "./pages/time"
import Data from "./pages/data"
import Currency from "./pages/currency"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" ><App_Home /></Route>
        <Route path="/home"><Home /></Route>
	<Route path="/time"><Time /></Route>
        <Route path="/data"><Data /></Route>
        <Route path="/currency"><Currency /></Route>
      </Switch>
    </Router>
  );
}

export default App;