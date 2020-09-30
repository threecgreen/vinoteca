import { Btn } from "components/Buttons";
import { ErrorHandler } from "components/ErrorHandler";
import { Col, Row } from "components/Grid";
import { Preloader } from "components/Preloader";
import { getInventory, patchWine } from "lib/api/wines";
import { download, generateCSV } from "lib/csv";
import { serializeDate } from "lib/date";
import { useDescription, useTitle } from "lib/hooks";
import { useLogger } from "lib/Logger";
import React from "react";
import { InventoryChange, InventoryTable } from "./InventoryTable";
import { initState, reducer } from "./state";

const InventoryApp: React.FC = (_) => {
    const logger = useLogger("InventoryApp");
    useTitle("Inventory");
    useDescription("List of wines you currently own");

    const [state, dispatch] = React.useReducer(reducer, [], initState);

    React.useEffect(() => {
        const updateInventory = async () => {
            const winesResult = await getInventory();
            winesResult
                .do((wines) => dispatch({type: "setWines", wines}))
                .doErr((error) => dispatch({type: "setError", error}));
        };

        void updateInventory();
    }, []);

    const onInventoryChange = async (id: number, change: InventoryChange) => {
        if (!(id in state.wines)) {
            return;
        }
        const wine = state.wines[id];
        let newInventory = wine.inventory;
        if (change === InventoryChange.Increase) {
            newInventory += 1;
        } else if (wine.inventory > 0) {
            newInventory -= 1;
        }
        try {
            const updatedWine = await patchWine(id, {inventory: newInventory});
            dispatch({type: "updateWineInventory", id, inventory: updatedWine.inventory})
        } catch (err) {
            logger.logWarning(`Failed to update inventory: ${err.message}`);
        }
    };
    const downloadInventory = () => {
        download(`vinoteca_inventory_${serializeDate(new Date())}.csv`,
                 generateCSV(Object.values(state.wines), [
                     "inventory", "color", "name", "wineType", "producer", "region",
                     "lastPurchaseVintage", "lastPurchaseDate", "lastPurchasePrice",
                 ], {lastPurchasedDate: serializeDate}));
    };

    const wines = Object.values(state.wines);

    let content;
    if (state.hasLoaded) {
        if (state.error) {
            content = <ErrorHandler error={ state.error } />
        } else if (wines.length > 0) {
            content = (
                <>
                    <Btn classes={ ["green-bg"] }
                        onClick={ downloadInventory }
                    >
                        Export to CSV
                    </Btn>
                    <InventoryTable wines={ wines }
                        onInventoryChange={ onInventoryChange }
                    />
                </>
            );
        } else {
            content = <h6 className="bold center-align">Your inventory is currently empty.</h6>;
        }
    } else {
        content = <Preloader />;
    }
    return (
        <div className="container">
            <Row>
                <Col s={ 12 }>
                    <h3 className="page-title">Current inventory</h3>
                    { content }
                </Col>
            </Row>
        </div>
    );
};
InventoryApp.displayName = "InventoryApp";
export default InventoryApp;
