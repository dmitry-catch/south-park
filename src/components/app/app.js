import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ItemList from "../itemList";

import Char from "../char";
import Location from "../location";

import Header from "../header";

import "./app.sass";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <h1>hi</h1>
          <Routes>
            <Route path="/first" element={<ItemList item={<Char />} />} />
            <Route path="/second" element={<ItemList item={<Location />} />} />
            <Route path="/third" element={<h2>route</h2>} />
          </Routes>
        </div>
      </Router>
    );
  }
}
