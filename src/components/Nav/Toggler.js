import React, { Component } from 'react'
import { HamburgerArrow } from 'react-animated-burgers'
import './Nav.scss'

class Toggler extends Component {
  state = {
    isActive: false
  }

  toggleButton = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  render() {
    return (
        <HamburgerArrow className='toggler' isActive={this.state.isActive} toggleButton={this.toggleButton} buttonColor="#FFBC67" barColor="white" />
    )
  }
}
export default Toggler;