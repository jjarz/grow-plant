import React, { Component } from 'react';
import Plant from './components/Plant'
import './App.css';

const plantSizes = {
  seed: 'seed',
  seedling: 'seedling',
  small: 'small',
  full_grown: 'full_grown'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          Grow your plant
        </div>
        <div className="App-body">
          <Plant plantSize={plantSizes.seed}/>
        </div>
      </div>
    );
  }
}

export default App;
