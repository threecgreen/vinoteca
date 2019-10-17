import * as React from "react";
import { FloatingBtn } from "./Buttons";
import { Row } from "./Grid";
import { SpecialCharBtn } from "./SpecialCharBtn";

enum Case {
    Upper,
    Lower,
}

interface ISpecialCharsProps {
    onClick: (e: React.MouseEvent, char: string) => void;
    classes?: string[];
    display: boolean;
}

interface ISpecialCharsState {
    chars: string[];
    currentCase: Case;
}

interface ILastActiveState<Enum> {
    lastActiveTextInput?: Enum;
    position?: number;
};

export class SpecialChars extends React.Component<ISpecialCharsProps, ISpecialCharsState> {
    public static onInputChange<Enum, State extends ILastActiveState<Enum>>
            (prevState: Readonly<State>, event: React.ChangeEvent<HTMLInputElement>): State {
        return {
            position: event.target.selectionStart,
            ...prevState
        };
    }

    public static onTextInputFocus<Enum, State extends ILastActiveState<Enum>>
            (prevState: Readonly<State>, input: Enum): State {
        return {
            lastActiveTextInput: input,
            ...prevState,
        };
    }

    public static onTextInputBlur<Enum, State extends ILastActiveState<Enum>>
            (prevState: Readonly<State>, input: Enum): State {
        if (prevState.lastActiveTextInput === input) {
            return {
                lastActiveTextInput: undefined,
                ...prevState,
            };
        }
        return prevState;
    }

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
        const classes = ["special-chars"];
        if (this.props.display) {
            return (
                <Row classes={ classes.concat(this.props.classes || []) }>
                    {/* Shift button */}
                    <FloatingBtn classes={ ["center", "green-bg", "shift-btn"] }
                                 onClick={ this.handleShift.bind(this) } >
                        { this.state.currentCase === Case.Lower ? "↑" : "↓" }
                    </FloatingBtn>
                    { this.state.chars.map((char) => {
                        return (
                            <SpecialCharBtn char={ char }
                                key={ char }
                                onClick={ this.props.onClick }
                            />
                        );
                    }) }
                </Row>
            );
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
