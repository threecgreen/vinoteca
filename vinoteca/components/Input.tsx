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
    onChangeEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus: () => void;
    onBlur: () => void;
    inputRef?: React.Ref<HTMLInputElement>;
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
        onChange: () => undefined,
        onChangeEvent: (_: React.ChangeEvent<HTMLInputElement>) => undefined,
        onFocus: () => undefined,
        onBlur: (_: React.FocusEvent<HTMLInputElement>) => undefined,
    };

    public render() {
        const id = nameToId(this.props.name);
        return (
            <InputField s={ this.props.s } m={ this.props.m } l={ this.props.l }>
                <input id={ id }
                    name={ id }
                    className={ this.props.className }
                    ref={ this.props.inputRef }
                    type={ this.props.inputType }
                    disabled={ !this.props.enabled }
                    value={ this.props.value }
                    onChange={ (e) => this.onChange(e) }
                    onBlur={ this.props.onBlur }
                    onFocus={ this.props.onFocus }
                    step={ this.props.step }
                    min={ this.props.min }
                    max={ this.props.max }
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

    public onChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.props.onChangeEvent(e);
        this.props.onChange(e.target.value);
    }
}

