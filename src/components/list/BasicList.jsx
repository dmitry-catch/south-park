import React, { Component } from 'react';

import GetData from '../../services/getData';

import 'bootstrap/dist/css/bootstrap.min.css';

import './BasicList.sass';
import { Spinner } from 'reactstrap';

export default class BasicList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      dataLoaded: false,
      topList: [],
    };
    this.promise = this.props.promise;
    this.show = this.show.bind(this);
  }

  GetData = new GetData();

  componentDidMount() {
    this.fillWithSpinners();
  }

  fillWithSpinners() {
    const top = [];
    for (let i = 1; i <= 5; i++) {
      top.push(<Spinner />);
    }
    this.setState((state) => ({ ...state, topList: top }));
  }

  async getRandomChar() {
    const allPromices = [];
    for (let i = 1; i <= 5; i++) {
      const promise = await this.promise(i);
      allPromices.push(promise);
    }
    return allPromices;
  }

  show() {
    if (!this.state.dataLoaded) {
      const promise = this.getRandomChar();
      console.log('after get random char', promise);
      promise.then((results) => {
        this.setState((state) => ({
          dataLoaded: !state.dataLoaded,
          topList: results.map((result) => result.data.name),
        }));
      });
    }
    this.setState((state) => ({
      ...state,
      show: !state.show,
    }));
  }

  render() {
    console.log(this.state.topList);
    let rez = this.state.topList.map((i) => {
      return <div className='list-group-item list-group-item-action'>{i}</div>;
    });
    return (
      <div className='list'>
        <h2>Top 5:</h2>
        <div className='list-group'>
          {rez}
          <button
            className='btn btn-primary btn-lg'
            onClick={() => this.show()}>
            SHOW!
          </button>
        </div>
      </div>
    );
  }
}
