import { nameToId } from "lib/utils";
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
        <InputField s={ 12 } l={ 6 }
            classes={ ["file-field", "col"] }
        >
            <div className="btn yellow-bg">
                <span>{ name }</span>
                <input type="file"
                    accept="image/*"
                    name={ id }
                    id={ id }
                    onChange={ (e) => onChange(e.target.files?.item(0) ?? null) }
                />
            </div>
            <div className="file-path-wrapper">
                <input type="text"
                    // Shorten so button fits
                    style={ {width: "calc(100% - 95px"} }
                    className="file-path validate inline"
                    defaultValue={ fileName }
                    ref={ inputRef }
                />
                <Btn onClick={ clear }
                    classes={ ["red-bg", "right"] }
                >
                    Clear
                </Btn>
            </div>
        </InputField>
    );
};
FileInput.displayName = "FileInput";
