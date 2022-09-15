import React, { Component } from "react";

import "./loader.css";

export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <span className="loader"></span>
        <span className="mouth"></span>
      </>
    );
  }
}
