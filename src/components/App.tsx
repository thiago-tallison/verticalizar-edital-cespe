import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import '../globals.css'

import { Instructions } from './Instructions'
import Home from './Home'
import { Layout } from './layout'

export default function App() {
  const [shouldShowExamples, setShouldShowExamples] = useState(false)

  const handleOnExamplesClick = () => {
    setShouldShowExamples(!shouldShowExamples)
  }

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
  )
}
