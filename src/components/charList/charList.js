import React, { Component } from "react";
import BasicList from "../basicList/basicList";

import "./charList.sass";

export default class CharList extends Component {
  render() {
    return <BasicList req={`characters`} />;
  }
}
