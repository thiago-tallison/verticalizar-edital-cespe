import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import "./App.css";

import { Instructions } from "./Instructions";
import { Examples } from "./Examples";
import Home from "./Home";
import { Nav } from "./Nav";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/instructions">
            <Instructions />
          </Route>

          <Route path="/examples">
            <Examples />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
