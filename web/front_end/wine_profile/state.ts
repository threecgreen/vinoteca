import { IPurchase, IWine, IWineGrape } from "lib/api/Rest";
import React from "react";

export interface IState {
    mode: Mode;
    grapes: IWineGrape[];
    wine?: IWine;
    purchases: IPurchase[];
}

/**
 * State machine for profile app
 */
export type Mode =
    | {type: "display"}
    | {type: "editWine"}
    | {type: "deleteWine"}
    | {type: "editPurchase", id: number}
    | {type: "deletePurchase", id: number}
    | {type: "addPurchase"};

export const initState = (): IState => ({
    mode: {type: "display"},
    grapes: [],
    wine: undefined,
    purchases: [],
});

export type Action =
    | {type: "setMode", mode: Mode}
    | {type: "setGrapes", grapes: IWineGrape[]}
    | {type: "setWine", wine: IWine}
    | {type: "setPurchases", purchases: IPurchase[]};

export const wineReducer: React.Reducer<IState, Action> = (state, action) => {
    switch (action.type) {
        case "setMode":
            return {...state, mode: action.mode};
        case "setGrapes":
            return {...state, grapes: action.grapes};
        case "setWine":
            return {...state, wine: action.wine};
        case "setPurchases":
            return {...state, purchases: action.purchases};
        default:
            return state;
    }
};
