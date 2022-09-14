import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./charList.sass";

export default class CharList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="list">
        <div className="list-group">
          <div className="list-group-item list-group-item-action">qwe</div>
          <div className="list-group-item list-group-item-action">qwe</div>
          <div className="list-group-item list-group-item-action">qwe</div>
          <div className="list-group-item list-group-item-action">qwe</div>
          <div className="list-group-item list-group-item-action">qwe</div>
        </div>
      </div>
    );
  }
}
