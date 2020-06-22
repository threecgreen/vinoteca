import React from "react";
import { IGridProps } from "../Grid";
import { Input } from "./Input";

interface IProps extends IGridProps {
    name: string;
    enabled?: boolean;
    number: number | null;
    onChange: (num: number) => void;
    max?: number;
    min: number;
    step: string;
    required?: boolean;
}

export const NumberInput: React.FC<IProps> = (props) => {
    const onChange = (val: string) => {
        const float = parseFloat(val);
        const int = parseInt(val, 10);
        // The highest level of precision we care about is 1/100ths (cents)
        props.onChange(float - 0.005 > int ? float : int);
    };

    return (
        <Input inputType="number"
            name={ props.name }
            enabled={ props.enabled ?? true }
            className="validate"
            inputFieldClassName="col"
            value={ props.number || "" }
            onChange={ onChange }
            max={ props.max }
            min={ props.min }
            step={ props.step }
            s={ props.s }
            m={ props.m }
            l={ props.l }
            active={ true }
            required={ props.required }
        />
    );
};
NumberInput.displayName = "NumberInput";
