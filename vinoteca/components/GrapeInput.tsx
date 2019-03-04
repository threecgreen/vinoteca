import * as React from "react";
import { autocomplete } from "../lib/widgets";
import { FloatingBtn } from "./FloatingBtn";
import { Col } from "./Grid";
import { InputField } from "./InputField";
import { MaterialIcon } from "./MaterialIcon";

interface IWineGrapeProps {
    id: number;
    name: string;
    percent?: number;
    handleDelete: (e: React.MouseEvent, id: number) => void;
    onChange: (id: number, name: string, percent?: string) => void;
}

export class GrapeInput extends React.Component<IWineGrapeProps, {}> {
    get PercentId(): string {
        return `grape-${this.props.id}-pct`;
    }

    get NameId(): string {
        return `grape-${this.props.name}-${this.props.id}`;
    }

    public render() {
        return <Col classes={ ["grape-block"] } s={ 12 } l={ 6 }>
            <InputField s={ 1 }>
                <FloatingBtn onClick={ (e) => this.props.handleDelete(e, this.props.id) }
                             classes={ ["red-bg"] }>
                    <MaterialIcon iconName="remove"></MaterialIcon>
                </FloatingBtn>
            </InputField>
            <InputField s={ 3 }>
                <input id={ this.PercentId }
                       name={ this.PercentId }
                       type="number"
                       className="validate"
                       onChange={ (e) => this.props.onChange(this.props.id,
                                                             this.props.name,
                                                             e.target.value || undefined)}
                       value={ this.props.percent } />
                <label htmlFor={ this.PercentId }>Percentage</label>
            </InputField>
            <InputField s={ 8 }>
                <input id={ this.NameId }
                       name={ this.NameId }
                       type="text"
                       className="autocomplete"
                       onChange={ (e) => this.props.onChange(this.props.id,
                                                             e.target.value,
                                                             `${this.props.percent}`)}
                       value={ this.props.name || "" } />
                <label htmlFor={ this.NameId }>Grape</label>
            </InputField>
        </Col>;
    }

    /** Starts autocomplete on mount */
    public componentDidMount() {
        /*
         * TODO: although straightforward, there's no reason to fetch all grapes each
         * time a grape input is added.
         */
        autocomplete("grape", 5, 1, `#${this.NameId}`);
        // Fix overlapping text bug
        M.updateTextFields();
    }
}
