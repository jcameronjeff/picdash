import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import NewGallery from "./components/Gallery/NewGallery";
import { Button } from "reactstrap";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Landing from "./components/Landing";
import Carousel from "./components/Carousel/Carousel";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav class="navbar fixed-bottom ">
              <a class="navbar-link text-light" href="/gallery">
                gallery
              </a>
              <a class="navbar-link text-light" href="/carousel">
                carousel
              </a>
            </nav>

            <Route exact path="/gallery" component={NewGallery} />
            <Route exact path="/carousel" component={Carousel} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
