import React, { Component } from 'react';
import Navigation from './Navigation.js';
import Main from './Main.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="https://lh3.googleusercontent.com/uv85baoigBOMJ0i_rXsUJ5GRHWnB4XhmtvPbN40tWcwC9nlPvADT0q_n6FYFirwLvD8=w300" className="App-logo" alt="badge" />
          <h2>River Plate website</h2>
        </div>
        <Navigation />
        <Main />
      </div>
    );
  }
}

export default App;
