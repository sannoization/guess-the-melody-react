import * as React from 'react';
import {FC} from 'react';
import {Cell} from "./Cell/Cell";
import {compareType, PICTURES} from "./Cell/utils";
import "./style.css";
import config from "../../data/config.json";

export const Table: FC<{ tourIndex: number, isAnswer: boolean }> = ({tourIndex, isAnswer}) => {

  const data = config[tourIndex].data;
  const tour = config[tourIndex].tour;

  return (
      <div className="grid-container">
        {data.map((f: any) => {
              const type: PICTURES = compareType(f.type);
              return (
                  <Cell key={f.src ?? f.title} type={type} isAnswerTour={isAnswer}
                        tour={tour}
                        isHeader={f.isHeader}
                        title={f.title ?? ''}
                        src={isAnswer ? f.aSrc : f.src}
                  />)
            }
        )
        }
      </div>
  );
};