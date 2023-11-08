import * as React from 'react';
import Header from "../components/Header";
import {FC, useEffect} from "react";
import Menu from "./Menu";
import FinalAudioCell from "../components/Table/Cell/FinalAudioCell";
import finalTour from "../data/finalTour.json";


export const FinalPage: FC<{isAnswer: boolean}> = ({isAnswer}) => {
  const finalTourIndex = 3;
  useEffect(() => {
    console.log(finalTour);
    console.log(finalTour.data.src)
  }, []);
  return (
      <div>
        <Menu tourIndex={finalTourIndex} answers={isAnswer} />
        <Header tourIndex={finalTourIndex} />
        {isAnswer ? <FinalAudioCell isAnswerTour={true} src={finalTour.data.src} /> : <FinalAudioCell isAnswerTour={false} src={finalTour.data.src}/> }
      </div>
  );
};