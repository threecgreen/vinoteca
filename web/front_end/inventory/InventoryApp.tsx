import { RouteComponentProps } from "@reach/router";
import format from "date-fns/esm/format";
import React from "react";
import { Btn } from "../../components/Buttons";
import { Col, Row } from "../../components/Grid";
import { Preloader } from "../../components/Preloader";
import { get } from "../../lib/ApiHelper";
import { download, generateCSV } from "../../lib/CSV";
import Logger from "../../lib/Logger";
import { IInventoryWine } from "../../lib/Rest";
import { partUpdateWine } from "../../lib/RestApi";
import { numToDate } from "../../lib/utils";
import { setTitle, navbar, deactivateNavbarTab } from "../../lib/widgets";
import { InventoryChange, InventoryTable } from "./InventoryTable";

interface IState {
    wines: IInventoryWine[],
    hasLoaded: boolean,
}

export class InventoryApp extends React.Component<RouteComponentProps, IState> {
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
                <>
                    <Btn classes={ ["green-bg"] }
                        onClick={ this.downloadInventory.bind(this) }
                    >
                        Export to CSV
                    </Btn>
                    <InventoryTable wines={ this.state.wines }
                        onInventoryChange={ this.onInventoryChange.bind(this) }
                    />
                </>
            ) : <h6 className="bold center-align">Your inventory is currently empty.</h6>;
        return (
            <div className="container">
                <Row>
                    <Col s={ 12 }>
                        <h3 className="page-title">Current inventory</h3>
                        { table }
                    </Col>
                </Row>
            </div>
        );
    }

    public componentDidMount() {
        setTitle("Inventory");
        navbar("inventory");
        this.updateInventory();
    }

    public componentWillUnmount() {
        deactivateNavbarTab("inventory");
    }

    public async onInventoryChange(id: number, change: InventoryChange) {
        try {
            const wine = this.state.wines.find((w) => w.id === id);
            if (wine) {
                let newInventory = wine.inventory;
                if (change === InventoryChange.Increase) {
                    newInventory += 1;
                } else if (wine.inventory > 0) {
                    newInventory -= 1;
                }
                const updatedWine = await partUpdateWine(id, {inventory: newInventory});
                if (newInventory > 0) {
                    this.setState((prevState, _) => ({
                        ...prevState,
                        wines: prevState.wines.map((w) => w.id === id ? {...w, inventory: updatedWine.inventory} : w)
                    }));
                } else {
                    this.updateInventory();
                }
            }
        } catch (err) {
            this.setState({hasLoaded: true});
            this.logger.logWarning(`Failed to update inventory: ${err.message}`);
        }
    }

    private async updateInventory() {
        try {
            const wines: IInventoryWine[] = await get("/rest/wines/inventory");
            this.setState({wines, hasLoaded: true});
        } catch (err) {
            this.setState({hasLoaded: true});
            this.logger.logError(`Failed to load inventory`);
        }
    }

    private downloadInventory() {
        download(`vinoteca_inventory_${format(new Date(), 'yyyy-MM-dd')}.csv`,
                 generateCSV(this.state.wines, [
                     "inventory", "color", "name", "wineType", "producer", "region", "lastPurchaseVintage",
                     "lastPurchaseDate", "lastPurchasePrice"
                 ], {"lastPurchasedDate": (date: number) => format(numToDate(date), 'yyyy-MM-dd')}));
    }
}
