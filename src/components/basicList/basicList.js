import React, { Component } from "react";

import GetData from "../../services/getData";

import "bootstrap/dist/css/bootstrap.min.css";

import "./basicList.sass";

export default class BasicList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.top = [];
    this.getRandomChar();
    this.show = this.show.bind(this);
  }

  GetData = new GetData();

  getRandomChar() {
    for (let i = 1; i <= 5; i++) {
      this.GetData.fetchRequest(this.props.req, i).then(this.charLoaded);
    }
  }

  charLoaded = (resp) => {
    this.top.push(resp.data.name);
  };

  show() {
    this.setState(({ show }) => ({
      show: !show,
    }));
  }

  render() {
    let rez = this.top.map((i) => {
      return <div className="list-group-item list-group-item-action">{i}</div>;
    });
    return (
      <div className="list">
        <h2>Top 5:</h2>
        <div className="list-group">
          {rez}
          <button
            className="btn btn-primary btn-lg"
            onClick={() => this.show()}
          >
            SHOW!
          </button>
        </div>
      </div>
    );
  }
}
