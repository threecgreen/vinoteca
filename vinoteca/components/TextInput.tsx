import * as React from "react";
import { autocomplete } from "../lib/widgets";
import { Input } from "./Input";

interface ITextInputState {
    text: string;
}

interface ITextInputProps {
    id: string;
    name: string;
    initText: string;
    enabled: boolean;
    className: string;
    onChange: (val: string) => void;
    autocomplete: boolean;
    s?: number;
    m?: number;
    l?: number;
}

export class TextInput extends React.Component<ITextInputProps, ITextInputState> {
    constructor(props: ITextInputProps) {
        super(props);
        this.state = {
            text: this.props.initText,
        };
    }

    public render() {
        return <Input id={ this.props.id } name={ this.props.name }
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
        if (autocomplete) {
            autocomplete(this.props.name, 5, 1, `#${this.props.id}`);
            // Fix overlappting text bug
            M.updateTextFields();
        }
    }
}

