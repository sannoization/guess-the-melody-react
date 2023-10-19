import * as React from 'react';
import {FC} from "react";
import './style.css'
import {Link} from "react-router-dom";

const Root: FC = () => {
  return (
      <>
        <nav>
          <Link className='button' to={`/1tour`}>1 тур</Link>
          <Link className='button' to={`/1tour/answers`}>1 тур ответы</Link>
          <Link className='button' to={`/2tour`}>2 тур</Link>
          <Link className='button' to={`/2tour/answers`}>2 тур ответы</Link>
          <Link className='button' to={`/3tour`}>3 тур</Link>
          <Link className='button' to={`/3tour/answers`}>3 тур ответы</Link>
          <Link className='button' to={`/4tour`}>Финал</Link>
          <Link className='button' to={`/4tour/answers`}>Финал ответы</Link>
        </nav>
      </>
  );
}

export default Root;