import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {Cell} from "../components/Table/Cell/Cell";
import {PICTURES} from "../components/Table/Cell/utils";
import FinalTextCell from "../components/Table/Cell/FinalTextCell";
import FinalAudioCell from "../components/Table/Cell/FinalAudioCell";

describe('audio question cell', () => {
  test('title Cell', () => {
    render(
        <Cell
            type={PICTURES.NONE}
            tour={2}
            isAnswerTour={false}
            isHeader={true}
            title="pivo"/>
    );

    const element = screen.getByText(/pivo/i);
    screen.debug()
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(/pivo/i);
  });

  test('sound cell', () => {
    render(
        <Cell
            type={PICTURES.SOUND_ICON}
            tour={1}
            isAnswerTour={false}
            isHeader={false}
            src='pivo.mp3'
        />)

    const element = screen.getByText(/00:00/i);
    const audio = screen.getByTestId('audio');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(/00:00/i);
    expect(audio).toBeInTheDocument();
    expect(audio).toHaveAttribute('src', '/audio/1/q/pivo.mp3')
  })

  test('emoji cell', () => {
    render(
        <Cell
            type={PICTURES.EMOJI}
            tour={1}
            isAnswerTour={false}
            isHeader={false}
            src='pivo.mp3'
        />)

    const element = screen.getByText(/00:00/i)
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(/00:00/i);
  })

  test('google translate', () => {
    render(
        <Cell
            type={PICTURES.GOOGLE_TRANSLATE}
            tour={1}
            isAnswerTour={false}
            isHeader={false}
            src='pivo.mp3'
        />)
  })

  test('none cell', () => {
    render(
        <Cell
            type={PICTURES.NONE}
            tour={1}
            isAnswerTour={false}
            isHeader={false}
            src='pivo.mp3'
        />)
  })
})

describe('answer cell', () => {

  test('sound cell', () => {
    render(
        <Cell
            type={PICTURES.SOUND_ICON}
            tour={1}
            isAnswerTour={true}
            isHeader={false}
            src='pivo.mp3'
        />
    )

    const element = screen.getByText(/00:00/i)
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(/00:00/i);
  })

  test('google translate', () => {
    render(
        <Cell
            type={PICTURES.GOOGLE_TRANSLATE}
            tour={1}
            isAnswerTour={true}
            isHeader={false}
            src='pivo.mp3'
        />
    )
  })

});


describe('Final text cell', () => {
  test('final text cell', () => {
    render(
        <FinalTextCell className="cell headerCell finalTextCell">text</FinalTextCell>
    )
    const finalTextCell = screen.getByTestId(/finaltextcell/i);
    expect(finalTextCell).toBeInTheDocument();
    expect(finalTextCell).toHaveTextContent(/show/i);
    fireEvent.click(finalTextCell)
    screen.debug()
    expect(finalTextCell).toHaveTextContent(/text/i)
  })

  test('final audio cell', () => {
    render(<FinalAudioCell isAnswerTour={false} src='pivo.mp3'/>)
    screen.debug()

    const element = screen.getByText(/00:00/i)
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(/00:00/i);

    const finalTourTable = screen.queryByTestId('finaltourtable');
    expect(finalTourTable).not.toBeInTheDocument();

  })

  test('final answer audio cell', () => {
    render(<FinalAudioCell isAnswerTour={true} src='pivo.mp3'/>)

    const element = screen.getByText(/00:00/i)
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(/00:00/i);

    const finalTourTable = screen.getByTestId('finaltourtable');
    expect(finalTourTable).toBeInTheDocument();
    expect(finalTourTable).toHaveTextContent('Show');
  })
});


