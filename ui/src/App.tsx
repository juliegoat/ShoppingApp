import React, { useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './styles/index.scss';

import { Navigation } from './partials';
import * as Page from './pageTypes';

const App = () => {
  return (
    <div id="App">
      <Router>
        <Navigation />

        <Switch>
          <Route path="/" exact={true}>
            <Page.NewSessionPage />
          </Route>

          <Route path="/room/:id">
            <Page.HomePage />
          </Route>

          <Route path="*">
            <Page.NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
