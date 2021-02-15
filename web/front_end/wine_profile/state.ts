import { IPurchase, IWine, IWineGrape, VinotecaError } from "generated/rest";
import React from "react";

export interface IState {
    mode: Mode;
    grapes: IWineGrape[];
    wine?: IWine;
    /** Incremented so image is refreshed when the user changes its rotation */
    imageCounter: number;
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
    imageCounter: 0,
    purchases: [],
    error: null,
});

export type Action =
    | {type: "setMode", mode: Mode}
    | {type: "setGrapes", grapes: IWineGrape[]}
    | {type: "setWine", wine: IWine}
    | {type: "setPurchases", purchases: IPurchase[]}
    | {type: "setError", error: VinotecaError}
    | {type: "updatedWineRotation"};

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
        case "updatedWineRotation":
            return {...state, mode: {type: "display"}, imageCounter: state.imageCounter + 1};
        default:
            return state;
    }
};
