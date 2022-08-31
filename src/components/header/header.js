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
        <Link to="/first">Chars</Link>
        <Link to="/second">Books</Link>
        <Link to="/third">Families</Link>
      </div>
    );
  }
}
