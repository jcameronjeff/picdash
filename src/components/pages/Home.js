import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Nav from '../Nav/Nav';
export default class Home extends Component {
  render() {
    return (
 <div className='navbar container-fluid d-flex align-items-end justify-content-center h-100 '>
       <div className='navigation row'> 
            <div className='nav-item col align-self-center '>
            <Link className='nav-link' to="/">Home</Link>
            </div>
            <div className='nav-item col  '>
            <Link className='nav-link' to="/gallery">gallery</Link>
            </div>
            <div className='nav-item col  '>
            <Link className='nav-link' to="/carousel">carousel</Link>
            </div>
            <div className='nav-item col  '>
            <Link  className='nav-link' to="/catcam">CatCam</Link>
            </div>
          </div>
   </div>
    )
  }
}
