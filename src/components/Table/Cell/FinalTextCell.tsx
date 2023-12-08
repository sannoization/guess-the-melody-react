import * as React from 'react';
import {FC, useState} from "react";

const FinalTextCell: FC<{children: any; className: string}> = ({children, className}) => {

  const [isActive, setIsActive] = useState(false);
  return (
      <div data-testid="finalTextCell" className={className} onClick={() => setIsActive(!isActive) }>
        {isActive ? <span>{children}</span> : <span>Show</span>}
      </div>
  );
};
export default FinalTextCell;