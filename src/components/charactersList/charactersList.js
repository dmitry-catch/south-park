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

import "./charactersList.sass";

export default class CharactersList extends Component {
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
    let interval = setInterval(() => {
      this.getRandomChar();
      console.log("new");
    }, 1000);
  }

  render() {
    const { name, age, sex } = this.state;
    if (this.state.vision) {
      return (
        <div className="app">
          <div className="card">
            <Card className="content">
              <CardBody>
                <span className="cross">🞪</span>
                <CardTitle>{name}</CardTitle>
                <CardSubtitle>{sex}</CardSubtitle>
                <CardText>{age}</CardText>
                <Button onClick={this.asyncGetChar}>Roll!</Button>
              </CardBody>
            </Card>
          </div>
        </div>
      );
    } else {
      return <h1>ERROR</h1>;
    }
  }
}
