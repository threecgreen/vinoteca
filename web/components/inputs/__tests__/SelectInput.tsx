import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { SelectInput } from "../SelectInput";

// jsdom lacks ResizeObserver, which the anchored options use to track the button.
global.ResizeObserver = class {
    public observe = jest.fn();
    public unobserve = jest.fn();
    public disconnect = jest.fn();
};

const options = [
    { value: "", label: "Any" },
    { value: "red", label: "Red" },
];

test("Options render outside an overflow-clipping ancestor", async () => {
    const onChange = jest.fn();
    render(
        <div className="table-wrapper" data-testid="wrapper">
            <SelectInput name="" selection="" onChange={ onChange } options={ options } />
        </div>,
    );

    fireEvent.click(screen.getByRole("button"));
    const listbox = await screen.findByRole("listbox");
    expect(screen.getByTestId("wrapper")).not.toContainElement(listbox);

    fireEvent.click(screen.getByRole("option", { name: "Red" }));
    expect(onChange).toHaveBeenCalledWith("red");
});
