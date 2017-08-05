import React, { Component } from 'react'

class ControlButton extends Component {
  render () {
    return (
      <button onClick={this.props.onClick}>{this.props.control}</button>
    )
  }
}

export default ControlButton
