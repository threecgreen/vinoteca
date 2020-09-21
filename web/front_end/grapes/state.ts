import { IGrape } from "generated/rest";

export type Mode =
    | {type: "display"}
    | {type: "edit", id: number};

export interface IGrapeState {
    mode: Mode;
    /** id -> grape */
    grapes: Record<number, IGrape>;
    hasLoaded: boolean;
}

export const initGrapeState: () => IGrapeState = () => ({
    grapes: {},
    mode: {type: "display"},
    hasLoaded: false,
});

type Action =
    | {type: "setToDisplay"}
    | {type: "setToEdit", id: number}
    | {type: "setGrapes", grapes: IGrape[]}
    | {type: "updateGrape", grape: IGrape}
    | {type: "deleteGrape", id: number}
    | {type: "hasLoaded"};

export const grapeStateReducer: React.Reducer<IGrapeState, Action> = (state, action) => {
    switch (action.type) {
        case "setToDisplay":
            return { ...state, mode: {type: "display"} };
        case "setToEdit":
            return { ...state, mode: {type: "edit", id: action.id} };
        case "setGrapes": {
            const grapes = action.grapes.reduce((acc, grape) => {
                acc[grape.id] = grape;
                return acc;
            }, {} as Record<number, IGrape>);
            return { ...state, grapes};
        }
        case "updateGrape": {
            const grapes = {...state.grapes};
            grapes[action.grape.id] = action.grape;
            return {...state, grapes};
        }
        case "deleteGrape": {
            const grape = state.grapes[action.id];
            if (grape) {
                const grapes = {...state.grapes};
                delete grapes[action.id];
                return {...state, grapes};
            }
            return state;
        }
        case "hasLoaded":
            return {...state, hasLoaded: true};
        default:
            return state;
    }
};
