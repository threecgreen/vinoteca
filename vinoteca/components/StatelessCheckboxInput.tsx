import * as React from "react";
import { Col, IGridProps } from "./Grid";
import { nameToId } from "../lib/utils";

interface IStatelessCheckboxInputProps extends IGridProps {
    name: string;
    text: string;
    isChecked: boolean;
    onClick: (e: React.ChangeEvent) => void;
}

export const StatelessCheckboxInput:
        React.FunctionComponent<IStatelessCheckboxInputProps> = (props) => {

    const id = nameToId(props.name);
    return (
        <Col { ...props }>
            <div className="switch">
                <label htmlFor={ id }>
                    { props.text }
                    <input type="checkbox" id={ id } name={ props.name }
                           checked={ props.isChecked } onChange={ (e) => props.onClick(e) } />
                    <span className="lever" />
                </label>
            </div>
        </Col>
    );
};
StatelessCheckboxInput.displayName = "StatelessCheckboxInput";
