import React from "react";
import { IWineGrape, IWine, IPurchase } from "../../lib/Rest";

export interface IState {
    mode: Mode;
    hasImage: boolean;
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
    hasImage: false,
    grapes: [],
    wine: undefined,
    purchases: [],
});

export type Action =
    | {type: "setMode", mode: Mode}
    | {type: "setHasImage", hasImage: boolean}
    | {type: "setGrapes", grapes: IWineGrape[]}
    | {type: "setWine", wine: IWine}
    | {type: "setPurchases", purchases: IPurchase[]};

export const wineReducer: React.Reducer<IState, Action> = (state, action) => {
    switch (action.type) {
        case "setMode":
            return {...state, mode: action.mode};
        case "setHasImage":
            return {...state, hasImage: action.hasImage};
        case "setGrapes":
            return {...state, grapes: action.grapes};
        case "setWine":
            return {...state, wine: action.wine};
        case "setPurchases":
            return {...state, purchases: action.purchases};
        default:
            return state;
    }
}
