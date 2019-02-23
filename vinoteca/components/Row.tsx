import * as React from "react";
import { IChildrenProp } from "./IProps";

export class Row extends React.Component<IChildrenProp, {}> {
    public render() {
        return <div className="row">
            { this.props.children }
        </div>;
    }
}
