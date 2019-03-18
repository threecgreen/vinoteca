import * as React from "react";
import { Input } from "./Input";

interface IStatelessTextInputProps {
    id: string;
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

export class StatelessTextInput extends React.Component<IStatelessTextInputProps, {}> {
    public render() {
        return <Input id={ this.props.id } name={ this.props.name } enabled={ true }
                      value={ this.props.text } inputType="text"
                      s={ this.props.s } m={ this.props.m } l={ this.props.l }
                      onChange={ this.props.onChange } className={ this.props.className } />;
    }

    public componentDidMount() {
        this.props.componentDidMount();
    }
}
