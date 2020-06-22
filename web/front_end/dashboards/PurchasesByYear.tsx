import React from "react";
import { GreenCard, RedCard } from "../../components/Cards";
import { LineChart } from "../../components/Chart";
import { PreloaderCirc, SpinnerColor } from "../../components/Preloader";
import { SimpleTable } from "../../components/Table";
import { NumCell, PriceCell, YearCell } from "../../components/TableCells";
import { getPurchasesByYear } from "../../lib/api/purchases";
import { IYearsPurchases } from "../../lib/api/Rest";
import Logger, { useLogger } from "../../lib/Logger";

const usePurchasesByYear = (logger: Logger): [boolean, IYearsPurchases[]] => {
    const [hasLoaded, setHasLoaded] = React.useState<boolean>(false);
    const [yearsPurchases, setYearsPurchases] = React.useState<IYearsPurchases[]>([]);
    React.useEffect(() => {
        async function fetchYearsPurchases() {
            try {
                const yearsPurchases = await getPurchasesByYear();
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
};

export const PurchasesByYearGraph: React.FC<{}> = (_) => {
    const logger = useLogger("PurchasesByYearGraph");
    const [hasLoaded, yearsPurchases] = usePurchasesByYear(logger);

    let content;
    if (!hasLoaded) {
        content = <PreloaderCirc color={ SpinnerColor.WineRed } />;
    } else if (yearsPurchases.length > 1) {
        content = (
            <LineChart data={[
                    yearsPurchases.map((y) => ({ label: `${y.year}`, value: y.quantity })),
                    yearsPurchases.map((y) => ({ label: `${y.year}`, value: y.totalPrice ?? 0.0 })),
                    yearsPurchases.map((y) => ({ label: `${y.year}`, value: y.avgPrice ?? 0.0 })),
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
};
PurchasesByYearGraph.displayName = "PurchasesByYearGraph";

export const PurchasesByYearTable: React.FC<{}> = (_) => {
    const logger = useLogger("PurchasesByYearTable");
    const [hasLoaded, yearsPurchases] = usePurchasesByYear(logger);

    let content;
    if (!hasLoaded) {
        content = <PreloaderCirc />;
    } else if (yearsPurchases.length > 0) {
        content = (
            <SimpleTable columns={["Year",
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
                    </tr>,
                )}
            </SimpleTable>
        );
    } else {
        content = <h6 className="bold">No purchases</h6>;
    }
    return (
        <RedCard title="Purchases by year | table">
            { content }
        </RedCard>
    );
};
