import * as React from "react";
import { FloatingBtn } from "../../components/Buttons";
import { FixedActionList } from "../../components/FixedActionList";
import { Col, Row } from "../../components/Grid";
import { MaterialIcon } from "../../components/MaterialIcon";
import { Preloader } from "../../components/Preloader";
import { SimpleSpecialChars } from "../../components/SimpleSpecialChars";
import Logger from "../../lib/Logger";
import { createRegion, EmptyResultError, getProducer, getRegion, getWines, updateProducer } from "../../lib/RestApi";
import { IProducer, IRegion, Wine } from "../../lib/RestTypes";
import { Producer } from "./Producer";
import { ProducerWinesTable } from "./ProducerWinesTable";

export enum ProducerProfileTextInput {
    Producer,
    Region,
};

interface IProducerProfileAppState {
    isEditing: boolean;
    lastActiveTextInput?: ProducerProfileTextInput;
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
        this.logger = new Logger(this.constructor.name, false);
        this.onEditClick = this.onEditClick.bind(this);
        this.onProducerChange = this.onProducerChange.bind(this);
        this.onRegionChange = this.onRegionChange.bind(this);
        this.onSpecialCharClick = this.onSpecialCharClick.bind(this);
        this.onConfirmClick = this.onConfirmClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
    }

    public async componentDidMount() {
        this.getCurrentProducerData();
        const wines = await getWines({producerId: this.props.producerId})
        this.setState({wines: wines.map(w => new Wine(w))});
    }

    public render() {
        if (!this.state.producer) {
            return <Preloader />;
        }
        return (
            <div className="container">
                <Producer isEditing={ this.state.isEditing }
                    producer={ this.state.producer }
                    producerText={ this.state.producerText }
                    onProducerChange={ this.onProducerChange }
                    region={ this.state.region }
                    regionText={ this.state.regionText }
                    onRegionChange={ this.onRegionChange }
                    onSpecialCharClick={ this.onSpecialCharClick }
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
        this.setState({isEditing: true});
    }

    /**
     * Gets the current state of the producer and its region on the server side
     * and updates state.
     */
    private async getCurrentProducerData() {
        const producer = await getProducer({id: this.props.producerId});
        this.setState({
            producer: producer,
            producerText: producer.name,
        });
        const region = await getRegion({id: producer.region});
        this.setState({
            region,
            regionText: region.name
        });
    }

    private onProducerChange(val: string) {
        this.setState({producerText: val});
    }

    private onRegionChange(text: string) {
        this.setState({regionText: text});
    }

    private onSpecialCharClick(input: ProducerProfileTextInput, char: string, position: number) {
        switch (input) {
            case ProducerProfileTextInput.Producer:
                return this.setState((prevState) => ({
                    producerText: SimpleSpecialChars.insertCharAt(prevState.producerText, char, position),
                }));
            case ProducerProfileTextInput.Region:
                return this.setState((prevState) => ({
                    regionText: SimpleSpecialChars.insertCharAt(prevState.regionText, char, position),
                }));
            default:
                this.logger.logError("The special char controller should not be displayed"
                                     + " before a text input has come into focus.");
        }
    }

    private async onConfirmClick(e: React.MouseEvent) {
        e.preventDefault();
        try {
            const [regionChanged, regionId] = await this.handleRegionChanges();
            if (this.state.producer
                && (this.state.producerText !== this.state.producer.name || regionChanged)) {

                this.updateProducer(regionId === -1 ? null! : regionId);
            }
        } catch (err) {
            this.logger.logWarning(`Failed to save changes to the database: ${err}`);
        }
    }

    private async handleRegionChanges(): Promise<[boolean, number]> {
        if ((this.state.regionText && !this.state.region)
            || (this.state.region && this.state.regionText !== this.state.region.name)) {

            // Try Get
            try {
                const region = await getRegion({name: this.state.regionText});
                this.setState({
                    region,
                    regionText: region.name,
                });
                return [true, region.id];
            } catch (err) {
                if (EmptyResultError.isInstance(err)) {
                    // Create
                    const region = await createRegion({ name: this.state.regionText})
                    this.setState({
                        region,
                        regionText: region.name,
                    });
                    return [true, region.id];
                }
                return Promise.reject("Unknown error");
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
            region: regionId!,
        });
        this.setState({
            producer: producer,
            producerText: producer.name,
            isEditing: false,
        })
    }

    private onCancelClick(e: React.MouseEvent) {
        e.preventDefault();
        this.setState((state) => ({
            isEditing: false,
            producerText: state.producer ? state.producer.name : "",
            regionText: state.region ? state.region.name : "",
        }));
    }
}
