import * as React from "react";
import { Input } from "./Input";

interface IStatelessTextInputProps {
    name: string;
    value: string;
    enabled: boolean;
    onChange: (val: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    className: string;
    s?: number;
    m?: number;
    l?: number;
}

export class StatelessTextInput extends React.Component<IStatelessTextInputProps> {
    public static defaultProps = {
        enabled: true,
    }

    public render() {
        return (
            <Input inputType="text"
                value={ this.props.value }
                { ...this.props }
            />
        );
    }
}
