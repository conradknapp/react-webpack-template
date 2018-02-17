import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <main>
        <h1>App</h1>
        <Link to="/about">About Page</Link>
      </main>
    );
  }
}
