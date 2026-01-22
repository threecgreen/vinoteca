import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from "@headlessui/react";
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
                    <ListboxButton className="w-full py-2 bg-transparent border-0 border-b border-gray-300
                        text-left cursor-pointer focus:outline-none focus:border-b-2 focus:border-wine-green
                        flex items-center justify-between">
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
                        <ListboxOptions className="absolute z-50 mt-1 max-h-60 w-full overflow-auto
                            rounded-sm bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                            {props.options.map((option) => (
                                <ListboxOption
                                    key={option.value}
                                    value={option.value}
                                    disabled={option.disabled}
                                    className="relative cursor-pointer select-none py-2 px-4
                                        data-[focus]:bg-wine-red data-[focus]:text-white
                                        data-[selected]:font-medium data-[disabled]:text-gray-300
                                        data-[disabled]:cursor-not-allowed"
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
