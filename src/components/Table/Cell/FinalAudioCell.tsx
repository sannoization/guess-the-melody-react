import * as React from 'react';
import {FC, useCallback, useEffect, useRef, useState} from "react";
import SOUND_ICON from "../../../icons/components/SOUND_ICON";
import {COLORS} from "./utils";
import "./style.css";
import Player from "../AudioStream/Player";
import FinalTourTable from "../FinalTourTable";

type Props = {
  isAnswerTour?: boolean;
  src?: string;
};

const FinalAudioCell: FC<Props> = ({isAnswerTour, src}) => {
  const [color, setColor] = useState<COLORS>(COLORS.BLACK);
  const [currentTime, setCurrentTime] = useState('00:00');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null)
  const source = process.env.PUBLIC_URL + `/audio/4/${src}`;

  useEffect(() => {
    isAnswerTour ? setColor(COLORS.RED) : setColor(COLORS.BLACK);
  }, [isAnswerTour]);

  const playAudio = useCallback(() => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef?.current?.pause();
    } else {
      audioRef?.current?.play();
    }
  }, [isPlaying]);

  return (
      <>
        <div className="final-audio-cell" onClick={playAudio}>
          <SOUND_ICON color={color} className="icon" />
        <div>{currentTime}</div>
        </div>
        <Player setCurrentTime={setCurrentTime} src={source} audioRef={audioRef}/>
        {isAnswerTour ?  <FinalTourTable />: ''}
      </>
  );
};

export default FinalAudioCell;