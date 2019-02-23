import * as React from "react";
import { FloatingBtn } from "./FloatingBtn";
import { Row } from "./Grid";
import { SpecialCharBtn } from "./SpecialCharBtn";

enum Case {
    Upper,
    Lower,
}

interface ISpecialCharsState {
    chars: string[];
    currentCase: Case;
}

export class SpecialChars extends React.Component<{}, ISpecialCharsState> {
    public readonly state: Readonly<ISpecialCharsState> = {
        chars: [
            "à", "á", "â", "ã", "æ", "č", "ç", "è", "é", "ê", "ë", "í", "î",
            "ï", "ñ", "ó", "ô", "õ", "œ", "š", "ù", "ú", "û", "ü", "ž",
        ],
        currentCase: Case.Lower,
    };

    public render() {
        const classes = ["center", "col", "s12"];
        return <Row classes={ classes }>
            {/* Shift button */}
            <FloatingBtn classes={ ["center", "green-bg"] }
                         onClick={ this.handleShift.bind(this) } >
                ↑
            </FloatingBtn>
            { this.state.chars.map((char) => {
                return (<SpecialCharBtn char={ char }
                                        onClick={ this.onClick.bind(this) } />);
            }) }
        </Row>;
    }

    public onClick(e: React.MouseEvent, char: string) {
        e.preventDefault();
        console.log(`Clicked ${char}`);
    }

    public handleShift(e: React.MouseEvent) {
        e.preventDefault();
        this.setState((state) => ({
            chars: state.chars.map((char) => char.toUpperCase()),
        }));
    }
}
