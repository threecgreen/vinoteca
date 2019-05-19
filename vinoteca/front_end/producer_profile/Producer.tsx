import * as React from "react";
import { CancelOrConfirmBtns } from "../../components/Buttons";
import { Col, Row } from "../../components/Grid";
import { ProducerInput } from "../../components/ProducerInput";
import { RegionInput } from "../../components/RegionInput";
import { IProducer, IRegion } from "../../lib/RestTypes";
import { ProducerProfileTextInput } from "./ProducerProfileApp";

interface IProducerProps {
    isEditing: boolean;
    producerText: string;
    producer: IProducer;
    onProducerChange: (val: string) => void;
    regionText: string;
    region?: IRegion
    onRegionChange: (text: string) => void;
    onTextInputFocus: (input: ProducerProfileTextInput) => void;
    onTextInputBlur: (input: ProducerProfileTextInput) => void;
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
        return (
            <React.Fragment>
                <Col s={ 12 }>
                    <h3 className="bold">{ `Edit Producer ${this.props.producer.name}` }</h3>
                    <form autoComplete="off">
                        <ProducerInput value={ this.props.producerText }
                            onChange={ this.props.onProducerChange }
                            onFocus={ () => this.props.onTextInputFocus(ProducerProfileTextInput.Producer) }
                            onBlur={ () => this.props.onTextInputBlur(ProducerProfileTextInput.Producer) }
                        />
                        <RegionInput value={ this.props.regionText }
                            onChange={ this.onRegionTextChange }
                            onFocus={ () => this.props.onTextInputFocus(ProducerProfileTextInput.Region) }
                            onBlur={ () => this.props.onTextInputBlur(ProducerProfileTextInput.Region) }
                        />
                    </form>
                </Col>
                <CancelOrConfirmBtns
                    onConfirmClick={ this.props.onConfirmClick }
                    onCancelClick={ this.props.onCancelClick }
                />
            </React.Fragment>
        )
    }

    private onRegionTextChange(val: string) {
        this.props.onRegionChange(val);
    }
}
