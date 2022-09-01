import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ItemList from "../itemList";
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
            <Route path="/" element={<h2>route</h2>} />
            <Route path="/first" element={<ItemList />} />
            <Route path="/second" element={<ItemList />} />
            <Route path="/third" element={<ItemList />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
