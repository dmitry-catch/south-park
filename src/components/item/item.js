import React, { Component } from "react";
import GetData from "../../services/getData";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import "./item.sass";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "So come on down",
      sex: "to South Park!",
      age: "and meet some friends of mine",
      vision: true,
    };
    this.asyncGetChar = this.asyncGetChar.bind(this);
  }

  GetData = new GetData();

  getRandomChar() {
    const random = Math.floor(1 + Math.random() * 207); //208 characters all
    this.GetData.fetchRequest(random).then((resp) => {
      this.setState({
        name: resp.data.name,
        age: resp.data.age,
        sex: resp.data.sex,
      });
    });
  }

  asyncGetChar() {
    this.interval = setInterval(() => {
      this.getRandomChar();
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { name, sex, age } = this.state;
    return (
      <Card className="content">
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{sex}</CardSubtitle>
          <CardText>{age}</CardText>
          <Button onClick={this.asyncGetChar}>Roll!</Button>
        </CardBody>
      </Card>
    );
  }
}
