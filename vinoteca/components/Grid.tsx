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

const GridComponentFactory = (className: string) => {
    return (props: IGridProps) => {
        const otherClasses = joinClasses(gridClasses(props), props.classes);
        return (
            <div className={ `${className} ${otherClasses}` }>
                { props.children }
            </div>
        );
    };
}

export const Row: React.FunctionComponent<IGridProps> = GridComponentFactory("row");

export const Col: React.FunctionComponent<IGridProps> = GridComponentFactory("col");

export const InputField: React.FunctionComponent<IGridProps> = GridComponentFactory("col input-field")
