import ReactDatePicker from "react-datepicker";
import React from "react";
import { InputField } from "../Grid";

interface IProps {
    date: Date | null;
    name: string;
    onChange: (date: Date | null) => void;
}

export const DateInput: React.FC<IProps> = ({ date, name, onChange }) => {
    return (
        <InputField s={6} l={3}>
            <label htmlFor={name}>{name}</label>
            <ReactDatePicker
                id={name}
                selected={date}
                onChange={onChange}
                maxDate={new Date()}
                dateFormat="MMM dd, yyyy"
                isClearable
                showYearDropdown
                yearDropdownItemNumber={15}
                scrollableYearDropdown
                placeholderText="Select date..."
                className="w-full py-2 bg-transparent border-0 border-b border-gray-300
                    focus:outline-none focus:border-b-2 focus:border-wine-green"
            />
        </InputField>
    );
};
DateInput.displayName = "DateInput";
