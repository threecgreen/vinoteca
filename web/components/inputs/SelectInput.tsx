import React from "react";
import { nameToId } from "../../lib/utils";
import { MOBILE_CUTOFF } from "../constants";
import { InputField } from "../Grid";
import { IChildrenProp } from "../IProps";
import { useViewport } from "../ViewportContext";

interface IProps extends IChildrenProp {
    name: string;
    selection: string;
    onChange: (val: string) => void;
    s?: number;
    m?: number;
    l?: number;
}

export const SelectInput: React.FC<IProps> = (props) => {
    const {width} = useViewport();

    const renderOption = (child: React.ReactElement<HTMLOptionElement>) => React.cloneElement(child, {key: child.props.value});

    const Select = width > MOBILE_CUTOFF ? MaterializeSelect : DefaultSelct;
    return (
        <InputField s={ props.s } m={ props.m } l={ props.l }
            classes={ ["col"] }
        >
            <Select { ...props }>
                { React.Children.map(props.children, renderOption) }
            </Select>
        </InputField>
    );
};
SelectInput.displayName = "SelectInput";

const MaterializeSelect: React.FC<IProps> = (props) => {
    const selectRef = React.useRef(null) as React.MutableRefObject<HTMLSelectElement | null>;
    const formSelectInstance = React.useRef(null) as React.MutableRefObject<M.FormSelect | null>;

    React.useEffect(() => {
        formSelectInstance.current = M.FormSelect.init(selectRef.current!)

        return () => formSelectInstance.current?.destroy();
    }, [props.children]);

    return (
        <>
            <select id={ nameToId(props.name) }
                value={ props.selection }
                ref={ selectRef }
                onChange={ (e) => props.onChange(e.target.value) }
            >
                { props.children }
            </select>
            <label htmlFor={ props.name }>
                { props.name }
            </label>
        </>
    );
}
MaterializeSelect.displayName = "MterializeSelect";

const DefaultSelct: React.FC<IProps> = (props) => {
    return (
        <select id={ nameToId(props.name) }
            className="browser-default"
            value={ props.selection }
            onChange={ (e) => props.onChange(e.target.value) }
        >
            { props.children }
        </select>
    );
}
DefaultSelct.displayName = "DefaultSelect";
