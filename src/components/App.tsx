import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import "../globals.css";
// import GlobalStyles from "../styles/GlobalStyles";

import { Instructions } from "./Instructions";
import Home from "./Home";
import { Nav } from "./Nav";

const App = () => {
  const [shouldShowExamples, setShouldShowExamples] = useState(false);

  const handleOnExamplesClick = (option) => {
    setShouldShowExamples(!shouldShowExamples);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/instructions">
          <Nav onClick={handleOnExamplesClick} />
          <Instructions />
        </Route>

        <Route path="/instructions">
          <Nav onClick={handleOnExamplesClick} />
          <Instructions />
        </Route>

        <Route path="/">
          <Nav showExamples onClick={handleOnExamplesClick} />
          <Home
            handleOnClose={handleOnExamplesClick}
            shouldShowExamples={shouldShowExamples}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
