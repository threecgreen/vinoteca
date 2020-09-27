import { Btn } from "components/Buttons";
import { Col, Row } from "components/Grid";
import { Preloader } from "components/Preloader";
import { IInventoryWine } from "generated/rest";
import { getInventory, patchWine } from "lib/api/wines";
import { download, generateCSV } from "lib/csv";
import { serializeDate } from "lib/date";
import { useTitle } from "lib/hooks";
import { useLogger } from "lib/Logger";
import React from "react";
import { InventoryChange, InventoryTable } from "./InventoryTable";

const InventoryApp: React.FC<{}> = (_) => {
    const logger = useLogger("InventoryApp");
    useTitle("Inventory");

    const [wines, setWines] = React.useState<IInventoryWine[]>([]);
    const [hasLoaded, setHasLoaded] = React.useState(false);

    React.useEffect(() => {
        updateInventory();
    }, []);

    const updateInventory = async () => {
        try {
            const newInventory = await getInventory();
            setWines(newInventory);
        } catch (err) {
            logger.logError(`Failed to load inventory: ${err.message}`);
        } finally {
            setHasLoaded(true);
        }
    };

    const onInventoryChange = async (id: number, change: InventoryChange) => {
        try {
            const wine = wines.find((w) => w.id === id);
            if (wine) {
                let newInventory = wine.inventory;
                if (change === InventoryChange.Increase) {
                    newInventory += 1;
                } else if (wine.inventory > 0) {
                    newInventory -= 1;
                }
                const updatedWine = await patchWine(id, {inventory: newInventory});
                if (newInventory > 0) {
                    setWines((prevWines) => prevWines.map((w) => w.id === id
                        ? {...w, inventory: updatedWine.inventory}
                        : w));
                } else {
                    updateInventory();
                }
            }
        } catch (err) {
            logger.logWarning(`Failed to update inventory: ${err.message}`);
        }
    };
    const downloadInventory = () => {
        download(`vinoteca_inventory_${serializeDate(new Date())}.csv`,
                 generateCSV(wines, [
                     "inventory", "color", "name", "wineType", "producer", "region", "lastPurchaseVintage",
                     "lastPurchaseDate", "lastPurchasePrice",
                 ], {lastPurchasedDate: serializeDate}));
    };

    if (!hasLoaded) {
        return <Preloader />;
    }
    const table = wines.length > 0
        ? (
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
};
InventoryApp.displayName = "InventoryApp";
export default InventoryApp;
