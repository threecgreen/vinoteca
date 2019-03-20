import * as React from "react";
import { InputField } from "./InputField";
import { nameToId } from "../lib/utils";

type IInputValue = string | number | string[];

export interface IInputProps<T extends IInputValue> {
    name: string;
    value: T;
    enabled: boolean;
    className: string;
    onChange: (val: string) => void;
    inputType?: string;
    active?: boolean;
    step?: string;
    max?: number;
    min?: number;
    s?: number;
    m?: number;
    l?: number;
}

/**
 * A generic form input that should always be used within another input component
 * that holds state.
 */
export class Input<U extends IInputValue> extends React.Component<IInputProps<U>> {
    public static defaultProps = {
        enabled: true,
    };

    public render() {
        const id = nameToId(this.props.name);
        return <InputField s={ this.props.s } m={ this.props.m } l={ this.props.l }>
            <input id={ id } name={ id } type={ this.props.inputType }
                   className={ this.props.className } value={ this.props.value }
                   step={ this.props.step } min={ this.props.min } max={ this.props.max }
                   onChange={ (e) => this.props.onChange(e.target.value) } >
            </input>
            <label className={ this.props.active ? "active" : "" } htmlFor={ id }>
                { this.props.name }
            </label>
        </InputField>;
    }
}
