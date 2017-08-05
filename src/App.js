import React, { Component } from 'react';
import Plant from './components/Plant'
import ControlButton from './components/ControlButton'
import UserFeedback from './components/UserFeedback'
import stateUtils from './stateUtils'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          Grow your plant
        </div>
        <div className="App-body">
          {/* plant display */}
          <Plant plantSize={stateUtils.plantSizes.seed}/>

          {/* control buttons */}
          <ControlButton control={stateUtils.controls.water} />
          <ControlButton control={stateUtils.controls.light} />
          <ControlButton control={stateUtils.controls.love} />

          <UserFeedback feedbackText={stateUtils.feedback.start} />
          <div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
