import * as React from "react";
import { FloatingBtn } from "./FloatingBtn";
import { Row } from "./Grid";
import { SpecialCharBtn } from "./SpecialCharBtn";

enum Case {
    Upper,
    Lower,
}

interface ISpecialCharsProps {
    onClick: (e: React.MouseEvent, char: string) => void;
    display: boolean;
}

interface ISpecialCharsState {
    chars: string[];
    currentCase: Case;
}

export class SpecialChars extends React.Component<ISpecialCharsProps, ISpecialCharsState> {
    constructor(props: ISpecialCharsProps) {
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
        const classes = ["special-chars", "z-depth-2"];
        if (this.props.display) {
            return <Row classes={ classes }>
                    {/* Shift button */}
                    <FloatingBtn classes={ ["center", "green-bg", "shift-btn"] }
                                 onClick={ this.handleShift.bind(this) } >
                        { this.state.currentCase === Case.Lower ? "↑" : "↓" }
                    </FloatingBtn>
                    { this.state.chars.map((char) => {
                        return (<SpecialCharBtn char={ char }
                                                key={ char }
                                                onClick={ this.props.onClick } />);
                    }) }
            </Row>;
        } else {
            return null;
        }
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
