import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { Autocomplete } from "../Autocomplete";

const completions: Record<string, string | null> = {
    "Château Margaux": null,
    "Chateau Montelena": null,
    "Ridge": null,
};

const Harness: React.FC<{
    initValue?: string;
    required?: boolean;
    completions?: Record<string, string | null>;
    onSubmit?: () => void;
}> = (props) => {
    const [value, setValue] = React.useState(props.initValue ?? "");
    return (
        <form onSubmit={ (e) => { e.preventDefault(); props.onSubmit?.(); } }>
            <Autocomplete name="Producer"
                value={ value }
                onChange={ setValue }
                completions={ props.completions ?? completions }
                required={ props.required }
            />
            <button type="submit">Save</button>
        </form>
    );
};

const setup = (props: React.ComponentProps<typeof Harness> = {}) => {
    render(<Harness { ...props } />);
    return screen.getByRole("combobox") as HTMLInputElement;
};

test("label focuses the input", () => {
    const input = setup();
    expect(screen.getByLabelText(/Producer/)).toBe(input);
    expect(input.id).toBe("producer");
});

test("typing shows matching suggestions and keeps the typed text", () => {
    const input = setup();
    fireEvent.change(input, { target: { value: "ch" } });
    expect(screen.getAllByRole("option").map((o) => o.textContent))
        .toEqual(["Château Margaux", "Chateau Montelena"]);
    expect(input.value).toBe("ch");
});

test("Enter with no highlight keeps the typed text and lets the form submit", () => {
    const onSubmit = jest.fn();
    const input = setup({ onSubmit });
    fireEvent.change(input, { target: { value: "Chat" } });
    const notPrevented = fireEvent.keyDown(input, { key: "Enter" });
    expect(notPrevented).toBe(true);
    expect(input.value).toBe("Chat");
    expect(screen.queryByRole("listbox")).toBeNull();
    fireEvent.submit(input.closest("form") as HTMLFormElement);
    expect(onSubmit).toHaveBeenCalledTimes(1);
});

test("Tab with no highlight keeps the typed text", () => {
    const input = setup();
    fireEvent.change(input, { target: { value: "Chat" } });
    fireEvent.keyDown(input, { key: "Tab" });
    fireEvent.blur(input);
    expect(input.value).toBe("Chat");
    expect(screen.queryByRole("listbox")).toBeNull();
});

test("arrow-down then Enter selects the highlighted suggestion", () => {
    const input = setup();
    fireEvent.change(input, { target: { value: "chateau" } });
    fireEvent.keyDown(input, { key: "ArrowDown" });
    fireEvent.keyDown(input, { key: "ArrowDown" });
    expect(input.getAttribute("aria-activedescendant"))
        .toBe(screen.getByRole("option", { name: "Chateau Montelena" }).id);
    const notPrevented = fireEvent.keyDown(input, { key: "Enter" });
    expect(notPrevented).toBe(false);
    expect(input.value).toBe("Chateau Montelena");
    expect(screen.queryByRole("listbox")).toBeNull();
});

test("arrow-down then Tab selects the highlighted suggestion", () => {
    const input = setup();
    fireEvent.change(input, { target: { value: "ri" } });
    fireEvent.keyDown(input, { key: "ArrowDown" });
    fireEvent.keyDown(input, { key: "Tab" });
    expect(input.value).toBe("Ridge");
});

test("clicking a suggestion selects it", () => {
    const input = setup();
    fireEvent.change(input, { target: { value: "ri" } });
    fireEvent.click(screen.getByRole("option", { name: "Ridge" }));
    expect(input.value).toBe("Ridge");
    expect(screen.queryByRole("listbox")).toBeNull();
});

test("special character picker inserts at the caret", async () => {
    const input = setup({ initValue: "Chteau" });
    fireEvent.focus(input);
    fireEvent.click(screen.getByText("ñ"));
    input.setSelectionRange(2, 2);
    fireEvent.mouseDown(screen.getByText("â"));
    await waitFor(() => expect(input.value).toBe("Château"));
});

test("required blocks submit while empty", () => {
    const onSubmit = jest.fn();
    const input = setup({ required: true, onSubmit });
    expect(input).toBeRequired();
    fireEvent.click(screen.getByText("Save"));
    expect(onSubmit).not.toHaveBeenCalled();
    expect(document.querySelector(".helper-text")).toHaveAttribute("data-error",
                                                                     "Producer is required");
    fireEvent.change(input, { target: { value: "Ridge" } });
    fireEvent.click(screen.getByText("Save"));
    expect(onSubmit).toHaveBeenCalledTimes(1);
});

test("suggestions show the completion icon when one is set", () => {
    const input = setup({ completions: { France: "/static/img/flags/France.svg", Italy: null } });
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.keyDown(input, { key: "ArrowDown" });
    const images = Array.from(screen.getByRole("listbox").querySelectorAll("img"));
    expect(images.map((img) => img.getAttribute("src"))).toEqual(["/static/img/flags/France.svg"]);
});
