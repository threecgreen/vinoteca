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
    position: number;
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

    constructor(props: IProps) {
        super(props);
        this.state = {
            isActive: false,
            position: NaN,
        }
        this.timestamp = new Date();
    }

    public render() {
        return (
            <>
                <Input inputType="text"
                    value={ this.props.value }
                    onChangeEvent={ (e) => this.onChangeEvent(e) }
                    onBlur={ () => this.onBlur() }
                    onFocus={ () => this.onFocus() }
                    onKeyDown={ (e) => this.onKeyDown(e) }
                    { ...this.props }
                />
                <SimpleSpecialChars
                    onClick={ (e, c) => this.onSpecialCharClick(e, c) }
                    display={ this.state.isActive }
                />
            </>
        );
    }

    private onSpecialCharClick(e: React.MouseEvent, char: string) {
        e.preventDefault();
        this.setState((prevState) => ({
            isActive: true,
            position: prevState.position + 1,
        }));
        this.props.onSpecialCharClick(char, this.state.position);
    }

    private onChangeEvent(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            isActive: true,
            position: e.target.selectionEnd || NaN,
        })
        this.props.onChange(e.target.value);
    }

    private onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        setTimeout(() => {
            const selection = window.getSelection()
            if (selection) {
                this.setState({
                    position: selection.getRangeAt(0).endOffset,
                });
            }
        }, 0);
    }

    private onFocus() {
        this.setState({
            isActive: true
        });
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
