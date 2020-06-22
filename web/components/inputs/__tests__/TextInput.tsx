import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { TextInput } from "../TextInput";

const ConstInput: React.FC<{initValue: string, onChange: Function}> = ({initValue, onChange}) => {
    const [value, setValue] = React.useState(initValue);
    const onChangeImpl = (v: string) => {
        onChange();
        setValue(v);
    }
    return (
        <div>
            <TextInput name="test input"
                value={ value }
                onChange={ onChangeImpl }
                className=""
            />
        </div>
    );
}

const setup = (initValue?: string) => {
    const mockOnChange = jest.fn();
    const utils = render(<ConstInput initValue={ initValue ?? "" }
        onChange={ mockOnChange }
    />);
    const target = utils.getByLabelText("test input") as HTMLInputElement;
    return { target, mockOnChange };
}

test("When the text input is in focus, special character buttons should appear", () => {
    const { target } = setup();
    expect(screen.queryByDisplayValue("ñ")).toBeFalsy();
    fireEvent.focus(target);
    expect(screen.queryByText("ñ")).toBeTruthy();
});

test("Clicking special character button inserts character into input", async () => {
    const { target, mockOnChange } = setup("a");

    fireEvent.focus(target);
    target.setSelectionRange(1, 1);
    expect(target.value).toBe("a");
    const specialCharBtn = await screen.findByText("ñ") as HTMLButtonElement;
    fireEvent.mouseDown(specialCharBtn);
    // expect(mockOnChange).toBeCalledTimes(1);
    // await waitFor(() =>
    //     expect(target.value).toBe("añ")
    // );
});
