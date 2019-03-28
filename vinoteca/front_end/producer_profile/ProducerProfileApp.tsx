import * as React from "react";
import { IProducer, IProducerWines, IRestModel, IRegion } from "../../lib/RestTypes";
import Logger from "../../lib/Logger";
import { getProducer, getRegion } from "../../lib/RestApi";
import { Col } from "../../components/Grid";

interface IProducerProfileAppState {
    producer?: IProducer;
    region?: IRegion;
    wines: IProducerWines[];
}

interface IProducerProfileAppProps {
    producerId: number;
}

export class ProducerProfileApp extends React.Component<IProducerProfileAppProps, IProducerProfileAppState> {
    private logger: Logger;

    constructor(props: IProducerProfileAppProps) {
        super(props);
        this.state = {
            producer: undefined,
            region: undefined,
            wines: [],
        };
        this.logger = new Logger(this.constructor.name, true);
    }

    public componentDidMount() {
        getProducer(this.props.producerId)
            .then((producer) => {
                this.setState({
                    producer,
                });
                return producer.region;
            })
            .then((regionId) => {
                return getRegion(regionId);
            })
            .then((region) => {
                this.setState({
                    region,
                });
            });
        // TODO: get producer wines
    }

    public render() {
        return (
            <div className="container">
                <Row>
                    <Col>
                    </Col>
                </Row>
            </div>
        )
    }
}