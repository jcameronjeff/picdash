import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import NewGallery from "./components/Gallery/NewGallery";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Nav/Nav.js'
import Carousel from './components/Carousel/Carousel'
import Home from './components/pages/Home'
class App extends Component {
  render() {
    return (
     
      <div className="App">
    <Router> 
     <div>

       <Navbar/>
      <Route path="/" component={Home}/>
      <Route path="/gallery" component={NewGallery}/>
      <Route path="/carousel" component={Carousel}/>
      </div>
      </Router>
      </div>
   
    );
  }
}

export default App;
