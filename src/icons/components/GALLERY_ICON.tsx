import {FC, useCallback, useState} from "react";
import {IconProps} from "./types.icons";
import ReactModal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const GALLERY_ICON: FC<IconProps> = ({className, color, crossed, src}) => {
  const firstLine =  <line className="cls-1" x1="129" y1="0.6" x2="0.6" y2="129" stroke="#a7000d" strokeWidth='10px'/>;
  const secondLine = <line className="cls-1" x1="0.6" y1="0.6" x2="129" y2="129" stroke="#a7000d" strokeWidth='10px'/>;
  const [isCrossed, setIsCrossed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const changeCross = useCallback(
    () => {
      setIsCrossed(!isCrossed);
      setIsModalOpen(true);
    },
    [isCrossed]
  )

  const renderOnlyLines = useCallback(
    () => {
      return (
        [firstLine,secondLine]
      )
    },
    [firstLine, secondLine],
  )
  return (
      <>
        <svg version="1.1"
             className={className}
             fill={color}
             onClick={changeCross}
             viewBox="0 0 129 129">
          <circle cx="76" cy="42.4" r="6.6"/>
          <path
              d="m6.4,119.5c0,0 0,0.1 0,0 0,0.1 0,0.1 0.1,0.1 0.1,0.2 0.2,0.5 0.3,0.7 0,0.1 0.1,0.1 0.1,0.2 0,0.1 0.1,0.1 0.1,0.2 0,0 0.1,0.1 0.1,0.1 0.1,0.2 0.3,0.3 0.4,0.5 0,0 0.1,0.1 0.1,0.1 0.1,0.1 0.1,0.1 0.2,0.2 0.1,0 0.1,0.1 0.1,0.1 0.1,0.1 0.2,0.1 0.3,0.2 0,0 0.1,0.1 0.1,0.1 0,0 0.1,0 0.1,0.1 0.1,0.1 0.3,0.1 0.4,0.2 0.1,0 0.1,0 0.2,0.1 0.1,0 0.2,0.1 0.2,0.1 0.3,0.1 0.6,0.1 0.9,0.1h108.2c2.3,0 4.1-1.8 4.1-4.1v-27-80.9c0-2.3-1.8-4.1-4.1-4.1h-107.9c-2.3,0-4.1,1.8-4.1,4.1v80.7 27c0,0.3 0.1,0.7 0.1,1 0,0.1 0,0.2 0,0.2zm108.1-5.2h-90.4l66.8-43.7 23.6,22.5v21.2zm-100-99.6h100v67.1l-20.3-19.4c-1.4-1.3-3.5-1.5-5.1-0.5l-19.1,12.6-13.3-13.4c-1.4-1.4-3.5-1.6-5.1-0.6l-37.1,23.4v-69.2zm0,78.9l38.7-24.4 9.8,9.9-48.5,31.7v-17.2z"/>
        {isCrossed ? renderOnlyLines() : null}
        </svg>

        <ReactModal
        isOpen={isModalOpen}
        contentLabel="Example Modal"
        onAfterOpen={() => setTimeout(
          () => setIsModalOpen(false), 5000)}
        style={customStyles}
      >
        <img src={src} alt="" />
      </ReactModal>
      
      </>

  )
}


export default GALLERY_ICON;