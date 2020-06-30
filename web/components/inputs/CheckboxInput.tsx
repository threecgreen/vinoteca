import { nameToId } from "lib/utils";
import React from "react";
import { Col, IGridProps } from "../Grid";

interface IProps extends IGridProps {
    name: string;
    text: string;
    enabled: boolean;
    isChecked: boolean;
    onClick: (checked: boolean) => void;
}

export class CheckboxInput extends React.Component<IProps> {
    public static defaultProps = {
        enabled: true,
    };

    public render() {
        const id = nameToId(this.props.name);
        return (
            <Col { ...this.props }>
                <div className="switch">
                    <label htmlFor={ id }>
                        { this.props.text }
                        <input type="checkbox" id={ id } name={ this.props.name }
                            checked={ this.props.isChecked }
                            onChange={ (e) => this.props.onClick(e.target.checked) }
                            disabled={ !this.props.enabled }
                        />
                        <span className="lever"
                            // Increase clickable area, particularly for mobile
                            style={ {zIndex: 1} }
                            onClick={ (e) => this.onSpanClick(e) }
                        />
                    </label>
                </div>
            </Col>
        );
    }

    private onSpanClick(e: React.MouseEvent<HTMLSpanElement>) {
        e.preventDefault();
        this.props.onClick(!this.props.isChecked);
    }
}
