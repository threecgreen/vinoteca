import * as React from "react";
import { IDict, isEmpty } from "../lib/utils";
import { staticAutocomplete } from "../lib/widgets";
import { FloatingBtn } from "./Buttons";
import { Col, InputField } from "./Grid";
import { MaterialIcon } from "./MaterialIcon";

interface IProps {
    id: number;
    completions: IDict<string>;
    name: string;
    percent?: number;
    handleDelete: (e: React.MouseEvent, id: number) => void;
    onChange: (id: number, name: string, percent?: string) => void;
}

export class GrapeInput extends React.Component<IProps> {
    public constructor(props: IProps) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    public get PercentId(): string {
        return `grape-${this.props.id}-pct`;
    }

    public get NameId(): string {
        return `grape-${this.props.id}`;
    }

    public render() {
        return (
            <Col classes={ ["grape-block"] } s={ 12 } l={ 6 }>
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
                        onChange={ (e) => this.onChange(this.props.name, e.target.value || undefined)}
                        value={ this.props.percent || "" }
                    />
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
            </Col>
        );
    }

    public onChange(name: string, percent?: string) {
        this.props.onChange(this.props.id, name, percent);
    }

    /** Starts autocomplete on mount */
    public componentDidMount() {
        if (!isEmpty(this.props.completions)) {
            staticAutocomplete(
                this.NameId, this.props.completions,
                (text) => this.onChange(text, `${this.props.percent}`),
            );
        }
    }
}
