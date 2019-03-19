import * as React from "react";
import { capitalizeFirstLetter } from "../lib/utils";
import { InputField } from "./InputField";

interface ISelectInputProps {
    id: string;
    name: string;
    options: string[];
    selection: string;
    selectText?: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    s?: number;
    m?: number;
    l?: number;
}

export class SelectInput extends React.Component<ISelectInputProps, {}> {
    constructor(props: ISelectInputProps) {
        super(props);
    }

    public render() {
        const id = this.props.id;
        let selectText: JSX.Element | undefined;
        if (this.props.selectText) {
            selectText = <option value="" disabled selected>
                { this.props.selectText }
            </option>;
        }
        return <InputField s={ this.props.s } m={ this.props.m } l={ this.props.l }>
            <select id={ id } name={ id } onChange={ (e) => this.props.onChange(e) }>
                { selectText }
                { this.props.options.map((option) => {
                    return (
                        <option value={ option } selected={ option === this.props.selection }>
                            { capitalizeFirstLetter(option) }
                        </option>
                    );
                })}
            </select>
            <label htmlFor={ id }>{ this.props.name }</label>
        </InputField>;
    }
}
