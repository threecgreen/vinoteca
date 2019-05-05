import * as React from "react";
import { FloatingBtn } from "../../components/Buttons";
import { FixedActionList } from "../../components/FixedActionList";
import { Col, Row } from "../../components/Grid";
import { MaterialIcon } from "../../components/MaterialIcon";
import { Preloader } from "../../components/Preloader";
import Logger from "../../lib/Logger";
import { getProducer, getRegion, getWines, createRegion, updateProducer, EmptyResultError } from "../../lib/RestApi";
import { IProducer, IRegion, Wine } from "../../lib/RestTypes";
import { Producer } from "./Producer";
import { ProducerWinesTable } from "./ProducerWinesTable";

interface IProducerProfileAppState {
    isEditing: boolean;
    // Editable fields
    producerText: string;
    regionText: string;
    // "Pure" state, only mutated on successful changes sent to server
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
            producerText: "",
            regionText: "",
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
                            producerText={ this.state.producerText }
                            onProducerChange={ this.onProducerChange }
                            region={ this.state.region }
                            regionText={ this.state.regionText }
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

    /**
     * Gets the current state of the producer and its region on the server side
     * and updates state.
     */
    private async getCurrentProducerData() {
        getProducer({id: this.props.producerId})
            .then((producer) => {
                this.setState({
                    producer: producer,
                    producerText: producer.name,
                });
                return producer.region;
            })
            .then((regionId) => {
                return getRegion({id: regionId});
            })
            .then((region) => {
                this.setState({
                    region: region,
                    regionText: region.name,
                });
            });
    }

    private onProducerChange(val: string) {
        this.setState({
            producerText: val,
        });
    }

    private onRegionChange(text: string) {
        this.setState({
            regionText: text,
        });
    }

    private onConfirmClick(e: React.MouseEvent) {
        e.preventDefault();
        this.handleRegionChanges()
            .then(([regionChanged, regionId]) => {
                if (this.state.producer
                    && (this.state.producerText !== this.state.producer.name || regionChanged)) {

                    this.updateProducer(regionId === -1 ? null! : regionId);
                }
            }).catch((err) => {
                this.logger.logWarning(`Failed to save changes to the database: ${err}`);
            });
    }

    private async handleRegionChanges(): Promise<[boolean, number]> {
        if ((this.state.regionText && !this.state.region)
            || (this.state.region && this.state.regionText !== this.state.region.name)) {

            // Try Get
            // TODO: REFACTOR this
            return getRegion({name: this.state.regionText})
                .then((region) => {
                    this.setState({
                        region,
                        regionText: region.name,
                    });
                    return [true, region.id];
                })
                .catch(async (err) => {
                    if (EmptyResultError.isInstance(err)) {
                        // Create
                        return createRegion({ name: this.state.regionText})
                            .then((region) => {
                                this.setState({
                                    region,
                                    regionText: region.name,
                                });
                                return [true, region.id];
                            });
                    }
                    return Promise.reject("Unknown error");
                }) as Promise<[boolean, number]>;
        }
        if (this.state.region) {
            return[false, this.state.region.id];
        }
        return [false, -1];
    }

    private updateProducer(regionId: number) {
        updateProducer({
            id: this.state.producer!.id,
            name: this.state.producerText,
            region: regionId!,
        }).then((producer) => {
            this.setState({
                producer: producer,
                producerText: producer.name,
                isEditing: false,
            })
        });
    }

    private onCancelClick(e: React.MouseEvent) {
        e.preventDefault();
        this.setState({
            isEditing: false,
        });
    }
}