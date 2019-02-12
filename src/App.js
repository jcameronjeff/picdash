import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Gallery from "./components/Gallery/Gallery";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Gallery />
      </div>
    );
  }
}

export default App;
