import React, { Component } from 'react';
import './App.css';

import BeersList from './components/BeersList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Beer Redux</h1>
        </header>
        <BeersList />
      </div>
    );
  }
}

export default App;
