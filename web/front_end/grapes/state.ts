import { IGrape } from "../../lib/Rest";

export type Mode =
    | {type: "display"}
    | {type: "edit", id: number};

export interface IGrapeState {
    mode: Mode;
    grapes: IGrape[];
    hasLoaded: boolean;
}

export const initGrapeState: () => IGrapeState = () => ({
    grapes: [],
    mode: {type: "display"},
    hasLoaded: false,
});

type Action =
    | {type: "setToDisplay"}
    | {type: "setToEdit", id: number}
    | {type: "setGrapes", grapes: IGrape[]}
    | {type: "hasLoaded"};

export const grapeStateReducer: React.Reducer<IGrapeState, Action> = (state, action) => {
    switch (action.type) {
        case "setToDisplay":
            return { ...state, mode: {type: "display"} };
        case "setToEdit":
            return { ...state, mode: {type: "edit", id: action.id} };
        case "setGrapes":
            return { ...state, grapes: action.grapes};
        case "hasLoaded":
            return { ...state, hasLoaded: true };
        default:
            return state;
    }
};
