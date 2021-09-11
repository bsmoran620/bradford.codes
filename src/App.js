import React, { Fragment } from 'react';
import './App.css';
import { MarioKarty } from './pages';
import { Navigation, Resume, Footer, MyTravel, TODO, HomePage } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
      <Fragment>
          <Router>
            <Navigation />
            <Switch>
              <Route path="/resume">
                <Resume />
              </Route>
              <Route path="/projects/my-travel">
                <MyTravel />
              </Route>
              <Route path="/projects">
                <TODO />
              </Route>
              <Route path="/mario-karty">
                <MarioKarty />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
            <Footer />
          </Router>
      </Fragment>
  );
}