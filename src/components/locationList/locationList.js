import React, { Component } from "react";
import BasicList from "../basicList/basicList";

import "./locationList.sass";
export default class LocationList extends Component {
  render() {
    return <BasicList req={`locations`} />;
  }
}
