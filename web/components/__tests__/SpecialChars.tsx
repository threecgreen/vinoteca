import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { SpecialCharPicker } from "../SpecialChars";

const setup = () => {
    const mockOnClick = jest.fn();
    render(<SpecialCharPicker onClick={ mockOnClick } />);
    return { mockOnClick };
};

test("Clicking button should trigger onClick", () => {
    const { mockOnClick } = setup();
    const button = screen.getByText("è");
    fireEvent.mouseDown(button);
    expect(mockOnClick).toBeCalledTimes(1);
    expect(mockOnClick).toBeCalledWith("è");
});

test("Shift button changes to uppercase and back to lowercase", () => {
    const { mockOnClick } = setup();
    const shiftBtn = screen.getByText("↑");
    expect(screen.queryByText("Ñ")).toBeFalsy();
    fireEvent.mouseDown(shiftBtn);
    expect(screen.queryByText("Ñ")).toBeTruthy();
    expect(mockOnClick).toBeCalledTimes(0);
    fireEvent.mouseDown(shiftBtn);
    expect(mockOnClick).toBeCalledTimes(0);
    expect(screen.getByText("ñ")).toBeTruthy();
});
