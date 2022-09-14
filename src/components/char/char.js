import React, { Component } from "react";
import GetData from "../../services/getData";
import Loader from "../../loader";

import { Card, CardBody, CardTitle, Button } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./char.sass";

export default class Char extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "So come on down",
      name: "to South Park!",
      sex: "and meet some friends ",
      hair_color: "of ",
      occupation: "mine",
      //{}
      loading: true,
    };
    this.asyncGetChar = this.asyncGetChar.bind(this);
  }

  GetData = new GetData();

  getRandomChar() {
    const random = Math.floor(1 + Math.random() * 207); //208 characters all
    this.GetData.fetchRequest(`characters`, random).then(this.charLoaded);
  }

  charLoaded = (resp) => {
    this.setState({
      id: resp.data.id,
      name: resp.data.name,
      sex: resp.data.sex,
      hair_color: resp.data.hair_color,
      occupation: resp.data.occupation,
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

  ClickItem(e) {
    e.target.className = "list-group-item list-group-item-action active";
  }

  render() {
    const content = (
      <View
        id={this.state.id}
        name={this.state.name}
        sex={this.state.sex}
        hair_color={this.state.hair_color}
        occupation={this.state.occupation}
        loading={this.state.loading}
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

const View = ({ id, name, sex, hair_color, occupation, loading }) => {
  let loader;
  if (loading) {
    loader = <Loader />;
  } else {
    loader = null;
  }
  return (
    <Card className="content">
      <CardBody>
        <CardTitle>{id}</CardTitle>
        <CardTitle>{name}</CardTitle>
        <CardTitle>{sex}</CardTitle>
        <CardTitle>{hair_color}</CardTitle>
        <CardTitle>{occupation}</CardTitle>
        {loader}
      </CardBody>
    </Card>
  );
};
