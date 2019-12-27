import * as React from "react";
import { nameToId } from "../lib/utils";

interface IProps {
    name: string;
    fileName?: string;
    onChange: (files: FileList) => void;
}

export const FileInput: React.FC<IProps> = (props) => {
    const id = nameToId(props.name);

    return (
        <>
            <div className="file-field input-field col s12 l6">
                <div className="btn yellow darken-2">
                    <span>{ props.name }</span>
                    <input type="file"
                        name={ id }
                        id={ id }
                        onChange={ (e) => e.target.files }
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
