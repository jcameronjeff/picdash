import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as RCarousel } from "react-responsive-carousel";
import imageFiles from "../ImageFiles/Images.js";

class Carousel extends Component {
  render() {
   
    return (
      <RCarousel
        axis = "horizontal"
        style={"height: 400px"}
        width="800px"
        showIndicators={false}
        autoPlay={true}
        infiniteLoop
        swipeable
        centerMode
        emulateTouch
        showThumbs={true}
        interval={2000}
      >
      {
        imageFiles.map((url, index) => (
           <img key={index} src={url} />
        ))
    }
      </RCarousel>
    );
  }
}

export default Carousel;
