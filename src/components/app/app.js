import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ItemList from "../itemList";

import Char from "../char";
import CharList from "../charList";

import Location from "../location";
import Familie from "../familie";

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
            <Route
              path="/chars"
              element={<ItemList item={<Char />} list={<CharList />} />}
            />
            <Route
              path="/locations"
              element={<ItemList item={<Location />} />}
            />
            <Route path="/families" element={<ItemList item={<Familie />} />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
