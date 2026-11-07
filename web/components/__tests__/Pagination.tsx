import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Pagination } from "../Pagination";

const setup = (currentPage: number, pageCount: number) => {
    const mockOnClick = jest.fn();
    render(
        <Pagination currentPage={ currentPage } pageCount={ pageCount } onClick={ mockOnClick } />,
    );
    return { mockOnClick };
};

test("marks only the current page as active", () => {
    setup(2, 3);
    expect(screen.getByText("2")).toHaveAttribute("aria-current", "page");
    expect(screen.getByText("1")).not.toHaveAttribute("aria-current");
    expect(screen.getByText("3")).not.toHaveAttribute("aria-current");
});

test("clicking a page number reports that page", () => {
    const { mockOnClick } = setup(1, 3);
    fireEvent.click(screen.getByText("3"));
    expect(mockOnClick).toHaveBeenCalledWith(3);
});

test("arrows move one page in each direction", () => {
    const { mockOnClick } = setup(2, 3);
    fireEvent.click(screen.getByLabelText("Previous page"));
    fireEvent.click(screen.getByLabelText("Next page"));
    expect(mockOnClick.mock.calls).toEqual([[1], [3]]);
});

test("disabled arrows on a single page do not fire onClick", () => {
    const { mockOnClick } = setup(1, 1);
    const prev = screen.getByLabelText("Previous page");
    const next = screen.getByLabelText("Next page");
    expect(prev).toBeDisabled();
    expect(next).toBeDisabled();
    fireEvent.click(prev);
    fireEvent.click(next);
    expect(mockOnClick).not.toHaveBeenCalled();
});
