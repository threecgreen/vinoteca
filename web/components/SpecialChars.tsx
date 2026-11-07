import React from "react";
import { SpecialCharBtn } from "./SpecialCharBtn";

const LOWERCASE_CHARS = [
    "à",
    "á",
    "â",
    "ã",
    "ä",
    "å",
    "æ",
    "ç",
    "č",
    "è",
    "é",
    "ê",
    "ë",
    "í",
    "î",
    "ï",
    "ñ",
    "ó",
    "ô",
    "õ",
    "ö",
    "ø",
    "œ",
    "š",
    "ù",
    "ú",
    "û",
    "ü",
    "ž",
];

interface IProps {
    onClick: (char: string) => void;
}

export const SpecialCharPicker: React.FC<IProps> = ({onClick}) => {
    const [isUppercase, setIsUppercase] = React.useState(false);
    const chars = isUppercase
        ? LOWERCASE_CHARS.map((char) => char.toUpperCase())
        : LOWERCASE_CHARS;

    return (
        <aside className="special-char-picker">
            <div className="case-toggle" role="group" aria-label="Letter case">
                { [false, true].map((uppercase) => (
                    <button type="button"
                        key={ String(uppercase) }
                        className="case-toggle-option"
                        aria-pressed={ isUppercase === uppercase }
                        onClick={ () => setIsUppercase(uppercase) }
                    >
                        { uppercase ? "ABC" : "abc" }
                    </button>
                )) }
            </div>
            <div className="special-char-grid">
                { chars.map((char) => (
                    <SpecialCharBtn char={ char }
                        key={ char }
                        onClick={ onClick }
                    />
                )) }
            </div>
        </aside>
    );
};

export const insertCharAt = (val: string, char: string, position: number): string => {
    if (isNaN(position)) {
        return val + char;
    }
    return val.substr(0, position) + char + val.substr(position);
};
