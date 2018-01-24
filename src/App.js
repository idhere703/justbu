import React, { Component } from 'react';
import './App.css';

import NavBar from './components/nav-bar';
import AboutUs from './components/about-us';
import Experience from './components/experience';
import Education from './components/education';
import Skills from './components/skills';
import Interests from './components/interests';
import Awards from './components/awards';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
        <div className="container-fluid p-0">
          <AboutUs />
          <Experience />
          <Education />
          <Skills />
          <Interests />
          <Awards />
        </div>
      </div>
    );
  }
}

export default App;
