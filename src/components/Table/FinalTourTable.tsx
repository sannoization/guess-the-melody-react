import * as React from 'react';
import  "../../main.scss"
import finalTour from "../../data/finalTour.json";
import FinalTextCell from "./Cell/FinalTextCell";
import {FC} from "react";

const FinalTourTable: FC = () => {

  return (
      <div data-testid='finaltourtable' className="flexContainer">
        {finalTour.data.answers.map((i: any) => {
          return (
              <FinalTextCell key={i} className="cell headerCell finalTextCell">{i}</FinalTextCell>
          )
        })}
      </div>
  );
};

export default FinalTourTable;