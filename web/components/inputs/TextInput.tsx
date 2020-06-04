import React from "react";
import { Btn } from "../Buttons";
import { Col } from "../Grid";
import { insertCharAt, SpecialCharPicker } from "../SpecialChars";
import { Input } from "./Input";

interface ITextProps {
    name: string;
    value: string;
    enabled?: boolean;
    onChange: (val: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    className: string;
    s?: number;
    m?: number;
    l?: number;
    inputRef?: React.MutableRefObject<HTMLInputElement>;
    required?: boolean;
    autocomplete?: string;
}

export const TextInput: React.FC<ITextProps> = (props) => {
    const [timeoutId, setTimeoutId] = React.useState<number>();
    const [isActive, setIsActive] = React.useState(false);
    const inputRef = props.inputRef ?? React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const [showPicker, setShowPicker] = React.useState(false);

    const onSpecialCharClick = (char: string) => {
        clearTimeout(timeoutId);
        setIsActive(true);
        const position = inputRef.current?.selectionStart ?? NaN;
        props.onChange(insertCharAt(props.value, char, position))
        setTimeout(() => inputRef.current.setSelectionRange(position + 1, position + 1), 10);
    };

    const onBlur = () => {
        setTimeoutId(setTimeout(() => {
            setIsActive(false);
            setShowPicker(false);
        }));
        props.onBlur?.();
    };

    const onChange = (val: string) => {
        setIsActive(true);
        props.onChange(val);
    }

    const onFocus = () => {
        clearTimeout(timeoutId);
        setIsActive(true);
        props.onFocus?.();
    }


    const onShowPicker = () => {
        clearTimeout(timeoutId);
        setShowPicker(!showPicker);
    }

    return (
        <div onFocus={ (_) => onFocus() }
            onBlur={ (_) => onBlur() }
        >
            <Col s={ props.s } m={ props.m} l={ props.l } classes={ ["flex"] }>
                <Input inputType="text"
                    name={ props.name }
                    value={ props.value }
                    enabled={ props.enabled }
                    onChange={ (val) => onChange(val) }
                    className={ `${props.className} ${props.required ? "validate" : ""}`  }
                    inputFieldClassName="flex-grow"
                    inputRef={ inputRef }
                    active={ Boolean(props.value) }
                    required={ props.required }
                    autocomplete={ props.autocomplete }
                />
                { isActive && <Btn onClick={ onShowPicker }
                    noRbtn={ true }
                    classes={ ["green-bg", "overlap", "btn-small", showPicker ? "active" : ""] }
                >
                    ñ
                </Btn> }
            </Col>
            { showPicker && <SpecialCharPicker
                onClick={ (c) => onSpecialCharClick(c) }
            /> }
         </div>
    );
}
TextInput.displayName = "TextInput";

interface ISimpleProps {
    name: string;
    value: string;
    enabled?: boolean;
    onChange: (val: string) => void;
    className: string;
    s?: number;
    m?: number;
    l?: number;
}

export const EmailInput: React.FC<ISimpleProps> = (props) => {
    return (
        <SimpleTextInput type="email"
            {...props}
            required={ true }
            autocomplete="email"
        />
    );
}
EmailInput.displayName = "EmailInput";

export const PasswordInput: React.FC<ISimpleProps & {autocomplete: string}> = (props) => {
    return (
        <SimpleTextInput type="password"
            {...props}
            required={ true }
        />
    );
}
PasswordInput.displayName = "PasswordInput";

interface IIntSimpleProps {
    name: string;
    value: string;
    enabled?: boolean;
    onChange: (val: string) => void;
    className: string;
    s?: number;
    m?: number;
    l?: number;
    type: string;
    required: boolean;
    autocomplete: string;
}

export const SimpleTextInput: React.FC<IIntSimpleProps> = (props) => (
    <Input inputType={ props.type }
        {...props}
        className={ `${props.className} ${props.required ? "validate" : ""}`  }
        active={ Boolean(props.value) }
    />
);
SimpleTextInput.displayName = "SimpleTextInput";
