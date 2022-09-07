import React, { Component } from "react";

import "./loader.sass";

export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <span class="loader"></span>;
  }
}
