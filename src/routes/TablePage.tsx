import * as React from 'react';
import { Table } from '../components/Table/Table';
import {FC} from 'react';
import Header from '../components/Header';
import Menu from "./Menu";

type Props = {
  tourIndex: number;
  isAnswer: boolean
};
const TablePage: FC<Props> = ({tourIndex, isAnswer}) => {

  return (
      <div>
        <Menu tourIndex={tourIndex} answers={isAnswer}/>
        <Header tourIndex={tourIndex}/>
        <Table tourIndex={tourIndex} isAnswer={isAnswer}/>
      </div>
  );
};
export default TablePage;