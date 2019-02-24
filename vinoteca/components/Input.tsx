import * as React from "react";
import { InputField } from "./InputField";

type IInputValue = string | number | string[];

export interface IInputProps<T extends IInputValue> {
    id: string;
    name: string;
    value: T;
    enabled: boolean;
    className: string;
    onChange: (val: string) => void;
    inputType?: string;
    step?: string;
    min?: number;
    s?: number;
    m?: number;
    l?: number;
}

/**
 * A generic form input that should always be used within another input component
 * that holds state.
 */
export class Input<U extends IInputValue> extends React.Component<IInputProps<U>, {}> {
    public static defaultProps = {
        enabled: true,
        validate: false,
    };

    constructor(props: IInputProps<U>) {
        super(props);
    }

    public render() {
        const sClass = this.props.s ? `s${this.props.s}` : ``;
        const mClass = this.props.m ? `m${this.props.m}` : ``;
        const lClass = this.props.l ? `l${this.props.l}` : ``;
        const id = this.props.id;
        return <InputField classes={ [sClass, mClass, lClass] }>
            <input id={ id } name={ id } type={ this.props.inputType }
                   className={ this.props.className } value={ this.props.value }
                   step={ this.props.step } min={ this.props.min }
                   onChange={ (e) => this.props.onChange(e.target.value) } >
            </input>
            <label htmlFor={ id }>{ this.props.name }</label>
        </InputField>;
    }
}
