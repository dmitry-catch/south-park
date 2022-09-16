import React, { Component } from "react";
import GetData from "../../services/getData";
import Loader from "../../loader";

import { Card, CardBody, CardTitle, Button } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./location.sass";

export default class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "A",
      name: "B",
      created_at: "C",
      updated_at: "D",
      loading: true,
    };
    this.asyncGetLocation = this.asyncGetLocation.bind(this);
    this.stopRolling = this.stopRolling.bind(this);
  }

  GetData = new GetData();

  getRandomLocation() {
    const random = Math.floor(1 + Math.random() * 660); //661 locations all
    this.GetData.fetchRequest(`locations`, random).then(this.locationLoaded);
  }

  locationLoaded = (resp) => {
    this.setState({
      id: resp.data.id,
      name: resp.data.name,
      created_at: resp.data.created_at,
      updated_at: resp.data.updated_at,
      loading: false,
    });
  };

  asyncGetLocation() {
    clearInterval(this.interval); //if user press btn twice
    this.interval = setInterval(() => {
      this.getRandomLocation();
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
        updated_at={this.state.updated_at}
        name={this.state.name}
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
            onClick={this.asyncGetLocation}
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
    <Card className="content_location">
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
