import * as React from "react";
import { Input } from "./Input";

interface INumberInputState {
    number: number;
}

interface INumberInputProps {
    id: string;
    name: string;
    initNumber: number;
    enabled: boolean;
    className: string;
    onChange: (val: string) => void;
    min: number;
    step: string;
    s?: number;
    m?: number;
    l?: number;
}

export class NumberInput extends React.Component<INumberInputProps, INumberInputState> {
    constructor(props: INumberInputProps) {
        super(props);
        this.state = {
            number: this.props.initNumber,
        };
    }

    public render() {
        return <Input id={ this.props.id } name={ this.props.name }
                      enabled={ this.props.enabled } value={ this.state.number }
                      className={ this.props.className } inputType="number"
                      min={ this.props.min } step={ this.props.step }
                      s={ this.props.s } m={ this.props.m } l={ this.props.l }
                      onChange={ this.onChange.bind(this) } />;
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
