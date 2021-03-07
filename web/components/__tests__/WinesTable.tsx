import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, getAllByRole } from "@testing-library/react";
import React from "react";
import { WinesTable, WinesTableColumn } from "../WinesTable";
import mockWines from "./mock/wines.json";

const setup = (filterTexts?: Map<WinesTableColumn, string>) => {
    const mockOnFilterChange = jest.fn();
    expect(mockWines).toBeInstanceOf(Array);
    const result = render(
        <WinesTable wines={ mockWines}
            filterTexts={ filterTexts }
            onFilterChange={ mockOnFilterChange }
        />);
    return { container: result.container, mockOnFilterChange };
}

test("If no filter texts provided, no filter row is displayed", () => {
    setup();
    const noFilterColumnHeaders = screen.queryAllByRole("columnheader");
    setup(new Map());
    const filterColumnHeaders = screen.queryAllByRole("columnheader");
    expect(filterColumnHeaders).toHaveLength(noFilterColumnHeaders.length * 2);
});

test("Sorting should change order", () => {
    const { container } = setup();
    const tableBody = container.querySelector('tbody');
    expect(tableBody).not.toBeNull();
    const origDataRows = getAllByRole(tableBody!, "row");
    expect(origDataRows).toHaveLength(mockWines.length);
    const origNameAndTypes = origDataRows.map((row) => row.childNodes[2].textContent);
    const colorHeader = screen.getByRole('link', {name: /color/i});

    fireEvent.click(colorHeader);

    const sortedDataRows = getAllByRole(tableBody!, "row");
    expect(sortedDataRows).toHaveLength(origDataRows.length);
    const sortedNameAndTypes = sortedDataRows.map((row) => row.childNodes[2].textContent);

    expect(sortedNameAndTypes.some((snt, i) => snt !== origNameAndTypes[i])).toBeTruthy();
});
