import * as React from 'react';
import {FC} from "react";
import '../main.scss'
import {Link} from "react-router-dom";

const Root: FC = () => {
  return (
      <>
        <nav data-testid='root'>
          <Link data-testid='1tour' className='button gap' to={`/1tour`}>1 тур</Link>
          <Link data-testid='1tour-answers' className='button gap' to={`/1tour/answers`}>1 тур ответы</Link>
          <Link data-testid='2tour' className='button gap' to={`/2tour`}>2 тур</Link>
          <Link data-testid='2tour-answers' className='button gap' to={`/2tour/answers`}>2 тур ответы</Link>
          <Link data-testid='3tour' className='button gap' to={`/3tour`}>3 тур</Link>
          <Link data-testid='3tour-answers' className='button gap' to={`/3tour/answers`}>3 тур ответы</Link>
          <Link data-testid='4tour' className='button gap' to={`/4tour`}>Финал</Link>
          <Link data-testid='4tour-answers' className='button gap' to={`/4tour/answers`}>Финал ответы</Link>
        </nav>
      </>
  );
}

export default Root;