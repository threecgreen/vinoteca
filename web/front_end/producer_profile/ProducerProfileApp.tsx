import { navigate } from "@reach/router";
import React from "react";
import { FloatingBtn } from "../../components/Buttons";
import { FixedActionList } from "../../components/FixedActionList";
import { Col, Row } from "../../components/Grid";
import { MaterialIcon } from "../../components/MaterialIcon";
import { DeleteModal } from "../../components/Modal";
import { Preloader } from "../../components/Preloader";
import { ColumnToExclude, WinesTable } from "../../components/WinesTable";
import Logger from "../../lib/Logger";
import { IProducer, IRegion, IWine } from "../../lib/Rest";
import { deleteProducer, EmptyResultError, getProducer, getRegion, getWines, updateProducer } from "../../lib/RestApi";
import { setTitle } from "../../lib/widgets";
import { Producer } from "./Producer";

export enum ProducerProfileTextInput {
    Producer,
    Region,
};

interface IProducerProfileAppState {
    isEditing: boolean;
    showDeleteModal: boolean;
    lastActiveTextInput?: ProducerProfileTextInput;
    // Editable fields
    producerText: string;
    regionText: string;
    // "Pure" state, only mutated on successful changes sent to server
    producer?: IProducer;
    region?: IRegion;
    wines: IWine[];
}

interface IProducerProfileAppProps {
    producerId: number;
}

export default class ProducerProfileApp extends React.Component<IProducerProfileAppProps, IProducerProfileAppState> {
    private logger: Logger;

    constructor(props: IProducerProfileAppProps) {
        super(props);
        this.state = {
            isEditing: false,
            showDeleteModal: false,
            producerText: "",
            regionText: "",
            producer: undefined,
            region: undefined,
            wines: [],
        };
        this.logger = new Logger("ProducerProfileApp");
        this.onEditClick = this.onEditClick.bind(this);
        this.onProducerChange = this.onProducerChange.bind(this);
        this.onRegionChange = this.onRegionChange.bind(this);
        this.onConfirmClick = this.onConfirmClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
        this.onShowDeleteModalClick = this.onShowDeleteModalClick.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    public async componentDidMount() {
        setTitle(this.state.producer?.name ?? "Producer profile");
        try {
            const [_, wines] = await Promise.all([
                this.getCurrentProducerData(),
                getWines({producerId: this.props.producerId}),
            ]);
            this.setState({wines: wines});
        } catch (e) {
            this.logger.logWarning(`Failed to load producer: ${e.message}`, {id: this.props.producerId});
        }
    }

    public render() {
        if (!this.state.producer) {
            return <Preloader />;
        }
        const modal = this.state.showDeleteModal
            ? <DeleteModal item="producer"
                onNoClick={ () => this.setState({showDeleteModal: false}) }
                onYesClick={ this.onDeleteClick }
            /> : null;
        return (
            <div className="container">
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
                <Row>
                    <Col s={ 12 } l={ 9 }>
                        <h5>Wines</h5>
                    </Col>
                    <Col s={ 12 } l={ 3 } classes={ ["fixed-action-div"] }>
                        <FixedActionList>
                            <FloatingBtn onClick={ this.onEditClick }
                                classes={ ["yellow-bg"] }
                            >
                                <MaterialIcon iconName="edit" />
                            </FloatingBtn>
                            <FloatingBtn onClick={ this.onShowDeleteModalClick }
                                classes={ ["red-bg"] }
                            >
                                <MaterialIcon iconName="delete" />
                            </FloatingBtn>
                        </FixedActionList>
                    </Col>
                    <Col s={ 12 }>
                        <WinesTable wines={ this.state.wines }
                            excludeColumn={ ColumnToExclude.Producer }
                        />
                    </Col>
                </Row>
                { modal }
            </div>
        );
    }

    private onEditClick() {
        this.setState({isEditing: true});
    }

    /**
     * Gets the current state of the producer and its region on the server side
     * and updates state.
     */
    private async getCurrentProducerData() {
        try {
            const producer = await getProducer({id: this.props.producerId});
            this.setState({
                producer: producer,
                producerText: producer.name,
            });
            const region = await getRegion({id: producer.regionId});
            this.setState({
                region,
                regionText: region.name
            });
        } catch (e) {
            this.logger.logWarning(`Error getting producer data: ${e.message}`);
        }
    }

    private onProducerChange(val: string) {
        this.setState({producerText: val});
    }

    private onRegionChange(text: string) {
        this.setState({regionText: text});
    }

    private async onConfirmClick() {
        try {
            const [regionChanged, regionId] = await this.handleRegionChanges();
            if (this.state.producer
                && (this.state.producerText !== this.state.producer.name || regionChanged)) {

                this.updateProducer(regionId === -1 ? null! : regionId);
            }
        } catch (err) {
            this.logger.logWarning(`Failed to save changes to the database: ${err.message}`);
        }
    }

    private async handleRegionChanges(): Promise<[boolean, number]> {
        if ((this.state.regionText && !this.state.region)
            || (this.state.region && this.state.regionText !== this.state.region.name)) {

            // TODO: limit region to set values
            try {
                const region = await getRegion({name: this.state.regionText});
                this.setState({
                    region,
                    regionText: region.name,
                });
                return [true, region.id];
            } catch (err) {
                if (EmptyResultError.isInstance(err)) {
                    this.logger.logWarning("Invalid region while trying to edit producer",
                                           {producer: this.state.producerText,
                                            region: this.state.regionText});
                } else {
                    this.logger.logError("Error fetching region",
                                         {errorMsg: err.message,
                                          region: this.state.regionText,
                                          producer: this.state.producerText});
                }
                throw err;
            }
        }
        if (this.state.region) {
            return[false, this.state.region.id];
        }
        return [false, -1];
    }

    private async updateProducer(regionId: number) {
        const producer = await updateProducer({
            id: this.state.producer!.id,
            name: this.state.producerText,
            regionId: regionId,
        });
        this.setState({
            producer: producer,
            producerText: producer.name,
            isEditing: false,
        })
    }

    private onCancelClick() {
        this.setState((state) => ({
            isEditing: false,
            producerText: state.producer ? state.producer.name : "",
            regionText: state.region ? state.region.name : "",
        }));
    }

    private onShowDeleteModalClick() {
        this.setState({showDeleteModal: true});
    }

    private async onDeleteClick() {
        try {
            await deleteProducer(this.props.producerId!);
            // Redirect home
            navigate("/");
        } catch (ex) {
            this.logger.logWarning(`Failed to delete producer with id ${this.props.producerId}`
                                   + ` with exception: ${ex.message}`);
        }
    }
}
