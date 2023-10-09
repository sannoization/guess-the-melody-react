import * as React from 'react';
import {FC, useCallback, useEffect, useRef, useState} from 'react';
import GOOGLE_TRANSLATE_ICON from "../../../icons/components/GOOGLE_TRANSLATE_ICON";
import {COLORS, PICTURES} from "./constants";
import GALLERY_ICON from "../../../icons/components/GALLERY_ICON";
import SOUND_ICON from "../../../icons/components/SOUND_ICON";
import "./style.css";
import H5AudioPlayer from "react-h5-audio-player";

type Props = {
  audioSrc?: string;
  type: PICTURES;
  isAnswerTour?: boolean;
  isHeader?: boolean;
  text?: string
};

export const Cell: FC<Props> = ({type, isAnswerTour, isHeader, text}) => {
  const [color, setColor] = useState<COLORS>(COLORS.BLACK);
  const [isCrossed, setIsCrossed] = useState(false);

  useEffect(() => {
    console.log(type)
    isAnswerTour ? setColor(COLORS.RED) : setColor(COLORS.BLACK);
    if (isAnswerTour) setIsCrossed(true);
  }, [isAnswerTour]);

  const renderIcon = () => {

    switch (type) {
      case PICTURES.GOOGLE_TRANSLATE:
        console.log(isCrossed);
        return <GOOGLE_TRANSLATE_ICON
            color={color}
            crossed={isCrossed}
            className="icon"/>
      case PICTURES.EMOJI:
        console.log(isCrossed);
        return <GALLERY_ICON
            color={color}
            crossed={isCrossed}
            className="icon "/>
      case PICTURES.DEFAULT:
        console.log(isCrossed);
        return <SOUND_ICON
            color={color}
            className="icon"
        />
      default:
        return <SOUND_ICON
            color={color}
            className="icon"
        />
    }
  }

  return (
      <>
        <div className={isHeader ? "cell header-cell" : "cell cell-color"}>
          {isHeader ? (<p>{text}</p>) : (renderIcon())}
          <span>{text}</span>
          <H5AudioPlayer
              src={process.env.PUBLIC_URL + '/audio/q/snow/1potolok2.mp3'}
              showSkipControls={false}
              showFilledVolume={false}
              showDownloadProgress={false}
              autoPlay={true}
              onPlay={() => console.log("onPlay")}
              showJumpControls={false}>
          </H5AudioPlayer>
        </div>
        {/*<audio controls src={process.env.PUBLIC_URL + '/audio/q/p1tolok.mp3'}>audio</audio>*/}
      </>

      // <div className="cell cell-color">
      //   <img src={}
      //        className="sound-icon jouele-control"
      //        data-href={audioSrc}
      //        data-type="play-pause"
      //   >
      //           <span className="remaining jouele-control"
      //                 data-href={audioSrc}
      //                 data-type="time-remaining"
      //           ></span>
      //   </div>
  );
};