import * as React from "react";
import { Wine, IWine } from "../../lib/RestTypes";
import { Col, Row } from "../../components/Grid";
import { InventoryChange, InventoryTable,  } from "./InventoryTable";
import { get } from "../../lib/ApiHelper";
import Logger from "../../lib/Logger";


interface IState {
    wines: Wine[]
}

export class InventoryApp extends React.Component<{}, IState> {
    private readonly logger: Logger;

    constructor(props: {}) {
        super(props);
        this.state = {
            wines: [],
        };

        this.logger = new Logger(this.constructor.name);
    }

    public render() {
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
        // TODO: this should be a post request
        try {
            await get(`/rest/wines/${id}/change/${change == InventoryChange.Increase ? "add" : "subtract"}/`);
        } catch (err) {
            this.logger.logWarning(err);
        }
        this.updateInventory();
    }

    private async updateInventory() {
        const iWines: IWine[] = await get("/rest/wines/inventory/");
        const wines = iWines.map((w) => new Wine(w));
        this.setState({wines});
    }
}
