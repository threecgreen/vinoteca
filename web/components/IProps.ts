import React from "react";

/** Prop for component with potential children elements/components. */
export interface IChildrenProp {
    children: React.ReactNode;
}

/** Prop for storing additional class names to be used in the component HTML */
export interface IClassesProp {
    classes?: string[];
}

export interface IOnChange {
    onChange: (val: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}
