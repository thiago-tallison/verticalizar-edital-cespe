import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import { Instructions } from "./Instructions";
import Home from "./Home";
import { Nav } from "./Nav";

const App = () => {
  const [shouldShowExamples, setShouldShowExamples] = useState(false);

  const handleOnExamplesClick = (option) => {
    setShouldShowExamples(!shouldShowExamples);
  };

  return (
    <>
      <BrowserRouter>
        <Nav onClick={handleOnExamplesClick} />
        <Switch>
          <Route path="/instructions">
            <Instructions />
          </Route>

          <Route path="/">
            <Home
              handleOnClose={handleOnExamplesClick}
              shouldShowExamples={shouldShowExamples}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
