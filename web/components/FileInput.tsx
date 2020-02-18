import React from "react";
import { nameToId } from "../lib/utils";

interface IProps {
    name: string;
    onChange: (files: File | null) => void;
    fileName?: string;
}

export const FileInput: React.FC<IProps> = ({name, onChange, fileName}) => {
    const id = nameToId(name);

    return (
        <>
            <div className="file-field input-field col s12 l6">
                <div className="btn yellow darken-2">
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
                        className="file-path validate"
                        defaultValue={ fileName }
                    />
                </div>
            </div>
        </>
    );
};
FileInput.displayName = "FileInput";
