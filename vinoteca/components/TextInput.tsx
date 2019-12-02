import * as React from "react";
import { rAutocomplete } from "../lib/widgets";
import { Input } from "./Input";
import { SimpleSpecialChars } from "./SimpleSpecialChars";

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
    isActive: boolean;
    position: number;
    text: string;
}

export class TextInput extends React.Component<ITextInputProps, ITextInputState> {
    constructor(props: ITextInputProps) {
        super(props);
        this.state = {
            isActive: false,
            position: NaN,
            text: this.props.initText,
        };
        this.onChange = this.onChange.bind(this);
        this.onChangeEvent = this.onChangeEvent.bind(this);
        this.onSpecialCharClick = this.onSpecialCharClick.bind(this);
    }

    public render() {
        return (
            <>
                <Input inputType="text"
                    name={ this.props.name }
                    enabled={ this.props.enabled }
                    value={ this.state.text }
                    className={ this.props.className }
                    s={ this.props.s } m={ this.props.m } l={ this.props.l }
                    onChangeEvent={ this.onChangeEvent }

                />
                <SimpleSpecialChars
                    onClick={ this.onSpecialCharClick }
                    display={ this.state.isActive }
                />
            </>
        );
    }

    public componentDidMount() {
        if (this.props.autocomplete) {
            rAutocomplete(this.props.name, this.onChange );
        }
    }

    private onChange(val: string) {
        this.setState({
            text: val,
        })
    }

    private onChangeEvent(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            position: e.target.selectionEnd || NaN,
            text: e.target.value,
        });
    }

    private onSpecialCharClick(e: React.MouseEvent, char: string) {
        e.preventDefault();
        this.setState((prevState) => ({
            position: prevState.position + 1,
            text: SimpleSpecialChars.insertCharAt(prevState.text, char, prevState.position)
        }));
    }

    private onFocus() {
        this.setState({
            isActive: true
        });
    }
}

