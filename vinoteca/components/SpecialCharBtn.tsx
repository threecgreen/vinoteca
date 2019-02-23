import * as React from "react";
import { FloatingBtn } from "./FloatingBtn";
import { IClassesProp } from "./IProps";

interface ISpecialCharBtnProps extends IClassesProp {
    onClick: (event: React.MouseEvent, char: string) => void;
    char: string;
}

export class SpecialCharBtn extends React.Component<ISpecialCharBtnProps, {}> {
    public render() {
        const classes = ["btn-small", "center", "spec-char-btn"];
        return <FloatingBtn classes={ classes }
                            onClick={ (e) => this.props.onClick(e, this.props.char) }>
            { this.props.char }
        </FloatingBtn>;
    }
}
