import * as React from "react";
import { FloatingBtn } from "./Buttons";
import { Row } from "./Grid";
import { SpecialCharBtn } from "./SpecialCharBtn";

enum Case {
    Upper,
    Lower,
}

interface IProps {
    onClick: (event: React.MouseEvent, char: string) => void;
    classes?: string[];
    display: boolean;
}

interface IState {
    chars: string[];
    currentCase: Case;
}

export class SimpleSpecialChars extends React.Component<IProps, IState> {
    public static insertCharAt(val: string, char: string, position: number) {
        if (isNaN(position)) {
            return val + char;
        }
        return val.substr(0, position) + char + val.substr(position);
    }

    constructor(props: IProps) {
        super(props);
        this.state = {
            chars: [
                "à", "á", "â", "ã", "æ", "č", "ç", "è", "é", "ê", "ë", "í", "î",
                "ï", "ñ", "ó", "ô", "õ", "œ", "š", "ù", "ú", "û", "ü", "ž",
            ],
            currentCase: Case.Lower,
        };
    }

    public render() {
        const classes = ["special-chars"];
        if (this.props.display) {
            return (
                <Row classes={ classes.concat(this.props.classes || []) }>
                    {/* Shift button */}
                    <FloatingBtn classes={ ["center", "green-bg", "shift-btn"] }
                        onClick={ (e) => e.preventDefault() }
                        onMouseDown={ this.handleShift.bind(this) }
                    >
                        { this.state.currentCase === Case.Lower ? "↑" : "↓" }
                    </FloatingBtn>
                    { this.state.chars.map((char) => {
                        return (
                            <SpecialCharBtn char={ char }
                                key={ char }
                                onClick={ (e, c) => this.props.onClick(e, c) }
                            />
                        );
                    }) }
                </Row>
            );
        }
        return null;
    }

    public handleShift(e: React.MouseEvent) {
        e.preventDefault();
        this.setState((state) => {
            if (state.currentCase === Case.Lower) {
                return {
                    chars: state.chars.map((char) => char.toUpperCase()),
                    currentCase: Case.Upper,
                };
            }
            return {
                chars: state.chars.map((char) => char.toLowerCase()),
                currentCase: Case.Lower,
            };
        });
    }
}

