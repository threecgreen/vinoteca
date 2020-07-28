import { IWine, VinotecaError } from "generated/rest";
import { Option } from "lib/option";

export interface IState {
    wines: IWine[];
    hasLoaded: boolean;
    error: Option<VinotecaError>;
}

export type Action =
    | { type: "setWines", wines: IWine[] }
    | { type: "setError", error: VinotecaError }
    | { type: "removeWine", id: number };

export const initState = (): IState => ({
    wines: [],
    hasLoaded: false,
    error: Option.None(),
});

export const reducer: React.Reducer<IState, Action> = (state, action) => {
    switch (action.type) {
        case "setWines":
            return { ...state, wines: action.wines, hasLoaded: true };
        case "setError":
            return { ...state, error: Option.Some(action.error) };
        case "removeWine":
            return { ...state, wines: state.wines.filter((w) => w.id !== action.id) };
        default:
            return state;
    }
}
