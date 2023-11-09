import * as React from 'react';
import {useNavigate, useRouteError} from "react-router-dom";
import  "../main.scss"

const ErrorPage = () => {
  const error: any = useRouteError();
  const navigate = useNavigate();
  console.error(error);

  return (
      <div id="error-page" className="errorPage">
        <h1 className="errorHeader">{error.status}</h1>
        <div className="message">{error.data}</div>
        <button className='button' onClick={() => navigate(-1)}>back</button>
      </div>
  );
};

export default ErrorPage;