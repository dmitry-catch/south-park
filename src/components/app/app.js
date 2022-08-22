import React, { Component } from "react";

import CharactersList from "../charactersList";
import GetData from "../../getData";

import "bootstrap/dist/css/bootstrap.min.css";
import "./app.sass";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <GetData />;
  }
}
