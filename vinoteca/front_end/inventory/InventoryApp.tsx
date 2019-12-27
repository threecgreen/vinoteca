import * as React from "react";
import { Col, Row } from "../../components/Grid";
import { get, post } from "../../lib/ApiHelper";
import Logger from "../../lib/Logger";
import { IWine, Wine } from "../../lib/RestTypes";
import { InventoryChange, InventoryTable } from "./InventoryTable";
import { Preloader } from "../../components/Preloader";


interface IState {
    wines: Wine[],
    hasLoaded: boolean,
}

export class InventoryApp extends React.Component<{}, IState> {
    private readonly logger: Logger;

    constructor(props: {}) {
        super(props);
        this.state = {
            hasLoaded: false,
            wines: [],
        };

        this.logger = new Logger(this.constructor.name);
    }

    public render() {
        if (!this.state.hasLoaded) {
            return <Preloader />;
        }
        const table = this.state.wines.length > 0
            ? (
                <InventoryTable wines={ this.state.wines }
                    onInventoryChange={ this.onInventoryChange.bind(this) }
                />
            ) : <h6 className="bold center-align">Your inventory is currently empty.</h6>;
        return (
            <div className="container">
                <Row>
                    <Col s={ 12 }>
                        <h3 className="page-title">Current Inventory</h3>
                        { table }
                    </Col>
                </Row>
            </div>
        );
    }

    public componentDidMount() {
        this.updateInventory();
    }

    public async onInventoryChange(e: React.MouseEvent, id: number, change: InventoryChange) {
        e.preventDefault();
        try {
            await post(`/rest/wines/${id}/change/${change == InventoryChange.Increase ? "add" : "subtract"}/`, {});
            await this.updateInventory();
        } catch (err) {
            this.setState({hasLoaded: true});
            this.logger.logWarning(err);
        }
    }

    private async updateInventory() {
        const iWines: IWine[] = await get("/rest/wines/inventory/");
        const wines = iWines.map((w) => new Wine(w));
        this.setState({wines, hasLoaded: true});
    }
}
