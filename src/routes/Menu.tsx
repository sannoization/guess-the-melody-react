import * as React from 'react';
import {FC, useEffect, useState} from "react";
import '../main.scss'
import {Link} from "react-router-dom";

type Props = {
  tourIndex: number;
  answers?: boolean;
};

const Menu: FC<Props> = ({tourIndex, answers}) => {
  const [isStartTour, setIsStartTour] = useState(true);
  const [isFinalTour, setIsFinalTour] = useState(true);
  const prevTour = `/${tourIndex}tour`;
  const nextTour = `/${tourIndex + 2}tour`;
  const currentTour = `/${tourIndex + 1}tour`;

  useEffect(() => {
    if (tourIndex === 0) setIsStartTour(false); else setIsStartTour(true);
    if (tourIndex === 3) setIsFinalTour(false); else setIsFinalTour(true);
    console.log(tourIndex);
  }, [tourIndex]);

  return (
      <nav>
        <Link className="button gap" to={'/'}>Меню</Link>
        {isStartTour ?
            <Link reloadDocument className="button gap" to={prevTour}>{tourIndex} тур</Link> : ''
        }
        {
          isFinalTour ? <Link reloadDocument className="button gap" to={nextTour}>{tourIndex + 2} тур</Link> : ''
        }
        {answers ?
            <Link reloadDocument className="button gap" to={currentTour}>Вопросы</Link>
            : <Link reloadDocument className="button gap" to={currentTour + '/answers'}>Ответы</Link>
        }
      </nav>
  );
};

export default Menu;