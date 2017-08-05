import React, { Component } from 'react';
import Plant from './components/Plant'
import ControlButton from './components/ControlButton'
import UserFeedback from './components/UserFeedback'
import './App.css';

const plantSizes = {
  seed: 'seed',
  seedling: 'seedling',
  small: 'small',
  full_grown: 'full_grown'
}

const controls = {
  water: 'water',
  light: 'light',
  love: 'love'
}

const feedback = {
  start: 'Grow your plant by giving it the right combination of water, light and love <3'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          Grow your plant
        </div>
        <div className="App-body">
          {/* plant display */}
          <Plant plantSize={plantSizes.seed}/>

          {/* control buttons */}
          <ControlButton control={controls.water} />
          <ControlButton control={controls.light} />
          <ControlButton control={controls.love} />

          <UserFeedback feedbackText={feedback.start} />
          <div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
