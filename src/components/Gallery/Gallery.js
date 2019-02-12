import React, { Component } from "react";
import "./Gallery.scss";
import images from "../ImageFiles/Images";

export default class SlideShow extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };

    this.nextImage = this.nextImage.bind(this);
  }
  componentDidMount() {
    setInterval(() => this.nextImage(), 5000);
  }
  nextImage() {
    if (this.state.index === images.length) {
      this.setState({
        index: 0
      });
    } else {
      this.setState({
        index: this.state.index + 1
      });
    }
    console.log("nextImage fired" + this.state.index);
  }

  handleClick(e) {}

  componentWillUnmount() {
    clearInterval(this.nextImage);
  }

  render(props) {
    const galleryStyles = {
      backgroundImage: `url(${images[this.state.index]})`
    };
    return (
      <div className="gallery" onClick={this.handleClick}>
        <div className="gallery__image" style={galleryStyles}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
