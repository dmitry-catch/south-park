import React, { Component } from "react";
import GetData from "../../services/getData";

import { Button } from "reactstrap";

import "./location.sass";

export default class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      created_at: "",
      updated_at: "",
      episodes: "",
      loading: true,
    };
    this.asyncGetChar = this.asyncGetChar.bind(this);
  }

  GetData = new GetData();

  getRandomChar() {
    const random = Math.floor(1 + Math.random() * 660); //661 locations all
    this.GetData.fetchRequest(`locations`, random).then(this.charLoaded);
  }

  charLoaded = (resp) => {
    this.setState({
      name: resp.data.name,
      created_at: resp.data.created_at,
      updated_at: resp.data.updated_at,
      episodes: resp.data.episodes,
      loading: false,
    });
  };

  asyncGetChar() {
    this.interval = setInterval(() => {
      this.getRandomChar();
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { loading } = this.state;
    const content = loading ? (
      <h2>LOADING</h2>
    ) : (
      <View
        updated_at={this.state.updated_at}
        name={this.state.name}
        created_at={this.state.created_at}
        episodes={this.state.episodes}
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

const View = ({ updated_at, name, created_at, episodes }) => {
  return (
    <div className="wrapper">
      <div className="item">{name}</div>
      <div className="item">{created_at}</div>
      <div className="item">{updated_at}</div>
      <div className="item">{episodes}</div>
    </div>
  );
};
