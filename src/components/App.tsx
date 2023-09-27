import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import "../globals.css";
// import GlobalStyles from "../styles/GlobalStyles";

import { Instructions } from "./Instructions";
import Home from "./Home";
import { Nav } from "./Nav";
import { Layout } from "./layout";

const App = () => {
  const [shouldShowExamples, setShouldShowExamples] = useState(false);

  const handleOnExamplesClick = (option) => {
    setShouldShowExamples(!shouldShowExamples);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/instructions">
          <Layout>
            <Instructions />
          </Layout>
        </Route>

        <Route path="/">
          <Layout>
            <Home
              handleOnClose={handleOnExamplesClick}
              shouldShowExamples={shouldShowExamples}
            />
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
