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
      characters: "Character",
      loading: true,
    };
    this.asyncGetFamilie = this.asyncGetFamilie.bind(this);
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
      characters: resp.data.characters,
      loading: false,
    });
  };

  asyncGetFamilie() {
    this.interval = setInterval(() => {
      this.getRandomFamilie();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const content = (
      <View
        id={this.state.id}
        name={this.state.name}
        updated_at={this.state.updated_at}
        created_at={this.state.created_at}
        characters={this.state.characters}
        loading={this.state.loading}
      />
    );
    return (
      <>
        {content}
        <Button onClick={this.asyncGetFamilie}>Roll!</Button>
      </>
    );
  }
}

const View = ({ id, name, updated_at, created_at, characters, loading }) => {
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
        <CardTitle>{characters}</CardTitle>
        {loader}
      </CardBody>
    </Card>
  );
};
