import { FC, useCallback, useEffect, useState } from "react";
import './style.css'

const Header: FC<{tour: number}> = ({tour}) => {
    const [headerCaption, setHeaderCaption] = useState('');
    useEffect(() => {
      switch(tour) {
        case 1: setHeaderCaption('Отгадай название');
          break;
        case 2: setHeaderCaption('Отгадай исполнителя');
          break;
        case 3: setHeaderCaption('Отгадай название и исполнителя');
           break;
        case 4: setHeaderCaption('Финал');
           break;
        default:
            break;
      }
    
    }, [])
    
    
    return (
        <div className="header">
            <h1>ТУР {tour}</h1>
            <h2>{headerCaption}</h2>
        </div>

    )
}

export default Header;