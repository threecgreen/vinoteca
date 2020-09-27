import { IInventoryWine, VinotecaError } from "generated/rest";
import React from "react";

export interface IState {
    hasLoaded: boolean;
    /** id -> Wine */
    wines:  Record<number, IInventoryWine>;
    error: VinotecaError | null;
}

export type Action =
    | {type: "setWines", wines: IInventoryWine[]}
    | {type: "setError", error: VinotecaError}
    | {type: "updateWineInventory", id: number, inventory: number}

export const initState = (): IState => ({
    hasLoaded: false,
    wines: [],
    error: null,
});

export const reducer: React.Reducer<IState, Action> = (state, action) => {
    switch (action.type) {
        case "setWines": {
            const wines = action.wines.reduce((acc: Record<number, IInventoryWine>, wine) => {
                acc[wine.id] = wine;
                return acc;
            }, {});
            return {hasLoaded: true, wines, error: null};
        }
        case "setError":
            return {hasLoaded: true, wines: [], error: action.error};
        case "updateWineInventory": {
            if (action.id in state.wines) {
                const wines = {...state.wines};
                if (action.inventory <= 0) {
                    delete wines[action.id]
                } else {
                    wines[action.id] = {...wines[action.id], inventory: action.inventory};
                }
                return {...state, wines};
            }
            return state;
        }
        default:
            return state;
    }
}
