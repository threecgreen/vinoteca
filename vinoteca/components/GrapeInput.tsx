import * as React from "react";
import { Col } from "./Col";
import { FloatingBtn } from "./FloatingBtn";
import { InputField } from "./InputField";
import { MaterialIcon } from "./MaterialIcon";

interface IWineGrapeProps {
    id: number;
    name: string;
    percent?: number;
    handleDelete: (id: number) => void;
    onChange: (id: number, name: string, percent?: number) => void;
}

export class GrapeInput extends React.Component<IWineGrapeProps, {}> {
    public render() {
        const pctId = `grape-${this.props.id}-pct`;
        const nameId = `grape-${this.props.id}`;
        return <Col classes={ ["s12", "l6"] }>
            <InputField classes={ ["s1"] }>
                <FloatingBtn onClick={ () => this.props.handleDelete(this.props.id) }>
                    <MaterialIcon iconName="remove"></MaterialIcon>
                </FloatingBtn>
            </InputField>
            <InputField classes={ ["s3"] }>
                <input id={ pctId }
                        name={ pctId }
                        type="number"
                        className="validate"
                        onChange={ (e) => this.props.onChange(this.props.id,
                                                              this.props.name,
                                                              Number.parseInt(e.target.value, 10))}
                        value={ this.props.percent }>
                    <label htmlFor={ pctId }>Percentage</label>
                </input>
            </InputField>
            <InputField classes={ ["s8"] }>
                <input id={ nameId }
                       name={ nameId }
                       type="text"
                       className="autocomplete"
                       onChange={ (e) => this.props.onChange(this.props.id,
                                                             e.target.value,
                                                             this.props.percent)}
                       value={ this.props.name || "" }>
                    <label htmlFor={ nameId }>Grape</label>
                </input>
            </InputField>
        </Col>;
    }
}
