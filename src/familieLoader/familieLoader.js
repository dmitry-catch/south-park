import React, { Component } from "react";

import "./familieLoader.sass";

export default class FamilieLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="windows">
        <div className="window">
          <div className="vert"></div>
          <div className="horz"></div>
        </div>
        <div className="window">
          <div className="vert"></div>
          <div className="horz"></div>
        </div>
        <div className="window">
          <div className="vert"></div>
          <div className="horz"></div>
        </div>
        <div className="window">
          <div className="vert"></div>
          <div className="horz"></div>
        </div>
      </div>
    );
  }
}
