import * as React from "react";
import { IChildrenProp, IClassesProp } from "./IProps";

interface IFloatingBtnProps extends IChildrenProp, IClassesProp {
    onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

function combineClasses(classes: string[] | undefined): string {
    return (classes || []).join(" ");
}

export const FloatingBtn: React.FunctionComponent<IFloatingBtnProps> = (props) => {
    const classes = combineClasses(props.classes);
    return (
        <a href="#"
            className={ `waves-effect waves-light btn-floating ${classes}` }
            onClick={ props.onClick }
        >
            { props.children }
        </a>
    );
};

interface IBtnProps extends IChildrenProp, IClassesProp {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Btn: React.FunctionComponent<IBtnProps> = (props) => {
    const classes = combineClasses(props.classes);
    return (
        <button className={ `btn waves-effect waves-light ${classes}` }
            onClick={ props.onClick }
        >
            { props.children }
        </button>
    );
}

