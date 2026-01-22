import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

interface IAutocompleteProps {
    name: string;
    value: string;
    onChange: (value: string) => void;
    completions: Record<string, string | null>;
    placeholder?: string;
    className?: string;
    inputRef?: React.MutableRefObject<HTMLInputElement>;
}

export const Autocomplete: React.FC<IAutocompleteProps> = ({
    name,
    value,
    onChange,
    completions,
    placeholder,
    className,
    inputRef,
}) => {
    const [query, setQuery] = React.useState("");

    const options = Object.keys(completions);
    const filteredOptions = query === ""
        ? options.slice(0, 10)
        : options
            .filter((opt) => opt.toLowerCase().includes(query.toLowerCase()))
            .slice(0, 10);

    const handleChange = (selectedValue: string | null) => {
        if (selectedValue !== null) {
            onChange(selectedValue);
        }
    };

    return (
        <Combobox value={value} onChange={handleChange}>
            <div className="relative">
                <ComboboxInput
                    ref={inputRef}
                    className={`w-full py-2 bg-transparent border-0 border-b border-gray-300
                        focus:outline-none focus:border-b-2 focus:border-wine-green
                        ${className ?? ""}`}
                    displayValue={(val: string) => val}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        onChange(e.target.value);
                    }}
                    placeholder={placeholder}
                    name={name}
                    autoComplete="off"
                />
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery("")}
                >
                    <ComboboxOptions className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-sm bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                        {filteredOptions.length === 0 && query !== "" ? (
                            <div className="relative cursor-default select-none px-4 py-2 text-gray-500">
                                No matches found.
                            </div>
                        ) : (
                            filteredOptions.map((option) => (
                                <ComboboxOption
                                    key={option}
                                    value={option}
                                    className="relative cursor-pointer select-none py-2 px-4
                                        data-[focus]:bg-wine-red data-[focus]:text-white
                                        data-[selected]:font-medium"
                                >
                                    {option}
                                </ComboboxOption>
                            ))
                        )}
                    </ComboboxOptions>
                </Transition>
            </div>
        </Combobox>
    );
};
Autocomplete.displayName = "Autocomplete";
