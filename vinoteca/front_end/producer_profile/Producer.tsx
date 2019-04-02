import * as React from "react";
import { IProducer, IRegion } from "../../lib/RestTypes";
import { Col, Row } from "../../components/Grid";
import { RegionInput } from "../../components/RegionInput";
import { ProducerInput } from "../../components/ProducerInput";
import { Btn } from "../../components/Buttons";
import { MaterialIcon } from "../../components/MaterialIcon";

interface IProducerProps {
    isEditing: boolean;
    producer: IProducer;
    onProducerChange: (val: string) => void;
    region?: IRegion;
    onRegionChange: (val: string) => void;
}

export class Producer extends React.Component<IProducerProps> {
    constructor(props: IProducerProps) {
        super(props);
        this.state = {
            isEditing: false,
        };
        this.onConfirmClick = this.onConfirmClick.bind(this);
    }

    public get regionName(): string {
        return this.props.region
            ? this.props.region.name
            : "";
    }

    public render() {
        const content = this.props.isEditing ? this.renderEdit() : this.renderView();
        return (
            <Row>
                <Col s={ 12 }>
                    { content }
                </Col>
            </Row>
        );
    }

    private renderView(): JSX.Element {
        let regionInfo: JSX.Element;
        if (this.props.region) {
            regionInfo = (
                <h4 className="light">
                    <a href={ `/regions/${this.props.region.id}` }
                         className="text-link"
                    >
                        { this.props.region.name }
                    </a>
                </h4>
            )
        } else {
            regionInfo = <h5>This producer currently does not have a region, please add one.</h5>;
        }
        return (
            <React.Fragment>
                <h3 className="bold">{ this.props.producer.name }</h3>
                { regionInfo }
            </React.Fragment>
        );
    }

    private renderEdit(): JSX.Element {
        // TODO: special chars
        // TODO: who should create empty region for producers w/o them?
        return (
            <React.Fragment>
                <h3 className="bold">{ `Edit Producer ${this.props.producer.name}` }</h3>
                <form autoComplete="off">
                    <ProducerInput value={ this.props.producer.name }
                        onChange={ this.props.onProducerChange }
                    />
                    <RegionInput value={ this.regionName }
                        onChange={ this.props.onRegionChange }
                    />
                    <Btn classes={ ["green-bg"] }
                        onClick={ this.onConfirmClick }
                    >
                        Confirm Changes
                        <MaterialIcon iconName="send" className="right" />
                    </Btn>
                    {/* TODO: cancel button */}
                </form>
            </React.Fragment>
        )
    }

    private onConfirmClick(e: React.MouseEvent) {
        e.preventDefault();
        // TODO: send edits
    }
}
