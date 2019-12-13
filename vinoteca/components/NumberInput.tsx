import * as React from "react";
import { Input } from "./Input";

interface IProps {
    id: string;
    name: string;
    initNumber: number;
    enabled: boolean;
    className: string;
    max?: number;
    min: number;
    step: string;
    s?: number;
    m?: number;
    l?: number;
}

export const NumberInput: React.FC<IProps> = (props) => {
    const [number, setNumber] = React.useState(props.initNumber);

    const onChange = (val: string) => {
        const float = parseFloat(val);
        const int = parseInt(val, 10);
        // The highest level of precision we care about is 1/100ths (cents)
        setNumber(float - 0.005 > int ? float : int);
    }

    return (
        <Input inputType="number"
            value={ number }
            onChange={ onChange }
            { ...props }
        />
    )
};
NumberInput.displayName = "NumberInput";
