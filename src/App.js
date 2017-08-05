import React, { Component } from 'react';
import Plant from './components/Plant'
import ControlButton from './components/ControlButton'
import UserFeedback from './components/UserFeedback'
import stateUtils from './stateUtils'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props) // must call this since we are overriding Component's constructor

    // initial state
    this.state = {
      plantSize: stateUtils.plantSizes.seed
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          Grow your plant
        </div>
        <div className="App-body">
          {/* plant display */}
          <Plant plantSize={stateUtils.plantSizes[0]}/>

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
