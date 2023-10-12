// @flow
import * as React from 'react';
import {FC} from 'react';
import {Cell} from "./Cell/Cell";
import {compareType, PICTURES} from "./Cell/utils";
import "./style.css";
import config from "../../data/config.json";

export const Table: FC<{tour: number}> = ({tour}) => {

  const data = config.map(f => f.data);

  return (
      <div className="grid-container">
        {data.flat().map(f => {
          const type: PICTURES = compareType(f.type);
          return (
              <Cell key={f.src ?? f.title} type={type} isAnswerTour={f.isAnswer}
                    tour={tour}
                    isHeader={f.isHeader}
                    title={f.title ?? ''}
                    src={f.src ?? ''}
              />)}
          )
        }
      </div>
  );
};