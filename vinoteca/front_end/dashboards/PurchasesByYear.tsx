import React from "react";
import { GreenCard } from "../../components/Cards";
import Logger from "../../lib/Logger";
import { get } from "../../lib/ApiHelper";
import { PreloaderCirc } from "../../components/Preloader";
import { LineChart } from "../../components/Chart";
import { IYearsPurchases } from "../../lib/Rest";

export const PurchasesByYear: React.FC<{}> = (_) => {
    const logger = new Logger(PurchasesByYear.name);
    const [hasLoaded, setHasLoaded] = React.useState<boolean>(false);
    const [yearsPurchases, setYearsPurchases] = React.useState<IYearsPurchases[]>([]);
    React.useEffect(() => {
        async function fetchYearsPurchases() {
            try {
                const yearsPurchases = await get<IYearsPurchases[]>("/rest/purchases/by-year");
                setYearsPurchases(yearsPurchases);
            } catch {
                logger.logError("Error fetching purchases by year");
            } finally {
                setHasLoaded(true);
            }
        }

        fetchYearsPurchases();
    }, [setHasLoaded, setYearsPurchases]);

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
        <GreenCard title="Purchases By Year">
            {content}
        </GreenCard>
    );
}
PurchasesByYear.displayName = "PurchasesByYear";
