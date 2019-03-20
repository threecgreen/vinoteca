import * as React from "react";
import { FormSelect } from "materialize-css";
import { capitalizeFirstLetter, nameToId } from "../lib/utils";
import { InputField } from "./InputField";

interface ISelectInputProps {
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

export class StatelessSelectInput extends React.Component<ISelectInputProps> {
    constructor(props: ISelectInputProps) {
        super(props);
    }

    get id(): string {
        return nameToId(this.props.name);
    }

    public render() {
        let selectText: JSX.Element | undefined;
        if (this.props.selectText) {
            selectText = <option value="" disabled>
                { this.props.selectText }
            </option>;
        }
        return <InputField s={ this.props.s } m={ this.props.m } l={ this.props.l }>
            <select id={ this.id }
                name={ this.id }
                onChange={ (e) => this.props.onChange(e.target.value) }
                value={ this.props.selection || this.props.selectText }
                ref={ this.props.selectRef }
            >
                { selectText }
                { this.props.options.map((option) => {
                    return (
                        <option value={ option } key={ option }>
                            { capitalizeFirstLetter(option) }
                        </option>
                    );
                })}
            </select>
            <label htmlFor={ this.id }>{ this.props.name }</label>
        </InputField>;
    }
}
