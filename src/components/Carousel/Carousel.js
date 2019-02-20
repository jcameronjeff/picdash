import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as RCarousel } from "react-responsive-carousel";
import imageFiles from "../ImageFiles/Images.js";

class Carousel extends Component {
  render() {
    const images = imageFiles.map(img => (
      <div>
        <img src={img} />
      </div>
    ));
    return (
      <RCarousel
        style={"height: 400px"}
        width="800px"
        showIndicators={false}
        autoplay
        infiniteLoop
        swipeable
        centerMode
        emulateTouch
        interval={2000}
      >
        {images}
      </RCarousel>
    );
  }
}

export default Carousel;
