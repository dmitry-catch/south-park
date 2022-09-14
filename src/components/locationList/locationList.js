import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./locationList.sass";

export default class LocationList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="list">
        <div className="list-group">
          <div className="list-group-item list-group-item-action">asd</div>
          <div className="list-group-item list-group-item-action">asd</div>
          <div className="list-group-item list-group-item-action">asd</div>
          <div className="list-group-item list-group-item-action">asd</div>
          <div className="list-group-item list-group-item-action">asd</div>
        </div>
      </div>
    );
  }
}
