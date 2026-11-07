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

test("Case toggle switches between lowercase and uppercase", () => {
    const { mockOnClick } = setup();
    const lower = screen.getByRole("button", { name: "abc" });
    const upper = screen.getByRole("button", { name: "ABC" });
    expect(lower).toHaveAttribute("aria-pressed", "true");
    expect(screen.queryByText("Ñ")).toBeFalsy();

    fireEvent.click(upper);
    expect(upper).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByText("Ñ")).toBeTruthy();

    fireEvent.click(lower);
    expect(screen.getByText("ñ")).toBeTruthy();
    expect(mockOnClick).toBeCalledTimes(0);
});
