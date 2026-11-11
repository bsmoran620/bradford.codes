import React, { Fragment } from 'react';
import './App.css';
import { Navigation, Resume, Footer, MyTravel, TODO, HomePage } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router';

export default function App() {
  return (
      <Fragment>
          <Router>
            <Navigation />
            <Routes>
              <Route path="/resume/*" element={<Resume />} />
              <Route path="/projects/my-travel/*" element={<MyTravel />} />
              <Route path="/projects/*" element={<TODO />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
            <Footer />
          </Router>
      </Fragment>
  );
}
