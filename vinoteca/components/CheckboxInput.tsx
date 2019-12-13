import * as React from "react";
import { Col, IGridProps } from "./Grid";

interface IProps extends IGridProps {
    default: boolean;
    id: string;
    text: string;
}

export const CheckboxInput: React.FC<IProps> = (props) => {
    const [isChecked, setIsChecked] = React.useState(props.default);

    return (
        <Col s={ props.s } m={ props.m } l={ props.l }>
            <div className="switch">
                <label htmlFor={ props.id }>
                    { props.text }
                    <input type="checkbox" id={ props.id } name={ props.id }
                        checked={ isChecked } onChange={ () => setIsChecked(!isChecked) } />
                    <span className="lever" />
                </label>
            </div>
        </Col>
    );
}
CheckboxInput.displayName = "CheckboxInput";
