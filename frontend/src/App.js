import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";

import CreateJournal from "./components/CreateJournal";
import Home from "./components/Home";
import NavBar from "./common/NavBar";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/log">
            <CreateJournal />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
