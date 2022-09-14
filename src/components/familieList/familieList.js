import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./familieList.sass";

export default class FamilieList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="list">
        <div className="list-group">
          <div className="list-group-item list-group-item-action">wek</div>
          <div className="list-group-item list-group-item-action">wek</div>
          <div className="list-group-item list-group-item-action">wek</div>
          <div className="list-group-item list-group-item-action">wek</div>
          <div className="list-group-item list-group-item-action">wek</div>
        </div>
      </div>
    );
  }
}
