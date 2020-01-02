import * as React from "react";
import { IChildrenProp, IClassesProp } from "./IProps";
import { capitalizeFirstLetter } from "../lib/utils";

export interface IGridProps {
    s?: number;
    m?: number;
    l?: number;
    xl?: number;
}

type IAllGridProps = IGridProps & IClassesProp & IChildrenProp;

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

function gridClasses(props: IAllGridProps): string[] {
    const sClass = props.s ? `s${props.s}` : "";
    const mClass = props.m ? `m${props.m}` : "";
    const lClass = props.l ? `l${props.l}` : "";
    const xlClass = props.xl ? `xl${props.xl}` : "";
    return [sClass, mClass, lClass, xlClass];
}

const GridComponentFactory = (className: string): React.FC<IAllGridProps> => {
    const component: React.FC<IAllGridProps> = (props: IAllGridProps) => {
        const otherClasses = joinClasses(gridClasses(props), props.classes);
        return (
            <div className={ `${className} ${otherClasses}` }>
                { props.children }
            </div>
        );
    };
    component.displayName = capitalizeFirstLetter(className);
    return component;
}

export const Row: React.FC<IAllGridProps> = GridComponentFactory("row");

export const Col: React.FC<IAllGridProps> = GridComponentFactory("col");

export const InputField: React.FC<IAllGridProps> = GridComponentFactory("col input-field")
