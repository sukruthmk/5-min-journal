import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import NavBar from "./common/NavBar";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/log">
            {/* <CreateJournal /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
