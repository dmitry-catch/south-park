import React, { Component } from 'react';
import GetData from '../../services/getData';
import Loader from '../../loader';

import { Card, CardBody, CardTitle, Button } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './char.sass';

export default class Char extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "Don't forget",
      name: 'to bring a Towel',
      sex: '',
      hair_color: '',
      occupation: '',
      //{}
      loading: true,
    };
    this.asyncGetChar = this.asyncGetChar.bind(this);
    this.stopRolling = this.stopRolling.bind(this);
  }

  GetData = new GetData();

  getRandomChar() {
    const random = Math.floor(1 + Math.random() * 207); //208 characters all
    this.GetData.fetchRequest(`characters`, random).then(this.charLoaded);
  }

  charLoaded = (resp) => {
    this.setState({
      id: resp.data.id,
      name: resp.data.name,
      sex: resp.data.sex,
      hair_color: resp.data.hair_color,
      occupation: resp.data.occupation,
      loading: false,
    });
  };

  asyncGetChar() {
    clearInterval(this.interval); //if user press btn twice
    this.interval = setInterval(() => {
      this.getRandomChar();
    }, 1000);
  }

  stopRolling() {
    clearInterval(this.interval);
    this.setState({
      id: "Don't forget",
      name: 'to bring a Towel',
      sex: '',
      hair_color: '',
      occupation: '',
      loading: true,
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  ClickItem(e) {
    e.target.className = 'list-group-item list-group-item-action active';
  }

  render() {
    const content = (
      <View
        id={this.state.id}
        name={this.state.name}
        sex={this.state.sex}
        hair_color={this.state.hair_color}
        occupation={this.state.occupation}
        loading={this.state.loading}
      />
    );
    return (
      <>
        {content}
        <div className='btn-cont'>
          <Button
            className='btn btn-warning btn-lg'
            onClick={this.asyncGetChar}>
            Roll!
          </Button>
          <Button className='btn btn-danger btn-lg' onClick={this.stopRolling}>
            Stop
          </Button>
        </div>
      </>
    );
  }
}

const View = ({ id, name, sex, hair_color, occupation, loading }) => {
  return (
    <Card className='content_char'>
      <CardBody className='cardbody'>
        <CardTitle className='white_line'>{id}</CardTitle>
        <CardTitle className='white_line'>{name}</CardTitle>
        {loading ? (
          <Loader />
        ) : (
          <>
            <CardTitle className='white_line'>{sex}</CardTitle>
            <CardTitle className='white_line'>{hair_color}</CardTitle>
            <CardTitle className='white_line'>{occupation}</CardTitle>
          </>
        )}
      </CardBody>
    </Card>
  );
};
