import { WinesTableColumn } from "components/WinesTable";
import { IWine } from "generated/rest";
import FilterExpr from "lib/FilterExpr";
import Logger from "lib/Logger";

const LOCAL_STORAGE_KEY = "WinesAppPredicates";

export enum Status {
    Initial,
    HasLoaded,
    Error,
}

interface IState {
    wines: IWine[];
    predicates: Map<WinesTableColumn, FilterExpr>;
    filterTexts: Map<WinesTableColumn, string>;
    status: Status;
    currentPage: number;
    winesPerPage: number;
}

type Action =
    | { type: "setWines", wines: IWine[] }
    | { type: "setFilter", column: WinesTableColumn, text: string }
    | { type: "resetFilters" }
    | { type: "setCurrentPage", currentPage: number }
    | { type: "setError" };

const deserializeFilters = (json: string): Map<WinesTableColumn, string> => {
    const logger = new Logger("WinesApp");
    if (!json) {
        return new Map();
    }
    logger.logDebug(`Deserializing JSON: ${json}`);
    try {
        const arr: Array<[WinesTableColumn, string]> = JSON.parse(json);
        return new Map(arr);
    } catch (err) {
        window.localStorage.removeItem(LOCAL_STORAGE_KEY);
        logger.logWarning(`Failed reading filters cookie with error: ${err}`);
        return new Map();
    }
};

const parseAllFilters = (filterTexts: Map<WinesTableColumn, string>):
    Map<WinesTableColumn, FilterExpr> => {

    const predicates = new Map<WinesTableColumn, FilterExpr>();
    for (const entry of filterTexts.entries()) {
        predicates.set(entry[0], FilterExpr.parse(entry[1]));
    }
    return predicates;
};

export const initState = (): IState => {
    const filterTexts = deserializeFilters(window.localStorage.getItem(LOCAL_STORAGE_KEY) ?? "");
    return {
        wines: [],
        filterTexts,
        predicates: parseAllFilters(filterTexts),
        status: Status.Initial,
        currentPage: 1,
        winesPerPage: 50,
    };
};

export const reducer: React.Reducer<IState, Action> = (state, action) => {
    switch (action.type) {
        case "setWines":
            return { ...state, wines: action.wines, status: Status.HasLoaded };
        case "setFilter":
            const predicates = new Map(state.predicates);
            const filterTexts = new Map(state.filterTexts);
            predicates.set(action.column, FilterExpr.parse(action.text));
            filterTexts.set(action.column, action.text);
            return { ...state, predicates, filterTexts };
        case "resetFilters":
            return { ...state, predicates: new Map(), filterTexts: new Map() };
        case "setCurrentPage":
            return { ...state, currentPage: action.currentPage };
        case "setError":
            return { ...state, status: Status.Error };
        default:
            return state;
    }
};

export const updateLocalStorage = (logger: Logger, filterTexts: Map<WinesTableColumn, string>):
        void => {

    if (filterTexts) {
        const predStrings = Array.from(filterTexts.entries());
        logger.logInfo(`Filter texts: '${predStrings}'`);
        const serializedPredicates = JSON.stringify(predStrings);
        logger.logDebug(`Updating cookie to '${serializedPredicates}'`);
        window.localStorage.setItem(LOCAL_STORAGE_KEY, serializedPredicates);
    } else {
        window.localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
}
