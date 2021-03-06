import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Gen from './Gen.js';
import Home from './Home.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/gen" component={Gen} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
