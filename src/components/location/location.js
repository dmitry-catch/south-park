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
      episodes: "E",
      loading: true,
    };
    this.asyncGetLocation = this.asyncGetLocation.bind(this);
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
      episodes: resp.data.episodes,
      loading: false,
    });
  };

  asyncGetLocation() {
    this.interval = setInterval(() => {
      this.getRandomLocation();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const content = (
      <View
        id={this.state.id}
        updated_at={this.state.updated_at}
        name={this.state.name}
        created_at={this.state.created_at}
        episodes={this.state.episodes}
        loading={this.state.loading}
      />
    );

    return (
      <>
        {content}
        <Button onClick={this.asyncGetLocation}>Roll!</Button>
      </>
    );
  }
}

const View = ({ id, name, updated_at, created_at, episodes, loading }) => {
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
        <CardTitle>{updated_at}</CardTitle>
        <CardTitle>{created_at}</CardTitle>
        <CardTitle>{episodes}</CardTitle>
        {loader}
      </CardBody>
    </Card>
  );
};
