import * as React from 'react';
import "./style.css";

import finalTour from "../../data/finalTour.json";
import FinalTextCell from "./Cell/FinalTextCell";
import {FC} from "react";

const FinalTourTable: FC = () => {

  return (
      <div className="flex-container">
        {finalTour.data.answers.map((i: any) => {
          return (
              <FinalTextCell key={i} className="cell header-cell final-text-cell">{i}</FinalTextCell>
          )
        })}
      </div>
  );
};

export default FinalTourTable;