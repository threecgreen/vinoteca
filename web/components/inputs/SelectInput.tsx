import React from "react";
import { capitalizeFirstLetter, nameToId } from "../../lib/utils";
import { InputField } from "../Grid";
import { useViewport } from "../ViewportContext";

interface IProps {
    name: string;
    options: string[];
    selection: string;
    selectText?: string;
    selectRef: React.RefObject<HTMLSelectElement>;
    onChange: (val: string) => void;
    s?: number;
    m?: number;
    l?: number;
}

export const SelectInput: React.FC<IProps> = (props) => {
    const id = nameToId(props.name);
    let selectText: JSX.Element | undefined;
    if (props.selectText) {
        selectText = <option value="" disabled>
            { props.selectText }
        </option>;
    }
    const {width} = useViewport();
    return (
        <InputField s={ props.s } m={ props.m } l={ props.l }
            classes={ ["col"] }
        >
            <select id={ id }
                className={ width <= 600 ? "browser-default" : undefined }
                name={ id }
                onChange={ (e) => props.onChange(e.target.value) }
                value={ props.selection || props.selectText }
                ref={ props.selectRef }
            >
                { selectText }
                { props.options.map((option) => {
                    return (
                        <option value={ option } key={ option }>
                            { capitalizeFirstLetter(option) }
                        </option>
                    );
                })}
            </select>
            { width > 600 && <label htmlFor={ id }>{ props.name }</label> }
        </InputField>
    );
};
