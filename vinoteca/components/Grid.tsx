import * as React from "react";
import { IChildrenProp, IClassesProp } from "./IProps";

interface IGridProps extends IClassesProp, IChildrenProp {
}

export class Row extends React.Component<IGridProps, {}> {
    public render() {
        return <div className={ `row ${(this.props.classes || []).join(" ")}` }>
            { this.props.children }
        </div>;
    }
}

export class Col extends React.Component<IGridProps, {}> {
    public render() {
        return <div className={ `col ${(this.props.classes || []).join(" ")}` }>
            { this.props.children }
        </div>;
    }
}
