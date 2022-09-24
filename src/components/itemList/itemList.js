import React, { Component } from "react";

import "./itemList.sass";

export default class ItemList extends Component {
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
    vision
      ? (res = item)
      : (res = (
          <div className="empty">
            <h2>Empty...</h2>
          </div>
        ));
    return (
      <div className="wrap">
        <div className="item">
          <div className="roll">
            <div className="header-roll">
              <span>Roll random : </span>
              <button onClick={this.visionToggle}>🗕</button>
            </div>
            {res}
          </div>
          <div>{list}</div>
        </div>
      </div>
    );
  }
}
