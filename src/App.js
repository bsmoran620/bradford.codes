import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SkillGraph } from './components';
import {getLanguages, getProjects, getSkills} from './utils/SkillData';
import Card from 'react-bootstrap/Card';
import {ProjectList} from "./components/ProjectList";

/**
 * TODO: Add buttons to toggle skills
 * TODO: Languages and other skills should be separate
 * TODO: Add scss
 * TODO: Add Navigation menu (left?)
 * TODO: Rip out default create-react-app stuff
 * TODO: Set up react router and add resume as just one route
 * TODO: Add a bootstrap css layout? Buy one? Typography?
 * TODO: Add links to sites like linkedIn, github, etc?
 * Add express backend?
 * Add homepage?
 * Add projects page? - travel map module?
 * Convert to TypeScript?
 * Add esLint?
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <h1>Languages</h1>
        <SkillGraph data={getLanguages()} />
        <h1>Skills and Frameworks</h1>
        <SkillGraph data={getSkills()} />
        <ProjectList projects={getProjects()} />

      </body>
    </div>
  );
}

export default App;
