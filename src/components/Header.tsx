import { FC, useEffect, useState } from "react";
import '../main.scss'

const Header: FC<{tourIndex: number}> = ({tourIndex}) => {
    const [headerCaption, setHeaderCaption] = useState('');
    useEffect(() => {
      switch(tourIndex) {
        case 0: setHeaderCaption('Отгадай название');
          break;
        case 1: setHeaderCaption('Отгадай исполнителя');
          break;
        case 2: setHeaderCaption('Отгадай название и исполнителя');
          break;
        case 3: setHeaderCaption('Финал');
          break;
        default:
          break;
      }
    
    }, [tourIndex])
    
    
    return (
        <div data-testid='header' className="tableHeader">
            <h1>ТУР {tourIndex + 1}</h1>
            <h2>{headerCaption}</h2>
        </div>

    )
}

export default Header;