import * as React from "react";
import * as M from "materialize-css";
import { nameToId } from "../lib/utils";
import { InputField } from "./Grid";

type IInputValue = string | number | string[];

export interface IInputProps<T extends IInputValue> {
    name: string;
    value: T;
    enabled: boolean;
    className: string;
    onChange: (val: string) => void;
    onFocus: () => void;
    onBlur: () => void;
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
        onFocus: () => undefined,
        onBlur: () => undefined,
    };

    public render() {
        const id = nameToId(this.props.name);
        return (
            <InputField s={ this.props.s } m={ this.props.m } l={ this.props.l }>
                <input id={ id }
                    name={ id }
                    type={ this.props.inputType }
                    className={ this.props.className }
                    value={ this.props.value }
                    disabled={ !this.props.enabled }
                    step={ this.props.step } min={ this.props.min } max={ this.props.max }
                    onChange={ (e) => this.props.onChange(e.target.value) }
                    onFocus={ () => this.props.onFocus() }
                    onBlur={ () => this.props.onBlur() }
                >
                </input>
                <label className={ this.props.active ? "active" : "" } htmlFor={ id }>
                    { this.props.name }
                </label>
            </InputField>
        );
    }

    public componentDidUpdate() {
        M.updateTextFields();
    }
}

