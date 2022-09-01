import React, { Component } from "react";
import Char from "../char";

import "./itemList.sass";

class ItemList extends Component {
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
      res = <Char />;
    } else {
      res = null;
    }
    return (
      <div className="wrapper">
        <div className="card">
          <button onClick={this.visionToggle}>🗕</button>
          {res}
        </div>
      </div>
    );
  }
}

export default ItemList;
