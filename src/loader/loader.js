import React, { Component } from "react";

import "./loader.css";

export default class Loader extends Component {
  render() {
    return (
      <>
        <span className="loader"></span>
        <span className="mouth"></span>
      </>
    );
  }
}
