import React, { useState, useEffect } from "react";
import { GreenCard } from "../../components/Cards"
import { get } from "../../lib/ApiHelper";
import Logger from "../../lib/Logger";
import { PreloaderCirc } from "../../components/Preloader";
import { Table } from "../../components/Table";
import { DateCell, TextCell, NameAndTypeCell, ProducerCell, RegionCell, NumCell, PriceCell } from "../../components/TableCells";
import { Wine } from "../../lib/RestTypes";

interface IRecentPurchase {
    id: number,
    price?: number,
    quantity?: number,
    vintage?: number,
    memo?: string,
    store?: string,
    date?: number,
    wine_id: number,
    wine_name?: string,
    producer_id: number,
    producer: string,
    region_id: number,
    region: string,
    wine_type_id: number,
    wine_type: string,
}

export const RecentPurchases: React.FC<{}> = (_) => {
    const logger = new Logger(RecentPurchases.name);
    const [hasLoaded, setHasLoaded] = useState<boolean>(false);
    const [purchases, setPurchases] = useState<IRecentPurchase[]>([]);
    useEffect(() => {
        async function fetchPurchases() {
            try {
                const purchases = await get("/rest/purchases/recent");
                setPurchases(purchases);
            } catch {
                logger.logError("Error fetching recent purchases");
            } finally {
                setHasLoaded(true);
            }
        }

        fetchPurchases();
    }, [setHasLoaded, setPurchases]);

    let content;
    if (!hasLoaded) {
        content = <PreloaderCirc />;
    } else if (purchases) {
        content = (
            <Table columns={ ["Date", "Store", "Name and Type", "Producer", "Region",
                              {name: "Price", isNumCol: true}, {name: "Quantity", isNumCol: true}] }
                condensed={ false }
            >
                { purchases.map((purchase) => {
                    return (
                        <tr key={ purchase.id }>
                            <DateCell date={ purchase.date } />
                            <TextCell text={ purchase.store } />
                            <NameAndTypeCell id={ purchase.wine_id }
                                nameAndType={ Wine.getNameAndType(purchase.wine_name, purchase.wine_type) }
                            />
                            <ProducerCell id={ purchase.producer_id }>{ purchase.producer }</ProducerCell>
                            <RegionCell id={ purchase.region_id }>{ purchase.region }</RegionCell>
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
        <GreenCard title="Recent Purchases">
            { content }
        </GreenCard>
    );
}
RecentPurchases.displayName = "RecentPurchases";
