import { Link } from "@reach/router";
import React from "react";
import { CancelOrConfirmBtns } from "../../components/Buttons";
import { Form } from "../../components/Form";
import { Col, Row } from "../../components/Grid";
import { ProducerInput } from "../../components/ProducerInput";
import { RegionInput } from "../../components/RegionInput";
import { IProducer, IRegion } from "../../lib/Rest";

interface IProducerProps {
    isEditing: boolean;
    producerText: string;
    producer: IProducer;
    onProducerChange: (val: string) => void;
    regionText: string;
    region?: IRegion
    onRegionChange: (text: string) => void;
    onConfirmClick: () => Promise<void>;
    onCancelClick: () => void;
}

export class Producer extends React.Component<IProducerProps> {
    constructor(props: IProducerProps) {
        super(props);
        this.state = {
            isEditing: false,
        };
        this.onRegionTextChange = this.onRegionTextChange.bind(this);
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
        let regionInfo: JSX.Element | null;
        if (this.props.region) {
            regionInfo = (
                <h4 className="light">
                    <Link to={ `/regions/${this.props.region.id}/` }
                         className="text-link"
                    >
                        { this.props.region.name }
                    </Link>
                </h4>
            );
        } else {
            regionInfo = null;
        }
        return (
            <Col s={ 12 }>
                <h3 className="bold">{ this.props.producer.name }</h3>
                { regionInfo }
            </Col>
        );
    }

    private renderEdit(): JSX.Element {
        return (
            <>
                <Col s={ 12 }>
                    <h3 className="bold">{ `Edit Producer ${this.props.producer.name}` }</h3>
                    <Form>
                        <ProducerInput value={ this.props.producerText }
                            onChange={ this.props.onProducerChange }
                        />
                        <RegionInput value={ this.props.regionText }
                            onChange={ this.onRegionTextChange }
                        />
                    </Form>
                </Col>
                <CancelOrConfirmBtns
                    onConfirmClick={ this.props.onConfirmClick }
                    onCancelClick={ this.props.onCancelClick }
                />
            </>
        );
    }

    private onRegionTextChange(val: string) {
        this.props.onRegionChange(val);
    }
}
