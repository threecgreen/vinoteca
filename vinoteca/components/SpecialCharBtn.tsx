import React from "react";
import { FloatingBtn } from "./Buttons";

interface IProps {
    onClick: (char: string) => void;
    char: string;
}

export const SpecialCharBtn: React.FC<IProps> = (props) => {
    const classes = ["btn-small", "center", "spec-char-btn"];
    return (
        <FloatingBtn classes={ classes }
            onClick={ () => null }
            onMouseDown={ () => props.onClick(props.char) }
        >
            { props.char }
        </FloatingBtn>
    );
};
