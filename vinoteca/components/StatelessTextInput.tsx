import * as React from "react";
import { Input } from "./Input";

interface IStatelessTextInputProps {
    name: string;
    text: string;
    enabled: boolean;
    onChange: (val: string) => void;
    componentDidMount: () => void;
    className: string;
    s?: number;
    m?: number;
    l?: number;
}

export class StatelessTextInput extends React.Component<IStatelessTextInputProps> {
    public static defaultProps = {
        enabled: true,
        componentDidMount: () => undefined,
    }

    public render() {
        return (
            <Input inputType="text" value={ this.props.text } { ...this.props } />
        );
    }

    public componentDidMount() {
        this.props.componentDidMount();
    }
}
