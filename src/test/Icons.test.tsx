import {fireEvent, render, screen} from "@testing-library/react";
import SOUND_ICON from "../icons/components/SOUND_ICON";
import {COLORS} from "../components/Table/Cell/utils";
import GOOGLE_TRANSLATE_ICON from "../icons/components/GOOGLE_TRANSLATE_ICON";
import GALLERY_ICON from "../icons/components/GALLERY_ICON";

describe('Icons', () => {
  test('sound icon black', () => {
    render(
        <SOUND_ICON color={COLORS.BLACK} innerKey='src' />
    )
    const icon = screen.getByTestId('icon');

    let clicked = screen.queryByTestId('clicked');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('fill', 'black');
    expect(clicked).not.toBeInTheDocument();
    fireEvent.click(icon);
    clicked = screen.getByTestId('clicked');
    expect(clicked).toBeInTheDocument();
  })

  test('sound icon red', () => {
    render(
        <SOUND_ICON color={COLORS.RED} innerKey='src' />
    )
    const icon = screen.getByTestId('icon');

    let clicked = screen.queryByTestId('clicked');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('fill', 'red');
    expect(clicked).not.toBeInTheDocument();
    fireEvent.click(icon);
    clicked = screen.getByTestId('clicked');
    expect(clicked).toBeInTheDocument();
  })

  test('google icon', () => {
    render(
        <GOOGLE_TRANSLATE_ICON color={COLORS.BLACK} innerKey='src' />
    )
    const icon = screen.getByTestId('icon');

    let clicked = screen.queryByTestId('clicked');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('fill', 'black');
    expect(clicked).not.toBeInTheDocument();
    fireEvent.click(icon);
    clicked = screen.getByTestId('clicked');
    expect(clicked).toBeInTheDocument();
  })

  test('google icon red', () => {
    render(
        <GOOGLE_TRANSLATE_ICON color={COLORS.RED} innerKey='src' />
    )
    const icon = screen.getByTestId('icon');

    let clicked = screen.queryByTestId('clicked');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('fill', 'red');
    expect(clicked).not.toBeInTheDocument();
    fireEvent.click(icon);
    clicked = screen.getByTestId('clicked');
    expect(clicked).toBeInTheDocument();
  })

  test('gallery icon', () => {
    render(
        <GALLERY_ICON color={COLORS.RED} src='something' innerKey='src' />
    )
    const icon = screen.getByTestId('icon');
    let clicked = screen.queryByTestId('clicked');
    let image = screen.queryByTestId('image');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('fill', 'red');
    expect(clicked).not.toBeInTheDocument();
    expect(image).not.toBeInTheDocument();
    fireEvent.click(icon);
    clicked = screen.getByTestId('clicked');
    image = screen.getByTestId('image');
    expect(clicked).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'something');
  })
});