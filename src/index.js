import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./App";
import About from "./components/About";
import "./index.css";

const Root = () => (
  <Router>
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/" component={App} />
    </Switch>
  </Router>
);

render(<Root />, document.getElementById("root"));
