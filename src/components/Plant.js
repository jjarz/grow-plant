import React, { Component } from 'react'

class Plant extends Component {
  render () {
    return (
      <div className='Plant-container'>
        <img className='Plant-image' alt={this.props.plantImage} src={this.props.plantImage} />
      </div>
    )
  }
}

export default Plant;
