import React, { Fragment } from 'react';
import './App.css';
import { Navigation, Resume, Footer, MyTravel, TODO } from './components';
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
              <Route path="/">
                <Resume />
              </Route>
            </Switch>
            <Footer />
          </Router>
      </Fragment>
  );
}