import * as React from "react";
import { Col, Row } from "../../components/Grid";
import { Preloader } from "../../components/Preloader";
import Logger from "../../lib/Logger";
import { getProducer, getRegion } from "../../lib/RestApi";
import { IProducer, IProducerWines, IRegion } from "../../lib/RestTypes";
import { Producer } from "./Producer";

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
        this.onProducerChange = this.onProducerChange.bind(this);
        this.onRegionChange = this.onRegionChange.bind(this);
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
        if (!this.state.producer) {
            return <Preloader />;
        }
        return (
            <div className="container">
                <Row>
                    <Col>
                        <Producer producer={ this.state.producer }
                            onProducerChange={ this.onProducerChange }
                            region={ this.state.region }
                            onRegionChange={ this.onRegionChange }
                        />
                    </Col>
                </Row>
            </div>
        )
    }

    private onProducerChange(val: string) {
        this.setState((state) => {
            if (state.producer) {
                return {
                    producer: {
                        id: state.producer.id,
                        region: state.producer.region,
                        name: val,
                    },
                    ...state
                };
            }
            this.logger.logWarning(`Tried to update undefined producer with value '${val}'`);
            return state;
        })
    }

    private onRegionChange(val: string) {
        this.setState((state) => {
            if (state.region) {
                return {
                    region: {
                        id: state.region.id,
                        is_us: state.region.is_us,
                        name: val,
                    },
                    ...state
                };
            }
            return {
                region: {
                    id: -1,
                    // TODO: have a checkbox for this
                    is_us: false,
                    name: val,
                },
                ...state
            };
        })
    }
}