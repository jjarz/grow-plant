import React, { Component } from 'react';
import Plant from './components/Plant'
import ControlButton from './components/ControlButton'
import UserFeedback from './components/UserFeedback'
import stateUtils from './stateUtils'
import './App.css';

const POINTS = {
  SEEDLING: 1,
  SMALL: 20,
  FULL_GROWN: 50
}

class App extends Component {
  constructor(props) {
    super(props) // must call this since we are overriding Component's constructor

    // initial state
    this.state = {
      plantSize: 0,
      points: 0,
      feedbackText: stateUtils.feedback.start
    }
  }

  handlePlantGrowth = (points) => {
    const newPoints = this.state.points + points

    this.setState(() => {
      return { points: newPoints }
    })

    if (newPoints >= POINTS.FULL_GROWN) {
      this.setState(() => ({
        plantSize: 3,
        feedbackText: stateUtils.feedback.win
      }))
    } else if (newPoints >= POINTS.SMALL) {
      this.setState(() => {
        return {
          plantSize: 2
        }
      })
    } else if (newPoints >= POINTS.SEEDLING) {
      this.setState(() => {
        return {
          plantSize: 1
        }
      })
    }
  }

  getProgress = () => {
    const progress = Math.round(this.state.points/POINTS.FULL_GROWN * 100)
    return progress < 100 ? progress : 100
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          Grow your plant
        </div>
        <div className="App-body">
          {/* plant display */}
          <Plant plantImage={stateUtils.plantImageUrls[this.state.plantSize]}/>

          {/* control buttons */}
          <ControlButton
            control={stateUtils.controls.water}
            points={2}
            onClick={this.handlePlantGrowth}
            image={stateUtils.buttonImageUrls.water}
            />
          <ControlButton
            control={stateUtils.controls.light}
            points={4}
            onClick={this.handlePlantGrowth}
            image={stateUtils.buttonImageUrls.light}
            />
          <ControlButton
            control={stateUtils.controls.love}
            points={6}
            onClick={this.handlePlantGrowth}
            image={stateUtils.buttonImageUrls.love}
            />

          <UserFeedback
            feedbackText={this.state.feedbackText}
            progress={this.getProgress()}/>
          <div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
