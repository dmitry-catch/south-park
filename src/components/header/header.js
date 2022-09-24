import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./header.sass";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link className="h" to="/chars">
          Chars
        </Link>
        <Link className="h" to="/families">
          Families
        </Link>
        <Link className="h" to="/locations">
          Locations
        </Link>
      </div>
    );
  }
}
