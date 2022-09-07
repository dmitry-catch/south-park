import React, { Component } from "react";

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
    const { item } = this.props;
    let res;
    if (vision) {
      res = item;
    } else {
      res = <div className="height"></div>;
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
