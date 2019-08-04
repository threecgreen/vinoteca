import * as React from "react";
import { IChildrenProp, IClassesProp } from "./IProps";
import { Col } from "./Grid";
import { MaterialIcon } from "./MaterialIcon";

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
FloatingBtn.displayName = "FloatingBtn";

interface IBtnProps extends IChildrenProp, IClassesProp {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Btn: React.FunctionComponent<IBtnProps> = (props) => {
    const classes = combineClasses(props.classes);
    return (
        <button className={ `btn rbtn waves-effect waves-light ${classes}` }
            onClick={ props.onClick }
        >
            { props.children }
        </button>
    );
}
Btn.displayName = "Btn";

interface ICancelOrConfirmProps {
    onConfirmClick: (e: React.MouseEvent) => void;
    onCancelClick: (e: React.MouseEvent) => void;
}

export const CancelOrConfirmBtns: React.FunctionComponent<ICancelOrConfirmProps> =
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
