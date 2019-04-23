import * as React from "react";
import { FloatingBtn } from "../../components/Buttons";
import { FixedActionList } from "../../components/FixedActionList";
import { Col, Row } from "../../components/Grid";
import { MaterialIcon } from "../../components/MaterialIcon";
import { Preloader } from "../../components/Preloader";
import { put } from "../../lib/ApiHelper";
import Logger from "../../lib/Logger";
import { getProducer, getRegion, getWines } from "../../lib/RestApi";
import { IProducer, IRegion, Wine } from "../../lib/RestTypes";
import { Producer } from "./Producer";
import { ProducerWinesTable } from "./ProducerWinesTable";
import { RegionInput } from "../../components/RegionInput";

interface IProducerProfileAppState {
    isEditing: boolean;
    producer: string;
    region: string;
    producerObj?: IProducer;
    regionObj?: IRegion;
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
            producer: "",
            region: "",
            producerObj: undefined,
            regionObj: undefined,
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
                            regionId={ this.state.regionObj ? this.state.regionObj.id : undefined }
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
                this.setState({
                    producerObj: producer,
                    producer: producer.name,
                });
                return producer.region;
            })
            .then((regionId) => {
                return getRegion({id: regionId});
            })
            .then((region) => {
                this.setState({
                    regionObj: region,
                    region: region.name,
                });
            });
    }

    private onProducerChange(val: string) {
        this.setState({
            producer: val,
        });
    }

    private onRegionChange(val: string) {
        this.setState({
            region: val,
        });
    }

    private onConfirmClick(e: React.MouseEvent) {
        // TODO: send PUT and GET region id of region (if changed), set regionId
        // and new producer name and then send PUT for producer
        e.preventDefault();
    }

    private onCancelClick(e: React.MouseEvent) {
        e.preventDefault();
        this.getCurrentProducerData();
    }
}