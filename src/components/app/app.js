import React, { Component } from "react";

import CharactersList from "../charactersList";
import GetData from "../../getData/getData";

import "./app.sass";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <CharactersList />;
  }
}
