import * as React from "react";
import { capitalizeFirstLetter } from "../lib/utils";
import { InputField } from "./InputField";

interface ISelectInputProps {
    id: string;
    name: string;
    options: string[];
    initSelection?: string;
    selectText?: string;
    s?: number;
    m?: number;
    l?: number;
}

interface ISelectInputState {
    selection: string;
}

export class SelectInput extends React.Component<ISelectInputProps, ISelectInputState> {
    constructor(props: ISelectInputProps) {
        super(props);
        this.setState({
            selection: this.props.initSelection || "",
        });
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
            <select id={ id } name={ id } onChange={ (e) => this.onChange(e) }>
                { selectText }
                { this.props.options.map((option) => {
                    return (
                        <option value={ option } selected={ option === this.props.initSelection }>
                            { capitalizeFirstLetter(option) }
                        </option>
                    );
                })}
            </select>
            <label htmlFor={ id }>{ this.props.name }</label>
        </InputField>;
    }

    public onChange(e: React.ChangeEvent<HTMLSelectElement>) {
        e.preventDefault();
        this.setState({
            selection: e.target.value,
        });
    }
}
