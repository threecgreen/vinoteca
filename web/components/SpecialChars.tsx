import React from "react";
import { FloatingBtn } from "./Buttons";
import { SpecialCharBtn } from "./SpecialCharBtn";

enum Case {
    Upper,
    Lower,
}

interface IProps {
    onClick: (char: string) => void;
}

export const SpecialCharPicker: React.FC<IProps> = ({onClick}) => {
    const [case_, setCase] = React.useState(Case.Lower);
    const [chars, setChars] = React.useState([
        "à", "á", "â", "ã", "æ", "č", "ç", "è", "é", "ê", "ë", "í", "î",
        "ï", "ñ", "ó", "ô", "õ", "œ", "š", "ù", "ú", "û", "ü", "ž",
    ]);

    const handleShift = () => {
        if (case_ === Case.Lower) {
            setCase(Case.Upper);
            setChars(chars.map((char) => char.toUpperCase()));
        } else {
            setCase(Case.Lower);
            setChars(chars.map((char) => char.toLowerCase()));
        }
    };

    return (
        <aside className="special-char-picker">
            {/* Shift button */}
            <FloatingBtn classes={ ["center", "green-bg", "shift-btn"] }
                onClick={ () => null }
                onMouseDown={ handleShift }
            >
                { case_ === Case.Lower ? "↑" : "↓" }
            </FloatingBtn>
            { chars.map((char) => {
                return (
                    <SpecialCharBtn char={ char }
                        key={ char }
                        onClick={ onClick }
                    />
                );
            }) }
        </aside>
    );
};

export const insertCharAt = (val: string, char: string, position: number): string => {
    if (isNaN(position)) {
        return val + char;
    }
    return val.substr(0, position) + char + val.substr(position);
};
