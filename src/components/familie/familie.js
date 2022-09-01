import React, { Component } from "react";
import GetData from "../../services/getData";

import { Button } from "reactstrap";

import "./familie.sass";

export default class Familie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      created_at: "",
      updated_at: "",
      characters: "",
      loading: true,
    };
    this.asyncGetChar = this.asyncGetChar.bind(this);
  }

  GetData = new GetData();

  getRandomChar() {
    const random = Math.floor(1 + Math.random() * 48); //49 families all
    this.GetData.fetchRequest(`families`, random).then(this.charLoaded);
  }

  charLoaded = (resp) => {
    this.setState({
      name: resp.data.name,
      created_at: resp.data.created_at,
      updated_at: resp.data.updated_at,
      characters: resp.data.characters,
      loading: false,
    });
  };

  asyncGetChar() {
    this.interval = setInterval(() => {
      this.getRandomChar();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { loading } = this.state;
    const content = loading ? (
      <h2>l-o-a-d-i-n-g</h2>
    ) : (
      <View
        updated_at={this.state.updated_at}
        name={this.state.name}
        created_at={this.state.created_at}
        characters={this.state.characters}
      />
    );
    return (
      <>
        {content}
        <Button onClick={this.asyncGetChar}>Roll!</Button>
      </>
    );
  }
}

const View = ({ updated_at, name, created_at, characters }) => {
  return (
    <div className="wrapper">
      <div className="item">{name}</div>
      <div className="item">{created_at}</div>
      <div className="item">{updated_at}</div>
      <div className="item">{characters}</div>
    </div>
  );
};
