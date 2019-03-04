import * as React from "react";
import { IChildrenProp, IClassesProp } from "./IProps";

interface IGridProps extends IClassesProp, IChildrenProp {
    s?: number;
    m?: number;
    l?: number;
}

function joinClasses(grid: string[], classes?: string[]): string {
    let allClasses: string[] = [];
    grid.forEach((gc) => {
        if (gc.length > 0) {
            allClasses.push(gc);
        }
    });
    allClasses = allClasses.concat(classes || []);
    return allClasses.join(" ");
}

function gridClasses(props: IGridProps): string[] {
    const sClass = props.s ? `s${props.s}` : "";
    const mClass = props.m ? `m${props.m}` : "";
    const lClass = props.l ? `l${props.l}` : "";
    return [sClass, mClass, lClass];
}

export class Row extends React.Component<IGridProps, {}> {
    public render() {
        return <div className={ `row ${joinClasses(gridClasses(this.props), this.props.classes)}` }>
            { this.props.children }
        </div>;
    }
}

export class Col extends React.Component<IGridProps, {}> {
    public render() {
        return <div className={ `col ${joinClasses(gridClasses(this.props), this.props.classes)}` }>
            { this.props.children }
        </div>;
    }
}
