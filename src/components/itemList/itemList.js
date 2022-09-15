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
    vision ? (res = item) : (res = <h2 className="empty">Empty...</h2>);
    return (
      <div className="wrap">
        <div className="item">
          <div className="roll">
            <span className="header-roll">Roll random character </span>
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
