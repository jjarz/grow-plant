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
      plantSize: 0
    }
  }

  // arrow function allow this function to use this w/o explicitly binding it
  handleWaterClick = () => {
    this.setState((prevState, props) => ({
      plantSize: prevState.plantSize + 1
    }))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          Grow your plant
        </div>
        <div className="App-body">
          {/* plant display */}
          <Plant plantSize={stateUtils.plantSizes[this.state.plantSize]}/>

          {/* control buttons */}
          <ControlButton control={stateUtils.controls.water} onClick={this.handleWaterClick}/>
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
