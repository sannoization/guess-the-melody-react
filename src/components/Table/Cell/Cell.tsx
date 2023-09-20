import * as React from 'react';
import {FC, useEffect, useState} from 'react';
import GOOGLE_TRANSLATE_ICON from "../../../icons/components/GOOGLE_TRANSLATE_ICON";
import {COLORS, PICTURES} from "./constants";
import GALLERY_ICON from "../../../icons/components/GALLERY_ICON";
import SOUND_ICON from "../../../icons/components/SOUND_ICON";

type Props = {
    audioSrc?: string;
    type: PICTURES;
    isAnswerTour: boolean;
};

export const Cell: FC<Props> = ({type, isAnswerTour}) => {
  const [color, setColor] = useState<COLORS>(COLORS.BLACK);

  useEffect(() => {
    isAnswerTour ? setColor(COLORS.RED) : setColor(COLORS.BLACK);
  }, [isAnswerTour]);

  const renderIcon = () => {

    switch (type) {
      case PICTURES.GOOGLE_TRANSLATE:
        return <GOOGLE_TRANSLATE_ICON color={color}/>
      case PICTURES.EMOJI:
        return <GALLERY_ICON color={color} />
      default:
        return <SOUND_ICON color={color}/>
    }
  }

  return (
      renderIcon()
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