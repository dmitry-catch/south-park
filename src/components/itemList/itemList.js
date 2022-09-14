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
    const { item, list } = this.props;
    let res;
    if (vision) {
      res = item;
    } else {
      res = <div className="height"></div>;
    }
    return (
      <div className="wrap">
        <div className="item">
          <span>Свернуть</span>
          <button onClick={this.visionToggle}>🗕</button>
          {res}
          {list}
        </div>
      </div>
    );
  }
}

export default ItemList;
