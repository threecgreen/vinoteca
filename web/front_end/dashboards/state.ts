import { Reducer } from "react"

interface IState {
    hasLoaded: boolean;
    totalLiters: number;
    mostCommonPurchaseDate: string | null;
    totalPurchases: number;
    totalVarieties: number;
}

type Action =
    | {type: "setHasLoaded"}
    | {type: "setTotalLiters", totalLiters: number}
    | {type: "setMostCommonPurchaseDate", mostCommonPurchaseDate: string}
    | {type: "setTotalVarieties", totalVarieties: number}
    | {type: "setTotalPurchases", totalPurchases: number}

export const reducer: Reducer<IState, Action> = (state, action) => {
    switch (action.type) {
        case "setHasLoaded":
            return {...state, hasLoaded: true};
        case "setTotalLiters":
            return {...state, totalLiters: action.totalLiters};
        case "setMostCommonPurchaseDate":
            return {...state, mostCommonPurchaseDate: action.mostCommonPurchaseDate};
        case "setTotalVarieties":
            return {...state, totalVarieties: action.totalVarieties};
        case "setTotalPurchases":
            return {...state, totalPurchases: action.totalPurchases};
        default:
            return state;
    }
}
