// @flow
import * as React from 'react';
import { Table } from './Table/Table';
import config from "../data/config.json";
import { useState } from 'react';
import Header from './Header';

type Props = {

};
export const Page = (props: Props) => {
  const conf = config.map(f => f.tour);
  console.log(conf);

  // TODO set tour number from parent component
  const [tour, setTour] = useState(conf[0]);


  return (
      <div>
        <Header tour={tour}/>
        <Table tour={tour}/>
      </div>
  );
};