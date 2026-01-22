import React from "react";
import { Btn } from "../Buttons";
import { IGridProps } from "../Grid";
import { insertCharAt, SpecialCharPicker } from "../SpecialChars";
import { Input } from "./Input";

interface ITextProps extends IGridProps {
    name: string;
    value: string;
    enabled?: boolean;
    onChange: (val: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    className: string;
    inputRef?: React.MutableRefObject<HTMLInputElement>;
    required?: boolean;
    autocomplete?: string;
    useCol?: boolean;
}

export const TextInput: React.FC<ITextProps> = (props) => {
    const useCol = props.useCol ?? true;

    const [timeoutId, setTimeoutId] = React.useState<ReturnType<typeof setTimeout>>();
    const [isActive, setIsActive] = React.useState(false);
    // Can't call useRef conditionally
    const ownRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const inputRef = props.inputRef ?? ownRef;
    React.useEffect(() => {
        ownRef.current = ownRef.current;
    }, [inputRef])

    const [showPicker, setShowPicker] = React.useState(false);

    const onSpecialCharClick = (char: string) => {
        clearTimeout(timeoutId);
        setIsActive(true);
        const position = inputRef.current?.selectionStart ?? props.value.length - 1;
        props.onChange(insertCharAt(props.value, char, position));
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
    };

    const onFocus = () => {
        clearTimeout(timeoutId);
        setIsActive(true);
        props.onFocus?.();
    };

    const onShowPicker = () => {
        clearTimeout(timeoutId);
        setShowPicker(!showPicker);
    };

    const gridClasses = useCol ? [
        "col",
        props.s ? `s${props.s}` : "",
        props.m ? `m${props.m}` : "",
        props.l ? `l${props.l}` : "",
    ].filter(Boolean).join(" ") : "";

    return (
        <div onFocus={ (_) => onFocus() }
            onBlur={ (_) => onBlur() }
            className={ gridClasses }
        >
            <div className="flex">
                <Input inputType="text"
                    name={ props.name }
                    value={ props.value }
                    enabled={ props.enabled }
                    onChange={ (val) => onChange(val) }
                    className={ `${props.className} ${props.required ? "validate" : ""}`  }
                    inputFieldClassName="flex-grow no-col"
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
            </div>
            { showPicker && <SpecialCharPicker
                onClick={ onSpecialCharClick }
            /> }
         </div>
    );
};
TextInput.displayName = "TextInput";

interface ISimpleProps extends IGridProps {
    name: string;
    value: string;
    enabled?: boolean;
    onChange: (val: string) => void;
    className?: string;
}

export const EmailInput: React.FC<ISimpleProps> = (props) => {
    return (
        <SimpleTextInput type="email"
            {...props}
            required={ true }
            autocomplete="email"
        />
    );
};
EmailInput.displayName = "EmailInput";

export const PasswordInput: React.FC<ISimpleProps & {autocomplete: string}> = (props) => {
    return (
        <SimpleTextInput type="password"
            {...props}
            required={ true }
        />
    );
};
PasswordInput.displayName = "PasswordInput";

interface IIntSimpleProps {
    name: string;
    value: string;
    enabled?: boolean;
    onChange: (val: string) => void;
    className?: string;
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
        className={ `${props.className ?? ""} ${props.required ? "validate" : ""}`  }
        active={ Boolean(props.value) }
    />
);
SimpleTextInput.displayName = "SimpleTextInput";
