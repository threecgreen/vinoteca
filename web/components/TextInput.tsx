import React from "react";
import { Input } from "./Input";
import { SpecialChars } from "./SpecialChars";

interface IProps {
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

export const TextInput: React.FC<IProps> = (props) => {
    const [timestamp, _] = React.useState(new Date());
    const [isActive, setIsActive] = React.useState(false);
    const inputRef = props.inputRef ?? React.useRef() as React.MutableRefObject<HTMLInputElement>;

    const onSpecialCharClick = (char: string) => {
        setIsActive(true);
        const position = inputRef.current?.selectionStart ?? NaN;
        props.onChange(SpecialChars.insertCharAt(props.value, char, position))
        setTimeout(() => inputRef.current.setSelectionRange(position + 1, position + 1), 10);
    };

    const onBlur = () => {
        const now = new Date();
        // @ts-ignore
        if (now - timestamp > 100) {
            setIsActive(false);
        }
        props.onBlur?.();
    };

    const onChange = (val: string) => {
        setIsActive(true);
        props.onChange(val);
    }

    const onFocus = () => {
        setIsActive(true);
        props.onFocus?.();
    }

    return (
        <>
            <Input inputType="text"
                name={ props.name }
                value={ props.value }
                enabled={ props.enabled }
                onChange={ (val) => onChange(val) }
                onBlur={ onBlur }
                onFocus={ onFocus }
                className={ props.className }
                s={ props.s } m={ props.m } l={ props.l }
                inputRef={ inputRef }
            />
            <SpecialChars
                classes={ ["inline-block"] }
                onClick={ (c) => onSpecialCharClick(c) }
                display={ isActive }
            />
        </>
    );
}
TextInput.displayName = "TextInput";
