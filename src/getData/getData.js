import React, { Component } from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./getData.sass";

export default class GetData extends Component {
  constructor(props) {
    super(props);
    this.fetchRequest = this.fetchRequest.bind(this);
  }
  fetchRequest() {
    fetch(`https://spapi.dev/api/characters/2`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
      });
  }
  render() {
    return (
      <div>
        <Button color="primary" onClick={this.fetchRequest}>
          Click Me
        </Button>
      </div>
    );
  }
}
