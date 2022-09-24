import React, { Component } from "react";
import BasicList from "../basicList/basicList";

import "./familieList.sass";

export default class FamilieList extends Component {
  render() {
    return <BasicList req={`families`} />;
  }
}
