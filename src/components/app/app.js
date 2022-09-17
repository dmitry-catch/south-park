import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ItemList from '../itemList';

import Char from '../char';
import CharList from '../charList';

import Familie from '../familie';
import FamilieList from '../familieList';

import Location from '../location';
import LocationList from '../locationList';

import Header from '../header';

import './app.sass';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <Header />
          <h1>South park</h1>
          <Routes>
            <Route
              path='/chars'
              element={<ItemList item={<Char />} list={<CharList />} />}
            />
            <Route
              path='/families'
              element={<ItemList item={<Familie />} list={<FamilieList />} />}
            />
            <Route
              path='/locations'
              element={<ItemList item={<Location />} list={<LocationList />} />}
            />
          </Routes>
        </div>
      </Router>
    );
  }
}
