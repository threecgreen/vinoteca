import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { FixedActionList } from "../FixedActionList";

const setup = () => {
    render(
        <div>
            <p>outside</p>
            <FixedActionList>
                <button>edit</button>
            </FixedActionList>
        </div>
    );
    fireEvent.click(screen.getByText("menu"));
};

test("Menu button opens the action list", () => {
    setup();
    expect(screen.getByRole("button", { name: "edit" })).toBeInTheDocument();
});

test("Clicking inside the list keeps it open", () => {
    setup();
    fireEvent.click(screen.getByRole("button", { name: "edit" }));
    expect(screen.getByRole("button", { name: "edit" })).toBeInTheDocument();
});

test("Clicking outside closes the action list", () => {
    setup();
    fireEvent.click(screen.getByText("outside"));
    expect(screen.queryByRole("button", { name: "edit" })).toBeNull();
});

test("Escape closes the action list", () => {
    setup();
    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("button", { name: "edit" })).toBeNull();
});
