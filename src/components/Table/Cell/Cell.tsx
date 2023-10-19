import {FC, useEffect, useState} from 'react';
import GOOGLE_TRANSLATE_ICON from "../../../icons/components/GOOGLE_TRANSLATE_ICON";
import {COLORS, PICTURES} from "./utils";
import GALLERY_ICON from "../../../icons/components/GALLERY_ICON";
import SOUND_ICON from "../../../icons/components/SOUND_ICON";
import "./style.css";
import H5AudioPlayer from "react-h5-audio-player";

type Props = {
  type: PICTURES;
  isAnswerTour?: boolean;
  isHeader?: boolean;
  title?: string;
  src?: string;
  aSrc?: string
  tour: number;
};

export const Cell: FC<Props> = ({type, isAnswerTour, isHeader, title, src, aSrc, tour}) => {
  const [color, setColor] = useState<COLORS>(COLORS.BLACK);
  const [isAudio, setIsAudio] = useState(true);
  const answer = isAnswerTour ? 'a' : 'q';
  const source = process.env.PUBLIC_URL + `/audio/${tour}/${answer}/${src}`;

  useEffect(() => {
    isAnswerTour ? setColor(COLORS.RED) : setColor(COLORS.BLACK);
    if (!src?.includes('mp3')) setIsAudio(false);
  }, [src, isAnswerTour, type]);

  const renderIcon = () => {

    switch (type) {
      case PICTURES.GOOGLE_TRANSLATE:
        return <GOOGLE_TRANSLATE_ICON
            color={color}
            className="icon"/>
      case PICTURES.EMOJI:
        return <GALLERY_ICON
            key={src}
            color={color}
            src={source}
            className={"icon"}/>
      case PICTURES.SOUND_ICON:
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
          {isHeader ? (<p>{title}</p>) : (renderIcon())}
          {source ? isAudio ? (<H5AudioPlayer
          src={source}
          autoPlay={false}
          autoPlayAfterSrcChange={false}
          showSkipControls={false}
          showJumpControls={false}
          />) : (null) : (null)}
        </div>
      </>
  );
};