import * as React from "react";
import { Col } from "./Grid";

export class InputField extends Col {
    public render() {
        return <Col classes={ ["input-field"] } s={ this.props.s } m={ this.props.m }
                    l={ this.props.l }>
            { this.props.children }
        </Col>;
    }
}
