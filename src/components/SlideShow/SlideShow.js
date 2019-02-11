import React, { Component } from "react";
import "./SlideShow.scss";
 
function importAll(r) {
  return r.keys().map(r);
}


const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));


export default class SlideShow extends Component {
  constructor(props) {
    super(props);
    this.state = {index: 0};

    this.nextImage = this.nextImage.bind(this);

  }
  componentDidMount() {
      setInterval(
      () => this.nextImage(),
      1000
    );

  }
  nextImage () {
    if (this.state.index === images.length){
       this.setState({
        index: 0
       });
    } else {
      this.setState({
        index: this.state.index + 1
       });
    }
    console.log('nextImage fired' + this.state.index)
  }
  
  componentWillUnmount() {
    clearInterval(this.nextImage);
  }

  render() {
   
    return (
      <div>
          <img src={images[this.state.index]} height='300px'/>
      </div>
    );
  }
}
