import {MemoryRouter} from "react-router-dom";
import {render, screen} from "@testing-library/react";
import Root from "../routes/Root";
import Menu from "../routes/Menu";
import React from "react";
import {FinalPage} from "../routes/FinalPage";
import TablePage from "../routes/TablePage";
import Header from "../components/Header";

describe('routes test', () => {
  test('root test', ()=> {
    render(
        <MemoryRouter>
          <Root/>
        </MemoryRouter>
    )
    const root = screen.getByTestId('root')
    expect(root).toBeInTheDocument();
    expect(root).toHaveTextContent(/1 тур/i);
    expect(root).toHaveTextContent(/1 тур ответы/i);
    expect(root).toHaveTextContent(/2 тур/i);
    expect(root).toHaveTextContent(/2 тур ответы/i);
    expect(root).toHaveTextContent(/3 тур/i);
    expect(root).toHaveTextContent(/3 тур ответы/i);
    expect(root).toHaveTextContent(/финал/i);
    expect(root).toHaveTextContent(/финал ответы/i);
  })

  test('final page', () => {
    render(
        <MemoryRouter>
          <FinalPage isAnswer={false}/>
        </MemoryRouter>
    );
    const page = screen.getByTestId('finalpage');
    expect(page).toBeInTheDocument();
    expect(page).toHaveTextContent(/тур 4/i);
    expect(page).toHaveTextContent(/финал/i);
    expect(page).toHaveTextContent(/ответы/i);
    expect(page).toHaveTextContent(/3 тур/i);
    expect(page).toHaveTextContent(/меню/i);
    expect(page).toHaveTextContent(/00:00/i);
  })

  test('final answer page', () => {
    render(
        <MemoryRouter>
          <FinalPage isAnswer={true}/>
        </MemoryRouter>
    );
    const page = screen.getByTestId('finalpage');
    expect(page).toBeInTheDocument();
    expect(page).toHaveTextContent(/тур 4/i);
    expect(page).toHaveTextContent(/финал/i);
    expect(page).toHaveTextContent(/вопросы/i);
    expect(page).toHaveTextContent(/3 тур/i);
    expect(page).toHaveTextContent(/меню/i);
    expect(page).toHaveTextContent(/show/i);
  })

  test('render TablePage', () => {
    render(
        <MemoryRouter>
          <TablePage tourIndex={0} isAnswer={false}/>
        </MemoryRouter>
    )
    const tablePage = screen.getByTestId('tablepage');
    expect(tablePage).toBeInTheDocument();
    expect(tablePage).toHaveTextContent(/меню/i);
    expect(tablePage).toHaveTextContent(/2 тур/i);
    expect(tablePage).toHaveTextContent(/ответы/i);
    expect(tablePage).toHaveTextContent(/Категория/i);
  })
});

describe('menu tests', () => {
  test('tour 1', () => {
    render(
        <MemoryRouter>
          <Menu tourIndex={0}/>
        </MemoryRouter>
    );
    const element = screen.getByTestId('menu');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(/меню/i);
    expect(element).toHaveTextContent(/2 тур/i);
    expect(element).toHaveTextContent(/ответы/i);
  })

  test('tour 2', () => {
    render(
        <MemoryRouter>
          <Menu tourIndex={1}/>
        </MemoryRouter>
    );
    const element = screen.getByTestId('menu');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(/меню/i);
    expect(element).toHaveTextContent(/3 тур/i);
    expect(element).toHaveTextContent(/1 тур/i);
    expect(element).toHaveTextContent(/ответы/i);
  })

  test('tour 4', () => {
    render(
        <MemoryRouter>
          <Menu tourIndex={3}/>
        </MemoryRouter>
    );
    const element = screen.getByTestId('menu');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(/меню/i);
    expect(element).toHaveTextContent(/3 тур/i);
    expect(element).toHaveTextContent(/ответы/i);
  })
});

describe('header', function () {
  test('1 tour', () => {
    render(
        <Header tourIndex={0} />
    )
    const element = screen.getByTestId('header');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(/тур 1/i)
    expect(element).toHaveTextContent(/Отгадай название/i)
  })

  test('2 tour', () => {
    render(
        <Header tourIndex={1} />
    )
    const element = screen.getByTestId('header');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(/тур 2/i)
    expect(element).toHaveTextContent(/Отгадай исполнителя/i)
  })

  test('3 tour', () => {
    render(
        <Header tourIndex={2} />
    )
    const element = screen.getByTestId('header');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(/тур 3/i)
    expect(element).toHaveTextContent(/Отгадай название и исполнителя/i)
  })

  test('4 tour', () => {
    render(
        <Header tourIndex={3} />
    )
    const element = screen.getByTestId('header');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(/тур 4/i)
    expect(element).toHaveTextContent(/Финал/i)
  })

});

