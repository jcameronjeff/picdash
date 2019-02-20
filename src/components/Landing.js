import React, { Component } from "react";
import { Button } from "reactstrap";
export default class Landing extends Component {
  render() {
    return (
      <div className="container-fluid d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="col align-items-center">
            <h1 className="heading text-light  "> Welcome</h1>
          </div>
        </div>
      </div>
    );
  }
}
