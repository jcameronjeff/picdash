import React, { Component } from "react";
import imageFiles from "../ImageFiles/Images";
import Picture from "../Picture/Picture";
import "./Gallery.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class NewGallery extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0, paused: null };
    this.startInterval = this.startInterval.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.pause = this.pause.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.startInterval();
  }
  notify = message => {
    toast(message, {
      position: toast.POSITION.BOTTOM_CENTER
    });
  };

  startInterval() {
    this.setState({ paused: false });
    this.intervalId = setInterval(() => this.nextImage(), 3000);
  }
  nextImage() {
    if (this.state.index === imageFiles.length) {
      this.setState({
        index: 0
      });
    } else {
      this.setState({
        index: this.state.index + 1
      });
    }
    console.log("nextImage fired" + imageFiles[this.state.index]);
  }

  handleClick() {
    this.pause();

    console.log("click");
  }
  pause() {
    if (this.state.paused === true) {
      this.startInterval();
      this.notify("Playing");
    } else {
      clearInterval(this.intervalId);
      this.setState({ paused: true });
      this.notify("Paused");
    }
  }
  render() {
    const { index } = this.state;
    return (
      <div onClick={this.handleClick} className="gallery">
        <Picture url={imageFiles[index]} />
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}
