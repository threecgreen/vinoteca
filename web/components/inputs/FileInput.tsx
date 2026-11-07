import { nameToId } from "lib/component_utils";
import React from "react";
import { Btn } from "../Buttons";
import { InputField } from "../Grid";

interface IProps {
    name: string;
    onChange: (files: File | null) => void;
    fileName?: string;
}

export const FileInput: React.FC<IProps> = ({name, onChange, fileName}) => {
    const id = nameToId(name);

    const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    const clear = () => {
        inputRef.current.value = "";
        onChange(null);
    };

    return (
        <InputField s={ 12 } l={ 6 }>
            <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
                <label htmlFor={ id }
                    className="btn yellow-bg cursor-pointer whitespace-nowrap"
                >
                    { name }
                    <input type="file"
                        accept="image/*"
                        name={ id }
                        id={ id }
                        className="hidden"
                        onChange={ (e) => onChange(e.target.files?.item(0) ?? null) }
                        ref={ inputRef }
                    />
                </label>
                <div className="flex-grow min-w-0 flex items-center gap-2">
                    <span className="flex-grow py-2 border-b border-gray-300 text-gray-600">
                        { fileName || "No file selected" }
                    </span>
                    <Btn onClick={ clear }
                        classes={ ["red-bg"] }
                        disabled={ !fileName }
                    >
                        Clear
                    </Btn>
                </div>
            </div>
        </InputField>
    );
};
FileInput.displayName = "FileInput";
