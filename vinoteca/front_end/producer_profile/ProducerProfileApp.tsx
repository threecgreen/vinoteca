import * as React from "react";
import { Col, Row } from "../../components/Grid";
import { Preloader } from "../../components/Preloader";
import Logger from "../../lib/Logger";
import { getProducer, getRegion, getWines } from "../../lib/RestApi";
import { IProducer, IRegion, Wine } from "../../lib/RestTypes";
import { Producer } from "./Producer";
import { FixedActionList } from "../../components/FixedActionList";
import { ProducerWinesTable } from "./ProducerWinesTable";
import { FloatingBtn } from "../../components/Buttons";
import { MaterialIcon } from "../../components/MaterialIcon";
import { put } from "../../lib/ApiHelper";
import { StatelessSelectInput } from "../../components/StatelessSelectInput";

interface IProducerProfileAppState {
    isEditing: boolean;
    producer?: IProducer;
    region?: IRegion;
    wines: Wine[];
}

interface IProducerProfileAppProps {
    producerId: number;
}

export class ProducerProfileApp extends React.Component<IProducerProfileAppProps, IProducerProfileAppState> {
    private logger: Logger;

    constructor(props: IProducerProfileAppProps) {
        super(props);
        this.state = {
            isEditing: false,
            producer: undefined,
            region: undefined,
            wines: [],
        };
        this.logger = new Logger(this.constructor.name, true);
        this.onEditClick = this.onEditClick.bind(this);
        this.onProducerChange = this.onProducerChange.bind(this);
        this.onRegionChange = this.onRegionChange.bind(this);
        this.onConfirmClick = this.onConfirmClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
    }

    public componentDidMount() {
        this.getCurrentProducerData();
        getWines({producerId: this.props.producerId})
            .then((wines) => {
                this.setState({wines: wines.map(w => new Wine(w))});
            });
    }

    public render() {
        if (!this.state.producer) {
            return <Preloader />;
        }
        return (
            <div className="container">
                <Row>
                    <Col s={ 12 }>
                        <Producer isEditing={ this.state.isEditing }
                            producer={ this.state.producer }
                            onProducerChange={ this.onProducerChange }
                            region={ this.state.region }
                            onRegionChange={ this.onRegionChange }
                            onConfirmClick={ this.onConfirmClick }
                            onCancelClick={ this.onCancelClick }
                        />
                    </Col>
                </Row>
                <Row>
                    <Col s={ 12 } l={ 9 }>
                        <h4>Wines</h4>
                    </Col>
                    <Col s={ 12 } l={ 3 } classes={ ["fixed-action-div"] }>
                        <FixedActionList>
                            <FloatingBtn onClick={ this.onEditClick }
                                classes={ ["yellow-bg"] }
                            >
                                <MaterialIcon iconName="edit" />
                            </FloatingBtn>
                        </FixedActionList>
                    </Col>
                    <Col s={ 12 }>
                        <ProducerWinesTable wines={ this.state.wines } />
                    </Col>
                </Row>
            </div>
        );
    }

    private onEditClick() {
        this.setState({
            isEditing: true,
        });
    }

    private async getCurrentProducerData() {
        getProducer({id: this.props.producerId})
            .then((producer) => {
                this.setState({producer});
                return producer.region;
            })
            .then((regionId) => {
                return getRegion({id: regionId});
            })
            .then((region) => {
                this.setState({region});
            });
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
        });
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
        });
    }

    private onConfirmClick(e: React.MouseEvent) {
        e.preventDefault();
        this.setState({ isEditing: false });
        put(`/rest/producers/${this.props.producerId}/`,
            {id: this.props.producerId, name: this.state.producer!.name,
             region_id: this.state.producer!.region})
            .catch((e) => {
                this.logger.logError(`Failed to save producer changes with id `
                                     + `${this.props.producerId} and error ${e}`);
            });
    }

    private onCancelClick(e: React.MouseEvent) {
        e.preventDefault();
        this.getCurrentProducerData();
    }
}