import React from 'react';
import {render, screen} from '@testing-library/react';
import {Cell} from "./components/Table/Cell/Cell";
import {PICTURES} from "./components/Table/Cell/utils";

test('render title Cell', () => {
  render(
      <Cell
          type={PICTURES.NONE}
          tour={2}
          isAnswerTour={false}
          isHeader={true}
          title="pivo"/>
  );

  const linkElement = screen.getByText(/pivo/i);
  console.log(linkElement);
  expect(linkElement).toBeInTheDocument();
});

test('render answer audio cell', () => {
  render(
      <Cell
          type={PICTURES.NONE}
          tour={1}
          isAnswerTour={true}
          isHeader={false}
          src='pivo.mp3'
      />
  )

  const linkElement = screen.getByText(/00:00/i)
  expect(linkElement).toBeInTheDocument();

})
