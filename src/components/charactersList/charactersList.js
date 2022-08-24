import React, { Component } from "react";
import GetData from "../../getData/getData";

// import "bootstrap/dist/css/bootstrap.min.css";
import "./charactersList.sass";

export default class CharactersList extends Component {
  constructor(props) {
    super(props);
    this.f();
  }

  state = {
    name: "123",
    age: 12,
  };

  GetData = new GetData();

  f() {
    this.GetData.fetchRequest().then((data) => {
      this.setState({ name: data.data.name, age: data.data.age });
    });
  }

  render() {
    const { name, age } = this.state;
    return (
      <div className="card">
        <div>{name}</div>
        <div>{age}</div>
        <button>press</button>
      </div>
    );
  }
}
