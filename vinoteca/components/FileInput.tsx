import React from "react";
import { nameToId } from "../lib/utils";

interface IProps {
    name: string;
    onChange: (files: File | null) => void;
}

export const FileInput: React.FC<IProps> = ({name, onChange}) => {
    const id = nameToId(name);

    // TODO: hint file extensions
    return (
        <>
            <div className="file-field input-field col s12 l6">
                <div className="btn yellow darken-2">
                    <span>{ name }</span>
                    <input type="file"
                        name={ id }
                        id={ id }
                        onChange={ (e) => onChange(e.target.files?.item(0) ?? null) }
                    />
                </div>
                <div className="file-path-wrapper">
                    <input type="text" className="file-path validate" />
                </div>
            </div>
        </>
    );
};
FileInput.displayName = "FileInput";
