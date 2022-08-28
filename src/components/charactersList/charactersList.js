import React, { Component } from "react";
import Item from "../item/item";

import "./charactersList.sass";

export default class CharactersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vision: true,
    };
    this.visionToggle = this.visionToggle.bind(this);
  }

  visionToggle() {
    this.setState(({ vision }) => ({
      vision: !vision,
    }));
  }

  render() {
    const { vision } = this.state;
    let res;
    if (vision) {
      res = <Item />;
    } else {
      res = null;
    }
    return (
      <div className="wrapper">
        <div className="card">
          <button onClick={this.visionToggle}>🗕</button>
          {res}
          {res}
          {res}
        </div>
      </div>
    );
  }
}
