import {
    Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition,
} from "@headlessui/react";
import { nameToId } from "lib/component_utils";
import React, { Fragment } from "react";
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
                <div className="relative">
                    <ListboxButton className="select-button">
                        <span className={selectedOption?.value ? "" : "text-gray-400"}>
                            {selectedOption?.label || "Select..."}
                        </span>
                        <MaterialIcon iconName="arrow_drop_down" className="text-gray-500" />
                    </ListboxButton>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <ListboxOptions className="dropdown-options">
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
                    </Transition>
                </div>
            </Listbox>
        </InputField>
    );
};
SelectInput.displayName = "SelectInput";
