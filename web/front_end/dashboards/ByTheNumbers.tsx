import format from "date-fns/esm/format";
import React from "react";
import { YellowCard } from "../../components/Cards";
import { PreloaderCirc } from "../../components/Preloader";
import { getMostCommonPurchaseDate, getTotalLiters, getWineVarieties, getPurchaseCount } from "../../lib/RestApi";
import { EN_DASH, numToDate } from "../../lib/utils";

export const ByTheNumbers: React.FC<{}> = (_) => {
    const [totalLiters, setTotalLiters] = React.useState(0);
    const [mostCommonPurchaseDate, setMostCommonPurchaseDate] = React.useState<Date | null>(null);
    const [totalPurchases, setTotalPurchases] = React.useState(0);
    const [totalVarieties, setTotalVarieties] = React.useState(0);
    const [hasLoaded, setHasLoaded] = React.useState(false);

    React.useEffect(() => {
        async function fetchData() {
            await Promise.all([
                async() => {
                    const tl = await getTotalLiters();
                    setTotalLiters(tl.totalLiters);
                },
                async() => {
                    const mcd = await getMostCommonPurchaseDate();
                    if (mcd.mostCommonPurchaseDate) {
                        setMostCommonPurchaseDate(numToDate(mcd.mostCommonPurchaseDate));
                    }
                },
                async() => {
                    const v = await getWineVarieties();
                    setTotalVarieties(v.count);
                },
                async() => {
                    const pc = await getPurchaseCount();
                    setTotalPurchases(pc.count);
                }
            ].map((f) => f()));
            setHasLoaded(true);
        }

        fetchData();
    }, [setTotalLiters, setMostCommonPurchaseDate, setTotalLiters, setTotalVarieties, setHasLoaded]);
    if (hasLoaded) {
        const formattedDate = mostCommonPurchaseDate ? format(mostCommonPurchaseDate, "MMM dd") : EN_DASH;
        return (
            <YellowCard title="By the numbers">
                <p>
                    <span className="by-the-numbers">{ totalLiters }</span>
                    Liters of wine
                </p>
                <p>
                    <span className="by-the-numbers">{ formattedDate }</span>
                    Most common purchase date
                </p>
                <p>
                    <span className="by-the-numbers">{ totalPurchases }</span>
                    Total purchases
                </p>
                <p>
                    <span className="by-the-numbers">{ totalVarieties }</span>
                    Total varieties
                </p>
            </YellowCard>
        );
    }
    return (
        <YellowCard title="By the numbers">
            <PreloaderCirc />
        </YellowCard>
    )
}
ByTheNumbers.displayName = ByTheNumbers.name;
