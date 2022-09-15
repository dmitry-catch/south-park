import React, { Component } from "react";

import "./itemList.sass";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vision: true,
      toggleClass: false,
    };
    this.visionToggle = this.visionToggle.bind(this);
  }

  visionToggle() {
    this.setState(({ vision, toggleClass }) => ({
      vision: !vision,
      toggleClass: !toggleClass,
    }));
  }

  render() {
    const { vision, toggleClass } = this.state;
    const { item, list } = this.props;
    let itemClass = "";
    let res;
    vision ? (res = item) : (res = null);
    toggleClass ? (itemClass = "item displ") : (itemClass = "item");
    return (
      <div className="wrap">
        <div className={itemClass}>
          <div>
            <span>Свернуть</span>
            <button onClick={this.visionToggle}>🗕</button>
            {res}
          </div>
          <div>{list}</div>
        </div>
      </div>
    );
  }
}

export default ItemList;
