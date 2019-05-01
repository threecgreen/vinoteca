import * as React from "react";
import { Btn } from "../../components/Buttons";
import { Col, Row } from "../../components/Grid";
import { MaterialIcon } from "../../components/MaterialIcon";
import { ProducerInput } from "../../components/ProducerInput";
import { RegionInput } from "../../components/RegionInput";
import { IProducer, IRegion } from "../../lib/RestTypes";
import { StatelessCheckboxInput } from "../../components/StatelessCheckboxInput";

interface IProducerProps {
    isEditing: boolean;
    producerText: string;
    producer: IProducer;
    onProducerChange: (val: string) => void;
    regionText: string;
    regionIsUs: boolean;
    region?: IRegion
    onRegionChange: (text: string, isUs: boolean) => void;
    onConfirmClick: (e: React.MouseEvent) => void;
    onCancelClick: (e: React.MouseEvent) => void;
}

export class Producer extends React.Component<IProducerProps> {
    constructor(props: IProducerProps) {
        super(props);
        this.state = {
            isEditing: false,
        };
        this.onRegionTextChange = this.onRegionTextChange.bind(this);
        this.onRegionIsUsClick = this.onRegionIsUsClick.bind(this);
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
                    <a href={ `/regions/${this.props.region.id}/` }
                         className="text-link"
                    >
                        { this.props.region.name }
                    </a>
                </h4>
            );
        } else {
            regionInfo = <h5>This producer currently does not have a region, please add one.</h5>;
        }
        return (
            <Col s={ 12 }>
                <h3 className="bold">{ this.props.producer.name }</h3>
                { regionInfo }
            </Col>
        );
    }

    private renderEdit(): JSX.Element {
        // TODO: special chars
        return (
            <React.Fragment>
                <Col s={ 12 }>
                    <h3 className="bold">{ `Edit Producer ${this.props.producer.name}` }</h3>
                    <form autoComplete="off">
                        <ProducerInput value={ this.props.producerText }
                            onChange={ this.props.onProducerChange }
                        />
                        <RegionInput value={ this.props.regionText }
                            onChange={ this.onRegionTextChange }
                        />
                        {/* TODO: only show if creating a new region */}
                        <StatelessCheckboxInput isChecked={ this.props.regionIsUs }
                            name={ "IsUs" }
                            text={ "Is in the U.S."}
                            onClick={ this.onRegionIsUsClick }
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

    private onRegionTextChange(val: string) {
        this.props.onRegionChange(val, this.props.regionIsUs);
    }

    private onRegionIsUsClick(e: React.ChangeEvent) {
        // e.preventDefault();
        // TODO: event -> bool translation
        this.props.onRegionChange(this.props.regionText, this.props.regionIsUs);
    }
}
