import * as React from "react";
import { FloatingBtn } from "./Buttons";

interface ISpecialCharBtnProps {
    onClick: (event: React.MouseEvent, char: string) => void;
    char: string;
}

export const SpecialCharBtn: React.FunctionComponent<ISpecialCharBtnProps> = (props) => {
    const classes = ["btn-small", "center", "spec-char-btn"];
    return (
        <FloatingBtn classes={ classes }
            onClick={ (e) => e.preventDefault() }
            onMouseDown={ (e) => props.onClick(e, props.char) }
        >
            { props.char }
        </FloatingBtn>
    );
};
