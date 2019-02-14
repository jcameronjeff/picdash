import React, { Component } from "react";

export default class Picture extends Component {
  render() {
    const { url } = this.props;
    const picStyle = {
      backgroundImage: `url(${url})`
    };
    return <div className="gallery__image" style={picStyle} />;
  }
}
