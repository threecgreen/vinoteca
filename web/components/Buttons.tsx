import React from "react";
import { IChildrenProp, IClassesProp } from "./IProps";
import { Col } from "./Grid";
import { MaterialIcon } from "./MaterialIcon";
import { Link } from "@reach/router";

interface IFloatingBtnProps extends IChildrenProp, IClassesProp {
    onClick: () => void;
    onMouseDown?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

function combineClasses(classes: string[] | undefined): string {
    return (classes || []).join(" ");
}

export const FloatingBtn: React.FC<IFloatingBtnProps> = (props) => {
    const classes = combineClasses(props.classes);
    const mouseDown = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (props.onMouseDown) {
            props.onMouseDown(e)
        }
    }
    const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        props.onClick();
    }

    return (
        <a href="#"
            className={ `waves-effect waves-light btn-floating ${classes}` }
            onClick={ onClick }
            onMouseDown={ mouseDown }
        >
            { props.children }
        </a>
    );
};
FloatingBtn.displayName = "FloatingBtn";
FloatingBtn.defaultProps = { onMouseDown: (_) => undefined };

interface IBtnProps extends IChildrenProp, IClassesProp {
    onClick: () => void;
}

export const Btn: React.FC<IBtnProps> = (props) => {
    const classes = combineClasses(props.classes);
    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        props.onClick();
    }

    return (
        <button className={ `rbtn waves-effect waves-light btn ${classes}` }
            onClick={ onClick }
        >
            { props.children }
        </button>
    );
}
Btn.displayName = "Btn";

interface IBtnLinkProps extends IChildrenProp, IClassesProp {
    to: string;
}

export const BtnLink: React.FC<IBtnLinkProps> = (props) => {
    const classes = combineClasses(props.classes);

    return (
        <Link to={ props.to } className={ `rbtn waves-effect waves-light btn ${classes}` }>
            { props.children }
        </Link>
    );
}
BtnLink.displayName = BtnLink.name;

interface ICancelOrConfirmProps {
    onConfirmClick: () => void;
    onCancelClick: () => void;
}

export const CancelOrConfirmBtns: React.FC<ICancelOrConfirmProps> =
    (props) => {

    return (
        <Col s={ 12 }>
            <Btn classes={ ["green-bg"] }
                onClick={ props.onConfirmClick }
            >
                Confirm
                <MaterialIcon iconName="send" className="right" />
            </Btn>
            <Btn classes={ ["red-bg"] }
                onClick={ props.onCancelClick }
            >
                Cancel
            </Btn>
        </Col>
    );
}
CancelOrConfirmBtns.displayName = "CancelOrConfirmBtns";
