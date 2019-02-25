import React, { Component } from 'react'
 import './Nav.scss'
import Drawer from 'rc-drawer';
import {Link} from 'react-router-dom';
class Nav extends Component {
   render() {
    return (
        <div>
   
      <Link  activeClassName="active" to="/">Home</Link>
    
      <Link  activeClassName="active" to="/gallery">Gallery</Link>
    
 
      <Link  activeClassName="active" to="/carousel">Carousel</Link>
 
 
      <Link  activeClassName="active" to="/catcam">CatCam</Link>
 
 
 
    </div>
    )
  }
}
export default Nav; 