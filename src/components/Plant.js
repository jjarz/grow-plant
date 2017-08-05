import React, { Component } from 'react'

class Plant extends Component {
  render () {
    return (
      <div>
        {this.props.plantSize}
      </div>
    )
  }
}

export default Plant;
