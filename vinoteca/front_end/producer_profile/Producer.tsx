import * as React from "react";
import { Btn } from "../../components/Buttons";
import { Col, Row } from "../../components/Grid";
import { MaterialIcon } from "../../components/MaterialIcon";
import { ProducerInput } from "../../components/ProducerInput";
import { RegionInput } from "../../components/RegionInput";

interface IProducerProps {
    isEditing: boolean;
    producer: string;
    onProducerChange: (val: string) => void;
    region: string;
    regionId?: number;
    isUs?: boolean;
    onRegionChange: (val: string) => void;
    onConfirmClick: (e: React.MouseEvent) => void;
    onCancelClick: (e: React.MouseEvent) => void;
}

export class Producer extends React.Component<IProducerProps> {
    constructor(props: IProducerProps) {
        super(props);
        this.state = {
            isEditing: false,
        };
    }

    public render() {
        const content = this.props.isEditing ? this.renderEdit() : this.renderView();
        return (
            <Row>
                { content }
            </Row>
        );
    }

    private renderView(): JSX.Element {
        let regionInfo: JSX.Element;
        if (this.props.region) {
            regionInfo = (
                <h4 className="light">
                    <a href={ `/regions/${this.props.regionId}/` }
                         className="text-link"
                    >
                        { this.props.region }
                    </a>
                </h4>
            )
        } else {
            regionInfo = <h5>This producer currently does not have a region, please add one.</h5>;
        }
        return (
            <Col s={ 12 }>
                <h3 className="bold">{ this.props.producer }</h3>
                { regionInfo }
            </Col>
        );
    }

    private renderEdit(): JSX.Element {
        // TODO: special chars
        // TODO: who should create empty region for producers w/o them?
        return (
            <React.Fragment>
                <Col s={ 12 }>
                    <h3 className="bold">{ `Edit Producer ${this.props.producer}` }</h3>
                    <form autoComplete="off">
                        <ProducerInput value={ this.props.producer }
                            onChange={ this.props.onProducerChange }
                        />
                        <RegionInput value={ this.props.region }
                            onChange={ this.props.onRegionChange }
                        />
                    </form>
                </Col>
                <Col s={ 12 }>
                    <Btn classes={ ["green-bg"] }
                        onClick={ this.props.onConfirmClick }
                    >
                        Confirm Changes
                        <MaterialIcon iconName="send" className="right" />
                    </Btn>
                    <Btn classes={ ["red-bg"] }
                        onClick={ this.props.onCancelClick }
                    >
                        Cancel
                    </Btn>
                </Col>
            </React.Fragment>
        )
    }
}
