import React, { useEffect, useState } from "react";
import { GreenCard } from "../../components/Cards";
import { PreloaderCirc } from "../../components/Preloader";
import { Table } from "../../components/Table";
import { DateCell, NameAndTypeCell, NumCell, PriceCell, ProducerCell, RegionCell, TextCell, WineTypeCell } from "../../components/TableCells";
import { get } from "../../lib/ApiHelper";
import Logger from "../../lib/Logger";
import { IRecentPurchase } from "../../lib/Rest";

export const RecentPurchases: React.FC<{}> = (_) => {
    const logger = new Logger("RecentPurchases");
    const [hasLoaded, setHasLoaded] = useState<boolean>(false);
    const [purchases, setPurchases] = useState<IRecentPurchase[]>([]);
    useEffect(() => {
        async function fetchPurchases() {
            try {
                const purchases = await get<IRecentPurchase[]>("/rest/purchases/recent");
                setPurchases(purchases);
            } catch (e) {
                logger.logError(`Error fetching recent purchases: ${e.message}`);
            } finally {
                setHasLoaded(true);
            }
        }

        fetchPurchases();
    }, [setHasLoaded, setPurchases]);

    let content;
    if (!hasLoaded) {
        content = <PreloaderCirc />;
    } else if (purchases.length > 0) {
        content = (
            <Table columns={ ["Date", "Store", "Name and Type", "Producer", "Region",
                              {name: "Price", isNumCol: true}, {name: "Quantity", isNumCol: true}] }
                condensed={ false }
            >
                { purchases.map((purchase) => {
                    return (
                        <tr key={ purchase.id }>
                            <DateCell date={ purchase.date }
                                format="MMM dd"
                            />
                            <TextCell text={ purchase.store } />
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
                            <PriceCell price={ purchase.price } />
                            <NumCell num={ purchase.quantity } />
                        </tr>
                    );
                }) }
            </Table>
        );
    } else {
        content = <h6 className="bold">No purchases yet</h6>;
    }
    return (
        <GreenCard title="Recent purchases">
            { content }
        </GreenCard>
    );
}
RecentPurchases.displayName = "RecentPurchases";
