import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

import React from "react";
import { render, fireEvent, screen, waitForElement, getByTestId } from "@testing-library/react";
import { TextInput } from "../TextInput";

test("When the text input is in focus, special character buttons should appear", async () => {
    render(<TextInput name="test input"
        value=""
        className=""
        onChange={ () => {} }
    />);
    expect(screen.queryByDisplayValue("ñ")).toBeFalsy();
    fireEvent.focus(screen.getByLabelText("test input"));
    await screen.findByText("ñ");
    expect(screen.queryByText("ñ")).toBeTruthy();
})
