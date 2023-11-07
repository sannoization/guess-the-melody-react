import * as React from 'react';
import {ChangeEvent, FC, LegacyRef, useCallback} from "react";

type Props = {
  setCurrentTime: (currentTime: string) => void;
  src: string;
  audioRef: LegacyRef<HTMLAudioElement>;
};
const Player: FC<Props> = ({setCurrentTime, src, audioRef}) => {

  const timeUpdate = useCallback((event: ChangeEvent<HTMLAudioElement>) => {
    const minutes: number= Math.floor(event.target.currentTime / 60);
    const seconds = Math.floor(event.target.currentTime - minutes * 60);

    const currentTime = buildTimeFormat(minutes) + ':' + buildTimeFormat(seconds);

    setCurrentTime(currentTime);
  }, [setCurrentTime]);

  const buildTimeFormat = (time: number) => {
    const symbol = '0';
    const length = 2;
    return (new Array(length + 1).join(symbol) + time).slice(-length)
  }

  return (
      <>
        <audio ref={audioRef} src={src} onTimeUpdate={timeUpdate}/>
      </>
  );
};

export default Player;