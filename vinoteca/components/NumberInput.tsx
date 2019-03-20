import * as React from "react";
import { Input } from "./Input";

interface INumberInputProps {
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

interface INumberInputState {
    number: number;
}

export class NumberInput extends React.Component<INumberInputProps, INumberInputState> {
    constructor(props: INumberInputProps) {
        super(props);
        this.state = {
            number: this.props.initNumber,
        };
    }

    public render() {
        return (
            <Input inputType="number" value={ this.state.number }
                onChange={ this.onChange.bind(this) }
                { ...this.props }
            />
        );
    }

    public onChange(val: string) {
        const float = parseFloat(val);
        const int = parseInt(val, 10);
        this.setState({
            // The highest level of precision we care about is 1/100ths (cents)
            number: float - 0.005 > int ? float : int,
        });
    }
}
