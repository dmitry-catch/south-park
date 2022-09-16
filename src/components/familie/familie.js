import React, { Component } from "react";
import GetData from "../../services/getData";
import Loader from "../../loader";

import { Card, CardBody, CardTitle, Button } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./familie.sass";

export default class Familie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "Id",
      name: "Name",
      created_at: "Cr",
      updated_at: "Up",
      loading: true,
    };
    this.asyncGetFamilie = this.asyncGetFamilie.bind(this);
    this.stopRolling = this.stopRolling.bind(this);
  }

  GetData = new GetData();

  getRandomFamilie() {
    const random = Math.floor(1 + Math.random() * 48); //49 families all
    this.GetData.fetchRequest(`families`, random).then(this.familieLoaded);
  }

  familieLoaded = (resp) => {
    this.setState({
      id: resp.data.id,
      name: resp.data.name,
      created_at: resp.data.created_at,
      updated_at: resp.data.updated_at,
      loading: false,
    });
  };

  asyncGetFamilie() {
    clearInterval(this.interval); //if user press btn twice
    this.interval = setInterval(() => {
      this.getRandomFamilie();
    }, 1000);
  }

  stopRolling() {
    clearInterval(this.interval);
    this.setState({
      id: "Don't forget",
      name: "to bring a Towel",
      sex: "",
      hair_color: "",
      occupation: "",
      loading: true,
    });
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
        updated_at={this.state.updated_at}
        created_at={this.state.created_at}
        loading={this.state.loading}
      />
    );
    return (
      <>
        {content}
        <div className="btn-cont">
          <Button
            className="btn btn-warning btn-lg"
            onClick={this.asyncGetFamilie}
          >
            Roll!
          </Button>
          <Button className="btn btn-danger btn-lg" onClick={this.stopRolling}>
            Stop
          </Button>
        </div>
      </>
    );
  }
}

const View = ({ id, name, updated_at, created_at, loading }) => {
  let loader;
  if (loading) {
    loader = <Loader />;
  } else {
    loader = null;
  }
  return (
    <Card className="content_familie">
      <CardBody>
        <CardTitle>{id}</CardTitle>
        <CardTitle>{name}</CardTitle>
        <CardTitle>{updated_at}</CardTitle>
        <CardTitle>{created_at}</CardTitle>
        {loader}
      </CardBody>
    </Card>
  );
};
