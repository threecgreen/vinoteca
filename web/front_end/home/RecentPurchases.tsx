import { GreenCard } from "components/Cards";
import { PreloaderCirc, SpinnerColor } from "components/Preloader";
import { SimpleTable } from "components/Table";
import {
    DateCell, NameAndTypeCell, NumCell, PriceCell, ProducerCell, RegionCell, TextCell
} from "components/TableCells";
import { IRecentPurchase } from "generated/rest";
import { getRecentPurchases } from "lib/api/purchases";
import { useLogger } from "lib/Logger";
import React, { useEffect, useState } from "react";

const RecentPurchases: React.FC = (_) => {
    const logger = useLogger("RecentPurchases");
    const [hasLoaded, setHasLoaded] = useState<boolean>(false);
    const [purchases, setPurchases] = useState<IRecentPurchase[]>([]);
    useEffect(() => {
        async function fetchPurchases() {
            try {
                const updatedPurchases = await getRecentPurchases();
                setPurchases(updatedPurchases);
            } catch (e) {
                logger.logError(`Error fetching recent purchases: ${e.message}`);
            } finally {
                setHasLoaded(true);
            }
        }

        void fetchPurchases();
    }, [logger, setHasLoaded, setPurchases]);

    let content;
    if (!hasLoaded) {
        content = <PreloaderCirc color={ SpinnerColor.WineRed } />;
    } else if (purchases.length > 0) {
        content = (
            <SimpleTable columns={ ["Date", "Name and Type", "Producer", "Region", "Store",
                                    {name: "Price", isNumCol: true},
                                    {name: "Quantity", isNumCol: true}] }
                condensed={ false }
            >
                { purchases.map((purchase) => {
                    return (
                        <tr key={ purchase.id }>
                            <DateCell date={ purchase.date }
                                format="MMM dd"
                            />
                            <NameAndTypeCell id={ purchase.wineId }
                                name={ purchase.wineName }
                                wineType={ purchase.wineType }
                            />
                            <ProducerCell id={ purchase.producerId }
                                name={ purchase.producer }
                            />
                            <RegionCell id={ purchase.regionId }
                                name={ purchase.region }
                            />
                            <TextCell text={ purchase.store } />
                            <PriceCell price={ purchase.price } />
                            <NumCell num={ purchase.quantity } />
                        </tr>
                    );
                }) }
            </SimpleTable>
        );
    } else {
        content = <h6 className="bold">No purchases yet</h6>;
    }
    return (
        <GreenCard title="Recent purchases">
            { content }
        </GreenCard>
    );
};
RecentPurchases.displayName = "RecentPurchases";
export default RecentPurchases;
