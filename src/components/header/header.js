import React, { Component } from "react";

import "./header.sass";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <h2>Chars</h2>
        <h2>Books</h2>
        <h2>Families</h2>
      </div>
    );
  }
}
