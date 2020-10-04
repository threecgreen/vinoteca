import { YellowCard } from "components/Cards";
import { PreloaderCirc } from "components/Preloader";
import { reducer } from "./state";
import { getMostCommonPurchaseDate, getPurchaseCount, getTotalLiters } from "lib/api/purchases";
import { getWineVarieties } from "lib/api/wines";
import React from "react";

export const ByTheNumbers: React.FC = (_) => {
    const [state, dispatch] = React.useReducer(
        reducer,
        {
            hasLoaded: false,
            totalLiters: 0,
            mostCommonPurchaseDate: null,
            totalPurchases: 0,
            totalVarieties: 0
        }
    );

    React.useEffect(() => {
        async function fetchData() {
            await Promise.all([
                async () => {
                    const tl = await getTotalLiters();
                    dispatch({type: "setTotalLiters", totalLiters: tl.totalLiters});
                },
                async () => {
                    const mcd = await getMostCommonPurchaseDate();
                    if (mcd.mostCommonPurchaseDate) {
                        dispatch({
                            type: "setMostCommonPurchaseDate",
                            mostCommonPurchaseDate: mcd.mostCommonPurchaseDate
                        });
                    }
                },
                async () => {
                    const v = await getWineVarieties();
                    dispatch({type: "setTotalVarieties", totalVarieties: v.count});
                },
                async () => {
                    const pc = await getPurchaseCount();
                    dispatch({type: "setTotalPurchases", totalPurchases: pc.count});
                },
            ].map((f) => f()));
            dispatch({type: "setHasLoaded"});
        }

        void fetchData();
    }, []);
    if (state.hasLoaded) {
        return (
            <YellowCard title="By the numbers">
                <p>
                    <span className="by-the-numbers">{ state.totalLiters }</span>
                    Liters of wine
                </p>
                <p>
                    <span className="by-the-numbers">{ state.mostCommonPurchaseDate ?? "No" }</span>
                    Most common purchase date
                </p>
                <p>
                    <span className="by-the-numbers">{ state.totalPurchases }</span>
                    Total purchases
                </p>
                <p>
                    <span className="by-the-numbers">{ state.totalVarieties }</span>
                    Total varieties
                </p>
            </YellowCard>
        );
    }
    return (
        <YellowCard title="By the numbers">
            <PreloaderCirc />
        </YellowCard>
    );
};
ByTheNumbers.displayName = "ByTheNumbers";
