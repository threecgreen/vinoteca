import {
    Listbox, ListboxButton, ListboxOption, ListboxOptions,
} from "@headlessui/react";
import { nameToId } from "lib/component_utils";
import React from "react";
import { InputField } from "../Grid";
import { MaterialIcon } from "../MaterialIcon";

interface IOption {
    value: string;
    label: string;
    disabled?: boolean;
}

interface IProps {
    name: string;
    selection: string;
    onChange: (val: string) => void;
    options: IOption[];
    s?: number;
    m?: number;
    l?: number;
}

export const SelectInput: React.FC<IProps> = (props) => {
    const selectedOption = props.options.find(o => o.value === props.selection);

    return (
        <InputField s={props.s} m={props.m} l={props.l}>
            {props.name && (
                <label htmlFor={nameToId(props.name)}>
                    {props.name}
                </label>
            )}
            <Listbox value={props.selection} onChange={props.onChange}>
                <ListboxButton className="select-button">
                    <span className={selectedOption?.value ? "" : "text-gray-400"}>
                        {selectedOption?.label || "Select..."}
                    </span>
                    <MaterialIcon iconName="arrow_drop_down" className="text-gray-500" />
                </ListboxButton>
                <ListboxOptions
                    anchor="bottom start"
                    transition
                    className="dropdown-options dropdown-options-anchored"
                >
                    {props.options.map((option) => (
                        <ListboxOption
                            key={option.value}
                            value={option.value}
                            disabled={option.disabled}
                            className="dropdown-option"
                        >
                            {option.label}
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </Listbox>
        </InputField>
    );
};
SelectInput.displayName = "SelectInput";
