import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.onFetch = this.onFetch.bind(this);
  }
  onFetch() {
    fetch(`https://spapi.dev/api/characters/2`)
      .then((pr) => pr.json())
      .then((res) => {
        console.log(res.data);
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button className="App-link" onClick={this.onFetch}>
            press me!
          </button>
        </header>
      </div>
    );
  }
}
