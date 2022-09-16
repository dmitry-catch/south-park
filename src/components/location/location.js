import React, { Component } from "react";
import GetData from "../../services/getData";
import Loader from "../../loader";

import { Button } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./location.sass";

export default class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      created_at: "",
      updated_at: "",
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
      id: "",
      name: "",
      created_at: "",
      updated_at: "",
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
    loader = <h2 className="tab-sp">SOUTH PARK</h2>;
  } else {
    loader = null;
  }
  return (
    <div className="content_location">
      <div className="inner_g">
        <div>{id}</div>
        <div>{name}</div>
        <div>{updated_at}</div>
        <div>{created_at}</div>
        {loader}
      </div>
    </div>
  );
};
