import * as React from "react";
import { Input } from "./Input";
import { SimpleSpecialChars } from "./SimpleSpecialChars";

interface IProps {
    name: string;
    value: string;
    enabled: boolean;
    onChange: (val: string) => void;
    onSpecialCharClick: (c: string, position: number) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    className: string;
    s?: number;
    m?: number;
    l?: number;
}

interface IState {
    isActive: boolean;
}

/**
 * `StatelessTextInput` is stateless in the sense that it does not control the
 * value of input. It does maintain some state for special characters purposes.
 */
export class StatelessTextInput extends React.Component<IProps, IState> {
    public static defaultProps = {
        enabled: true,
    }

    private timestamp: Date;
    private inputRef: React.Ref<HTMLInputElement>;

    constructor(props: IProps) {
        super(props);
        this.state = {
            isActive: false,
        }
        this.timestamp = new Date();
        this.inputRef = React.createRef();
    }

    public render() {
        return (
            <>
                <Input inputType="text"
                    value={ this.props.value }
                    inputRef={ this.inputRef }
                    onChangeEvent={ (e) => this.onChangeEvent(e) }
                    onBlur={ () => this.onBlur() }
                    onFocus={ () => this.onFocus() }
                    { ...this.props }
                />
                <SimpleSpecialChars
                    classes={ ["inline-block"] }
                    onClick={ (e, c) => this.onSpecialCharClick(e, c) }
                    display={ this.state.isActive }
                />
            </>
        );
    }

    private onSpecialCharClick(e: React.MouseEvent, char: string) {
        e.preventDefault();
        this.setState({ isActive: true });
        // @ts-ignore
        const position = this.inputRef.current?.selectionStart ?? NaN;
        this.props.onSpecialCharClick(char, position);
        // @ts-ignore
        setTimeout(() => this.inputRef.current.setSelectionRange(position + 1, position + 1), 10);
    }

    private onChangeEvent(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ isActive: true });
        this.props.onChange(e.target.value);
    }

    private onFocus() {
        this.setState({ isActive: true });
        if (this.props.onFocus) {
            this.props.onFocus();
        }
    }

    private onBlur() {
        const now = new Date()
        // @ts-ignore
        if (now - this.timestamp > 100) {
            this.setState({isActive: false});
        }
        if (this.props.onBlur) {
            this.props.onBlur();
        }
    }
}
