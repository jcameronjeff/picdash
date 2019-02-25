import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import NewGallery from "./components/Gallery/NewGallery";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Navbar from './components/Nav/Nav.js'
import Carousel from './components/Carousel/Carousel'
import Home from './components/pages/Home'
import CatCam from './components/CatCam/CatCam';
import 'bootstrap/dist/css/bootstrap.css';
 
class App extends Component {
  render() {
    return (
      <Router> 
      <div className="App container-fluid">
    

        <Route  path="/" component={Home}/>
        <Route path="/gallery" component={NewGallery}/>
        <Route path="/carousel" component={Carousel}/>
        <Route path="/catcam" component={CatCam}/>
      </div>
      </Router>
    );
  }
}

export default App;
