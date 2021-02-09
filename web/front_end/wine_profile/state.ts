import { IPurchase, IWine, IWineGrape, VinotecaError } from "generated/rest";
import React from "react";

export interface IState {
    mode: Mode;
    grapes: IWineGrape[];
    wine?: IWine;
    purchases: IPurchase[];
    error: VinotecaError | null;
}

/**
 * State machine for profile app
 */
export type Mode =
    | {type: "display"}
    | {type: "editWine"}
    | {type: "editWineImage"}
    | {type: "deleteWine"}
    | {type: "editPurchase", id: number}
    | {type: "deletePurchase", id: number}
    | {type: "addPurchase"};

export const initState = (): IState => ({
    mode: {type: "display"},
    grapes: [],
    wine: undefined,
    purchases: [],
    error: null,
});

export type Action =
    | {type: "setMode", mode: Mode}
    | {type: "setGrapes", grapes: IWineGrape[]}
    | {type: "setWine", wine: IWine}
    | {type: "setPurchases", purchases: IPurchase[]}
    | {type: "setError", error: VinotecaError};

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
        case "setError":
            return {...state, error: action.error};
        default:
            return state;
    }
};
