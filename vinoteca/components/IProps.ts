import * as React from "react";

/** Prop for component with potential children elements/components. */
export interface IChildrenProp {
    children: any[] | any;
}

/** Prop for storing additional class names to be used in the component HTML */
export interface IClassesProp {
    classes?: string[];
}