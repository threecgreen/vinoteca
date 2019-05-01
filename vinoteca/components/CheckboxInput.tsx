import * as React from "react";
import { Col, IGridProps } from "./Grid";

interface ICheckboxInputProps extends IGridProps {
    default: boolean;
    id: string;
    text: string;
}

interface ICheckboxInputState {
    checked: boolean;
}

export class CheckboxInput extends React.Component<ICheckboxInputProps, ICheckboxInputState> {
    constructor(props: ICheckboxInputProps) {
        super(props);
        this.state = {
            checked: this.props.default,
        };
    }

    public render() {
        return (
            <Col s={ this.props.s } m={ this.props.m } l={ this.props.l }>
                <div className="switch">
                    <label htmlFor={ this.props.id }>
                        { this.props.text }
                        <input type="checkbox" id={ this.props.id } name={ this.props.id }
                            checked={ this.state.checked } onChange={ () => this.onClick() } />
                        <span className="lever" />
                    </label>
                </div>
            </Col>
        );
    }

    public onClick() {
        this.setState((state) => ({
            checked: !state.checked,
        }));
    }
}
