import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./header.sass";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <Link to="/chars">Chars</Link>
        <Link to="/families">Families</Link>
        <Link to="/locations">Locations</Link>
      </div>
    );
  }
}
