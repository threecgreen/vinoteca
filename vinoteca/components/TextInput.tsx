import * as React from "react";
import { nameToId } from "../lib/utils";
import { rAutocomplete } from "../lib/widgets";
import { Input } from "./Input";

interface ITextInputProps {
    name: string;
    initText: string;
    enabled: boolean;
    className: string;
    autocomplete: boolean;
    s?: number;
    m?: number;
    l?: number;
}

interface ITextInputState {
    text: string;
}

export class TextInput extends React.Component<ITextInputProps, ITextInputState> {
    constructor(props: ITextInputProps) {
        super(props);
        this.state = {
            text: this.props.initText,
        };
    }

    public render() {
        return <Input name={ this.props.name }
                      enabled={ this.props.enabled } value={ this.state.text }
                      className={ this.props.className } inputType="text"
                      s={ this.props.s } m={ this.props.m } l={ this.props.l }
                      onChange={ this.onChange.bind(this) } />;
    }

    public onChange(val: string) {
        this.setState({
            text: val,
        });
    }

    public componentDidMount() {
        if (this.props.autocomplete) {
            rAutocomplete(this.props.name, nameToId(this.props.name));
        }
    }
}

