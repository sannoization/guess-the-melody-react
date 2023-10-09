// @flow
import * as React from 'react';
import {FC} from 'react';
import {Cell} from "./Cell/Cell";
import {compareType, PICTURES} from "./Cell/constants";
import "./style.css";
import config from "../../data/config.json";

type Props = {};
export const Table: FC = () => {

  const data = config.map(f => f.data);

  return (
      <div className="grid-container">
        {data.flat().map(f => {
          const type: PICTURES = compareType(f.type);
          console.log(type);
          return (
              <Cell key={f.src} type={type} isAnswerTour={f.isAnswer}
                    isHeader={f.isHeader}
                    text={f.src}
              />)}
          )
        }
        <Cell isAnswerTour={false} type={PICTURES.EMOJI} isHeader={false}/>
        <Cell isAnswerTour={false} type={PICTURES.GOOGLE_TRANSLATE} isHeader={false}/>
        <Cell isAnswerTour={true} type={PICTURES.GOOGLE_TRANSLATE} isHeader={false}/>
        <Cell isAnswerTour={true} type={PICTURES.EMOJI} isHeader={false}/>
      </div>
  );
};