import * as React from 'react';
import {FC, useEffect, useState} from "react";
import './style.css'
import {Link} from "react-router-dom";

type Props = {
  tourIndex: number;
  answers?: boolean;
};

const Menu: FC<Props> = ({tourIndex, answers}) => {
  const [isTour, setIsTour] = useState(true);
  const prevTour = `/${tourIndex}tour`;
  const nextTour = `/${tourIndex + 2}tour`;
  const currentTour = `/${tourIndex + 1}tour`;

  useEffect(() => {
    if (tourIndex === 0 || tourIndex === 4) setIsTour(false);
  }, [tourIndex]);

  return (
      <nav>
        <Link className="button" to={'/'}>Меню</Link>
        {isTour ?
            <Link className="button" to={prevTour}>{tourIndex} тур</Link> : ''
        }
        <Link className="button" to={nextTour}>{tourIndex + 2} тур</Link>
        {answers ?
            <Link className="button" to={currentTour}>Вопросы</Link>
            : <Link className="button" to={currentTour + '/answers'}>Ответы</Link>
        }
      </nav>
  );
};

export default Menu;