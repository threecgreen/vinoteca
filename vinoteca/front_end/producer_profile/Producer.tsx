import * as React from "react";
import { IProducer, IRegion } from "../../lib/RestTypes";
import { Col, Row } from "../../components/Grid";
import { StatelessTextInput } from "../../components/StatelessTextInput";

interface IProducerProps {
    producer: IProducer;
    region?: IRegion;
}

interface IProducerState {
    isEditing: boolean;
}

export class Producer extends React.Component<IProducerProps, IProducerState> {
    constructor(props: IProducerProps) {
        super(props);
        this.state = {
            isEditing: false,
        };
    }

    public render() {
        const content = this.state.isEditing ? this.renderEdit() : this.renderView();
        return (
            <Row>
                <Col s={ 12 }>
                    { content }
                </Col>
            </Row>
        );
    }

    private renderView(): JSX.Element {
        // TODO: edit button
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
                <h3 className="light">{ `Edit Producer ${this.props.producer.name}` }</h3>
                <form autocomplete="off">
                    <StatelessTextInput name="Producer"
                        text={ this.props.producer.name }
                        className=""
                        onChange={ () => undefined }
                        s={ 6 } l={ 3 }
                    />
                    <StatelessTextInput name="Region"
                        text={ this.props.region.name }
                </form>
            </React.Fragment>
        )
    }
}
