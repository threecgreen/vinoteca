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
}

export const TextInput: React.FC<ITextProps> = (props) => {
    const [timeoutId, setTimeoutId] = React.useState<number>();
    const [timestamp, _] = React.useState(new Date());
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
                    className=""
                    inputFieldClassName={ `${props.className} flex-grow` }
                    inputRef={ inputRef }
                    active={ Boolean(props.value) }
                />
                { isActive && <Btn onClick={ onShowPicker }
                    noRbtn={ true }
                    classes={ ["green-bg", "overlap", "btn-small"] }
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
            className={ `${props.className} validate`}
            required={ true }
            helperTexts={ {success: "", error: "E-mail is required"} }
        />
    );
}
EmailInput.displayName = "EmailInput";

export const PasswordInput: React.FC<ISimpleProps> = (props) => {
    return (
        <SimpleTextInput type="password"
            {...props}
            className={ `${props.className} validate`}
            required={ true }
            helperTexts={ {success: "", error: "Password is required"} }
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
    helperTexts: {success: string, error: string};
}

const SimpleTextInput: React.FC<IIntSimpleProps> = (props) => {
    return (
        <Input inputType={ props.type }
            name={ props.name }
            value={ props.value }
            enabled={ props.enabled }
            onChange={ props.onChange }
            className={ props.className }
            s={ props.s } m={ props.m } l={ props.l }
            active={ Boolean(props.value) }
            required={ props.required }
            helperTexts={ props.helperTexts }
        />
    );
}
SimpleTextInput.displayName = "SimpleTextInput";


