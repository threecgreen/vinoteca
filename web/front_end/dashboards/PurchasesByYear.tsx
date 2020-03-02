import React from "react";
import { GreenCard, RedCard } from "../../components/Cards";
import Logger from "../../lib/Logger";
import { get } from "../../lib/ApiHelper";
import { PreloaderCirc } from "../../components/Preloader";
import { LineChart } from "../../components/Chart";
import { IYearsPurchases } from "../../lib/Rest";
import { Table } from "../../components/Table";
import { YearCell, NumCell, PriceCell } from "../../components/TableCells";

const usePurchasesByYear = (logger: Logger): [boolean, IYearsPurchases[]] => {
    const [hasLoaded, setHasLoaded] = React.useState<boolean>(false);
    const [yearsPurchases, setYearsPurchases] = React.useState<IYearsPurchases[]>([]);
    React.useEffect(() => {
        async function fetchYearsPurchases() {
            try {
                const yearsPurchases = await get<IYearsPurchases[]>("/rest/purchases/by-year");
                setYearsPurchases(yearsPurchases);
            } catch (e) {
                logger.logError(`Error fetching purchases by year: ${e.message}`);
            } finally {
                setHasLoaded(true);
            }
        }

        fetchYearsPurchases();
    }, [setHasLoaded, setYearsPurchases]);

    return [hasLoaded, yearsPurchases];
}

export const PurchasesByYearGraph: React.FC<{}> = (_) => {
    const logger = new Logger(PurchasesByYearGraph.name);
    const [hasLoaded, yearsPurchases] = usePurchasesByYear(logger);

    let content;
    if (!hasLoaded) {
        content = <PreloaderCirc />;
    } else if (yearsPurchases.length > 1) {
        content = (
            <LineChart data={[
                    yearsPurchases.map((y) => ({ label: `${y.year}`, value: y.quantity })),
                    yearsPurchases.map((y) => ({ label: `${y.year}`, value: y.totalPrice ?? 0.0 })),
                    yearsPurchases.map((y) => ({ label: `${y.year}`, value: y.avgPrice ?? 0.0 }))
                ]}
                seriesLabels={["Bottle", "Total Spent", "Avg Price"]}
            />
        );
    } else {
        content = <h6 className="bold">Insufficient purchases</h6>;
    }
    return (
        <GreenCard title="Purchases by year | graph">
            {content}
        </GreenCard>
    );
}
PurchasesByYearGraph.displayName = PurchasesByYearGraph.name;

export const PurchasesByYearTable: React.FC<{}> = (_) => {
    const logger = new Logger(PurchasesByYearTable.name);
    const [hasLoaded, yearsPurchases] = usePurchasesByYear(logger);

    let content;
    if (!hasLoaded) {
        content = <PreloaderCirc />;
    } else if (yearsPurchases.length > 0) {
        content = (
            <Table columns={["Year",
                             {name: "Bottles", isNumCol: true},
                             {name: "Total Spent", isNumCol: true},
                             {name: "Avg Price", isNumCol: true} ]}
            >
                { yearsPurchases.map((year) =>
                    <tr key={ year.year }>
                        <YearCell year={ year.year } />
                        <NumCell num={ year.quantity } maxDecimals={ 0 } />
                        <PriceCell price={ year.totalPrice } />
                        <PriceCell price={ year.avgPrice } />
                    </tr>
                )}
            </Table>
        );
    } else {
        content = <h6 className="bold">No purchases</h6>;
    }
    return (
        <RedCard title="Purchases by year | table">
            { content }
        </RedCard>
    );
}