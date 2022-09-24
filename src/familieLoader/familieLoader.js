import React, { Component } from "react";

import "./familieLoader.sass";

export default class FamilieLoader extends Component {
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
