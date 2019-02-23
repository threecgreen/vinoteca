import * as React from "react";
import { IChildrenProp, IClassesProp } from "./IProps";

interface IColProps extends IClassesProp, IChildrenProp {
}

export class Col extends React.Component<IColProps, {}> {
    public render() {
        return <div className={ `col ${(this.props.classes || []).join(" ")}` }>
            { this.props.children };
        </div>;
    }
}
