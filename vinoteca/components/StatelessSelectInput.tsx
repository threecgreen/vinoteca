import * as React from "react";
import { capitalizeFirstLetter, nameToId } from "../lib/utils";
import { InputField } from "./Grid";

interface IStatelessSelectInputProps {
    name: string;
    options: string[];
    selection: string;
    selectText?: string;
    selectRef: React.RefObject<HTMLSelectElement>;
    onChange: (e: string) => void;
    s?: number;
    m?: number;
    l?: number;
}

export const StatelessSelectInput: React.FunctionComponent<IStatelessSelectInputProps> = (props) => {
    const id = nameToId(props.name);
    let selectText: JSX.Element | undefined;
    if (props.selectText) {
        selectText = <option value="" disabled>
            { props.selectText }
        </option>;
    }
    return (
        <InputField s={ props.s } m={ props.m } l={ props.l }>
            <select id={ id }
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
            <label htmlFor={ id }>{ props.name }</label>
        </InputField>
    );
};
