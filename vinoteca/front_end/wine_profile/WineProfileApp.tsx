import React from "react";
import Logger from "../../lib/Logger";
import { Wine } from "../../lib/RestTypes";
import { IPurchase, IWine, IWineGrape } from "../../lib/Rest";
import { Preloader } from "../../components/Preloader";
import { WineData } from "./WineData";
import { Col, Row } from "../../components/Grid";
import { WineImg } from "./WineImg";
import { WineHeader } from "./WineHeader";
import { put } from "../../lib/ApiHelper";
import { InventoryChange } from "../inventory/InventoryTable";
import { getWine, getPurchases } from "../../lib/RestApi";
import { imageExists } from "../../lib/utils";
import { Purchases } from "./Purchases";

interface IProps {
    id: number;
}

interface IState {
    isEditing: boolean;
    // "Pure" state
    hasImage: boolean;
    grapes: IWineGrape[];
    wine?: Wine;
    purchases: IPurchase[];
}

export class WineProfileApp extends React.Component<IProps, IState> {
    private readonly logger: Logger;

    public constructor(props: IProps) {
        super(props);
        this.state = {
            isEditing: false,
            hasImage: false, // TODO:
            grapes: [],
            wine: undefined,
            purchases: [],
        };

        this.logger = new Logger(this.constructor.name);
    }

    public async componentDidMount() {
        return Promise.all([
            this.getWine(),
            this.getPurchases(),
            this.getHasImage(),
        ]);
    }

    private async getWine() {
        const wine = await getWine({id: this.props.id});
        this.setState({ wine: new Wine(wine) });
    }

    private async getPurchases() {
        const purchases = await getPurchases({wineId: this.props.id});
        this.setState({ purchases });
    }

    private async getHasImage() {
        const hasImage = await imageExists(`/media/${this.props.id}.png`);
        this.setState({ hasImage });
    }

    public render() {
        if (!this.state.wine) {
            return <Preloader />;
        }
        if (this.state.isEditing) {
            return;
        }

        return (
            <div className="container">
                <WineHeader
                    producer={ this.state.wine.producer }
                    producerId={ this.state.wine.producerId }
                    region={ this.state.wine.region }
                    regionId={ this.state.wine.regionId }
                    wineType={ this.state.wine.wineType }
                    wineTypeId={ this.state.wine.wineTypeId }
                >
                    { this.renderWineDetails() }
                </WineHeader>
                <Row>
                    <Col s={ 12 }>
                        <Purchases purchases={ this.state.purchases } />
                    </Col>
                </Row>
            </div>
        );
    }

    private renderWineDetails() {
        if (this.state.hasImage && this.state.grapes) {
            return (
                <>
                    <Col s={ 12 } l={ 4 }>
                        { this.renderWineData() }
                    </Col>
                    <Col s={ 12 } l={ 4 }>
                        { this.renderGrapes() }
                    </Col>
                    <Col s={ 12 } l={ 4 }>
                        { this.renderWineImg() }
                    </Col>
                </>
            );
        }
        if (this.state.hasImage) {
            return (
                <>
                    <Col s={ 12 } l={ 6 }>
                        { this.renderWineData() }
                    </Col>
                    <Col s={ 12 } l={ 6 }>
                        { this.renderWineImg() }
                    </Col>
                </>
            );
        }
        if (this.state.grapes) {
            return (
                <>
                    <Col s={ 12 } l={ 6 }>
                        { this.renderWineData() }
                    </Col>
                    <Col s={ 12 } l={ 6 }>
                        { this.renderGrapes() }
                    </Col>
                </>
            );
        }
        return (
            <Col s={ 12 }>
                { this.renderWineData() }
            </Col>
        );
    }

    private renderWineData() {
        return (
            <WineData
                color={ this.state.wine!.color }
                description={ this.state.wine!.description }
                inventory={ this.state.wine!.inventory }
                onInventoryChange={ (ic) => this.onInventoryChange(ic) }
                // mostRecentVintage={ this.state.purchases }
                notes={ this.state.wine!.notes }
                rating={ this.state.wine!.rating }
                vitiArea={ this.state.wine!.vitiArea }
                vitiAreaId={ this.state.wine!.vitiAreaId }
                why={ this.state.wine!.why }
            />
        );
    }

    private async onInventoryChange(inventoryChange: InventoryChange) {
        if (this.state.wine) {
            const copy = this.state.wine;
            if (inventoryChange == InventoryChange.Increase) {
                copy.inventory += 1;
            } else {
                copy.inventory -= 1;
            }
            try {
                const newWineData = await put <IWine>("/rest/wines", copy, {id: this.props.id});
                this.setState({wine: new Wine(newWineData)});
            } catch {
                this.logger.logWarning("Failed to change inventory");
            }
        }
    }

    private renderGrapes() {
        /* TODO: Wine grapes */
        return (
            <> </>
        );
    }

    private renderWineImg() {
        return <WineImg id={ this.props.id } />;
    }
}
