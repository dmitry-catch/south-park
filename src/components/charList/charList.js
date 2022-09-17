import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import BasicList from '../list/BasicList';

export const CharList = () => {
  const promise = (i) => this.GetData.fetchRequest(`characters`, i);
  return <BasicList promise={promise} />;
};
