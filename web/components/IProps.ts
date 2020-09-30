/** Prop for component with potential children elements/components. */
export interface IChildrenProp {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any[] | any;
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
