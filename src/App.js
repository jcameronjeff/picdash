import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import NewGallery from "./components/Gallery/NewGallery";
class App extends Component {
  render() {
    return (
      <div className="App">
        <NewGallery />
      </div>
    );
  }
}

export default App;
