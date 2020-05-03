import React from "react";
import { nameToId } from "../../lib/utils";
import { InputField } from "../Grid";

type IInputValue = string | number | string[];

export interface IInputProps<T extends IInputValue> {
    name: string;
    value: T;
    enabled: boolean;
    className: string;
    onChange: (val: string) => void;
    onFocus: () => void;
    onBlur: () => void;
    inputRef?: React.Ref<HTMLInputElement>;
    inputType?: string;
    active: boolean;
    step?: string;
    max?: number;
    min?: number;
    s?: number;
    m?: number;
    l?: number;
    inputFieldClassName?: string;
    required: boolean;
}

export class Input<U extends IInputValue> extends React.Component<IInputProps<U>> {
    public static defaultProps = {
        enabled: true,
        onChange: () => undefined,
        onFocus: () => undefined,
        onBlur: (_: React.FocusEvent<HTMLInputElement>) => undefined,
        required: false,
    };

    public render() {
        const id = nameToId(this.props.name);
        const helper = this.props.required
            ? <span className="helper-text"
                data-error={ `${this.props.name} is required` }
            />
            : null;
        return (
            <InputField s={ this.props.s } m={ this.props.m } l={ this.props.l }
                classes={ [this.props.inputFieldClassName ?? ""] }
            >
                <input id={ id }
                    name={ id }
                    className={ this.props.className }
                    ref={ this.props.inputRef }
                    type={ this.props.inputType }
                    disabled={ !this.props.enabled }
                    value={ this.props.value }
                    onChange={ (e) => this.props.onChange(e.target.value) }
                    onBlur={ this.props.onBlur }
                    onFocus={ this.props.onFocus }
                    step={ this.props.step }
                    min={ this.props.min }
                    max={ this.props.max }
                    required={ this.props.required }
                />
                <label className={ this.props.active ? "active" : "" } htmlFor={ id }>
                    { this.props.name }
                </label>
                { helper }
            </InputField>
        );
    }
}
