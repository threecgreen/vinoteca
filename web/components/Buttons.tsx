import { Link } from "@gatsbyjs/reach-router";
import React from "react";
import { Col } from "./Grid";
import { IChildrenProp, IClassesProp } from "./IProps";
import { MaterialIcon } from "./MaterialIcon";
import { CircleSize, PreloaderCirc } from "./Preloader";

interface IFloatingBtnProps extends IChildrenProp, IClassesProp {
    enabled?: boolean;
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
            props.onMouseDown(e);
        }
    };
    const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        props.onClick();
    };
    const disabledClass = (props.enabled ?? true) ? '' : 'disabled';

    return (
        <a href="#"
            className={ `waves-effect waves-light btn-floating ${classes} ${disabledClass}` }
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
    disabled?: boolean;
    noRbtn?: boolean;
    type?: "button" | "reset" | "submit";
}

export const Btn: React.FC<IBtnProps> = (props) => {
    const classes = combineClasses(props.classes);
    const disabled = props.disabled ?? false;
    const noRbtn = props.noRbtn ?? false;

    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        props.onClick();
    };

    return (
        <button className={ `${noRbtn ? "" : "rbtn"} waves-effect waves-light btn ${classes}` }
            onClick={ onClick }
            disabled={ disabled }
            type={ props.type }
        >
            { props.children }
        </button>
    );
};
Btn.displayName = "Btn";

interface IBtnLinkProps extends IChildrenProp, IClassesProp {
    to: string;
}

export const BtnLink: React.FC<IBtnLinkProps> = (props) => {
    const classes = combineClasses(props.classes);

    return (
        <Link to={ props.to }
            className={ `rbtn waves-effect waves-light btn ${classes}` }
        >
            { props.children }
        </Link>
    );
};
BtnLink.displayName = "BtnLink";

interface IConfirmProps {
    onClick: () => void;
    isSaving: boolean;
    disabled?: boolean;
    text?: string
}

export const ConfirmBtn: React.FC<IConfirmProps> = ({onClick, isSaving, disabled, text}) => {
    const isConfirmDisabled = disabled || isSaving;
    return (
        <Btn classes={ ["green-bg"] }
            onClick={ onClick }
            disabled={ isConfirmDisabled }
            type="submit"
        >
            { text ?? "Confirm" }
            { isSaving
                ? <PreloaderCirc size={ CircleSize.Tiny } className="confirm" />
                : <MaterialIcon iconName="send" className="right" />
            }
        </Btn>
    );
}
ConfirmBtn.displayName = "ConfirmBtn";

interface ICancelOrConfirmProps {
    onConfirmClick: () => void;
    onCancelClick: () => void;
    confirmDisabled?: boolean;
    isSaving: boolean;
}

export const CancelOrConfirmBtns: React.FC<ICancelOrConfirmProps> =
    ({onConfirmClick, onCancelClick, isSaving, confirmDisabled}) => {

    return (
        <Col s={ 12 }>
            <ConfirmBtn onClick={ onConfirmClick }
                isSaving={ isSaving }
                disabled={ confirmDisabled }
            />
            <Btn classes={ ["red-bg"] }
                onClick={ onCancelClick }
                disabled={ isSaving }
            >
                Cancel
            </Btn>
        </Col>
    );
};
CancelOrConfirmBtns.displayName = "CancelOrConfirmBtns";
