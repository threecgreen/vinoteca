import React from "react";
import { nameToId } from "../../lib/utils";
import { InputField } from "../Grid";
import { IChildrenProp } from "../IProps";

interface IProps extends IChildrenProp {
    name: string;
    selection: string;
    onChange: (val: string) => void;
    s?: number;
    m?: number;
    l?: number;
}

export const SelectInput: React.FC<IProps> = (props) => {
    const selectRef = React.useRef(null) as React.MutableRefObject<HTMLSelectElement | null>;
    const formSelectInstance = React.useRef(null) as React.MutableRefObject<M.FormSelect | null>;

    React.useEffect(() => {
        formSelectInstance.current = M.FormSelect.init(selectRef.current!)

        return () => formSelectInstance.current?.destroy();
    }, [props.children]);

    const renderOption = (child: React.ReactElement<HTMLOptionElement>) => React.cloneElement(child, {key: child.props.value});

    return (
        <InputField s={ props.s } m={ props.m } l={ props.l }
            classes={ ["col"] }
        >
            <select id={ nameToId(props.name) }
                value={ props.selection }
                ref={ selectRef }
                onChange={ (e) => props.onChange(e.target.value) }
            >
                { React.Children.map(props.children, renderOption) }
            </select>
            <label htmlFor={ props.name }>
                { props.name }
            </label>
        </InputField>
    );
};
SelectInput.displayName = "SelectInput";
