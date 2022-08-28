import React, { Component } from "react";

import CharactersList from "../charactersList";
import Header from "../header";

import "./app.sass";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />
        <CharactersList />
      </>
    );
  }
}
