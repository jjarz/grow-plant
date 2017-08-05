import React, { Component } from 'react'

class ControlButton extends Component {
  // arrow function allow this function to use this w/o explicitly binding it
  handleClick = () => {
    this.props.onClick(this.props.points)
  }

  render () {
    return (
      <button className='ControlButton-button'>
        <img src={this.props.image}
        alt={this.props.control}
        onClick={this.handleClick}
        className='ControlButton-image' />
      </button>
    )
  }
}

export default ControlButton
