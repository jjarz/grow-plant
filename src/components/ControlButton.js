import React, { Component } from 'react'

class ControlButton extends Component {
  // arrow function allow this function to use this w/o explicitly binding it
  handleClick = () => {
    this.props.onClick(this.props.points)
  }

  render () {
    return (
      <button onClick={this.handleClick}>{this.props.control}</button>
    )
  }
}

export default ControlButton
