import { nameToId } from "lib/component_utils";
import React, { ReactElement } from "react";
import { IGridProps, InputField } from "../Grid";

type IInputValue = string | number | string[];

export interface IInputProps<T extends IInputValue> extends IGridProps {
    name: string;
    value: T;
    enabled: boolean;
    className: string;
    onChange: (val: string) => void;
    inputRef?: React.Ref<HTMLInputElement>;
    inputType?: string;
    active: boolean;
    step?: string;
    max?: number;
    min?: number;
    inputFieldClassName?: string;
    required: boolean;
    autocomplete?: string;
}

export class Input<U extends IInputValue> extends React.Component<IInputProps<U>> {
    public static defaultProps = {
        enabled: true,
        onChange: (): void => undefined,
        onFocus: (): void => undefined,
        onBlur: (_: React.FocusEvent<HTMLInputElement>): void => undefined,
        required: false,
    };

    public render(): ReactElement {
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
                    step={ this.props.step }
                    min={ this.props.min }
                    max={ this.props.max }
                    required={ this.props.required }
                    autoComplete={ this.props.autocomplete }
                />
                <label className={ this.props.active ? "active" : "" } htmlFor={ id }>
                    { this.props.name }
                </label>
                { helper }
            </InputField>
        );
    }
}
