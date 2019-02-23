import * as React from "react";
import { Col } from "./Col";

export class InputField extends Col {
    public render() {
        return <div className={ `input-field col ${(this.props.classes || []).join(" ")}` }>
            { this.props.children };
        </div>;
    }
}
