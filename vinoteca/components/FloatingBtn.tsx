import * as React from "react";
import { IChildrenProp, IClassesProp } from "./IProps";

export interface IFloatingBtn extends IChildrenProp, IClassesProp {
    onClick: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void | undefined);
}

export class FloatingBtn extends React.Component<IFloatingBtn, {}> {
    public render() {
        const classes = (this.props.classes || []).join(" ");
        return <a href="#"
                  className={ `waves-effect waves-light btn-floating ${classes}` }
                  onClick={ this.props.onClick }>
            { this.props.children }
        </a>;
    }
}
