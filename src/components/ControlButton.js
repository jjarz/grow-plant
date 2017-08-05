import React, { Component } from 'react'

class ControlButton extends Component {
  render () {
    return (
      <button>{this.props.control}</button>
    )
  }
}

export default ControlButton
