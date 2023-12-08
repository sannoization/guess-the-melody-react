import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import TablePage from "./routes/TablePage";
import {FinalPage} from "./routes/FinalPage";
import Root from "./routes/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/1tour",
    element: <TablePage tourIndex={0} isAnswer={false}/>
  },
  {
    path: "/1tour/answers",
    element: <TablePage tourIndex={0} isAnswer={true}/>
  },
  {
    path: '/2tour',
    element: <TablePage tourIndex={1} isAnswer={false}/>
  },
  {
    path: '/2tour/answers',
    element: <TablePage tourIndex={1} isAnswer={true}/>
  },
  {
    path: '/3tour',
    element: <TablePage tourIndex={2} isAnswer={false}/>
  },
  {
    path: '/3tour/answers',
    element: <TablePage tourIndex={2} isAnswer={true}/>
  },
  {
    path: '/4tour',
    element: <FinalPage isAnswer={false}/>
  },
  {
    path: '/4tour/answers',
    element: <FinalPage isAnswer={true}/>
  }
]);

ReactDOM.render(
    <>
      <RouterProvider router={router}/>
    </>,
    document.querySelector('#root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
