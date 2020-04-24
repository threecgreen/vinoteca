import React from "react";
import { Btn, BtnLink } from "../../components/Buttons";
import { Col, Row } from "../../components/Grid";
import { Pagination } from "../../components/Pagination";
import { Preloader } from "../../components/Preloader";
import { columnToVal, WinesTable, WinesTableColumn } from "../../components/WinesTable";
import FilterExpr from "../../lib/FilterExpr";
import { useLogger } from "../../lib/Logger";
import { IWine } from "../../lib/Rest";
import { getWines } from "../../lib/RestApi";
import { useTitle } from "../../lib/widgets";

const LOCAL_STORAGE_KEY = "WinesAppPredicates";

interface IState {
    wines: IWine[];
    predicates: Map<WinesTableColumn, FilterExpr>;
    filterTexts: Map<WinesTableColumn, string>;
    hasLoaded: boolean;
    currentPage: number;
    winesPerPage: number;
}

type Action =
    | { type: "setWines", wines: IWine[] }
    | { type: "setFilter", column: WinesTableColumn, text: string }
    | { type: "resetFilters" }
    | { type: "setCurrentPage", currentPage: number };

const deserializeFilters = (json: string): Map<WinesTableColumn, string> => {
    const logger = useLogger("WinesApp");
    if (!json) {
        return new Map();
    }
    logger.logDebug(`Deserializing JSON: ${json}`);
    const predicates = new Map();
    try {
        const arr: Array<[string, string]> = JSON.parse(json);
        arr.forEach((item) => {
            const [key, text] = item;
            predicates.set(key, text);
        });
        return predicates;
    } catch (err) {
        window.localStorage.removeItem(LOCAL_STORAGE_KEY);
        logger.logWarning(`Failed reading filters cookie with error: ${err}`);
        return new Map();
    }
}

const parseAllFilters = (filterTexts: Map<WinesTableColumn, string>): Map<WinesTableColumn, FilterExpr> => {
    const predicates = new Map<WinesTableColumn, FilterExpr>()
    for (const entry of filterTexts.entries()) {
        predicates.set(entry[0], FilterExpr.parse(entry[1]));
    }
    return predicates;
}

const initState = (): IState => {
    const filterTexts = deserializeFilters(window.localStorage.getItem(LOCAL_STORAGE_KEY) ?? "");
    return {
        wines: [],
        filterTexts,
        predicates: parseAllFilters(filterTexts),
        hasLoaded: false,
        currentPage: 1,
        winesPerPage: 50,
    }
};

const reducer: React.Reducer<IState, Action> = (state, action) => {
    switch (action.type) {
        case "setWines":
            return { ...state, wines: action.wines, hasLoaded: true };
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
        default:
            return state;
    }
}

export const WinesApp: React.FC<{}> = (_) => {
    const logger = useLogger("WinesApp");
    useTitle("Wines");

    const [state, dispatch] = React.useReducer(reducer, initState())

    React.useEffect(() => {
        async function fetchWines() {
            try {
                const wines = await getWines({});
                dispatch({type: "setWines", wines});
            } catch (e) {
                logger.logError(`Failed to get wines: ${e.message}`);
                dispatch({type: "setWines", wines: []});
            }
        }

        fetchWines();
    }, []);

    // Update local storage predicates when they change
    React.useEffect(() => {
        if (state.filterTexts) {
            const predStrings = Array.from(state.filterTexts.entries());
            logger.logInfo(`Filter texts: '${predStrings}'`)
            const serializedPredicates = JSON.stringify(predStrings);
            logger.logDebug(`Updating cookie to '${serializedPredicates}'`);
            window.localStorage.setItem(LOCAL_STORAGE_KEY, serializedPredicates);
        } else {
            window.localStorage.removeItem(LOCAL_STORAGE_KEY);
        }
    }, [state.filterTexts]);

    // Rendering
    if (!state.hasLoaded) {
        return <Preloader />;
    }
    let winesComponent = undefined;
    if (state.wines.length === 0) {
        winesComponent = (
            <div className="center-align">
                <h6 className="bold">
                    You haven&rsquo;t entered any wines yet.
                </h6>
                <BtnLink classes={ ["green-bg"] }
                    to="/wines/new/"
                >
                    Add a new wine
                </BtnLink>
            </div>
        );
    } else {
        // Reduce predicates
        const combinedPred = [...state.predicates.entries()]
            .reduceRight((prevVal, [column, filterExpr]) => {
                return (wine) => prevVal(wine) && filterExpr.call(columnToVal(column, wine)!);
            }, (_: IWine) => true);
        const filteredWines = state.wines.filter(combinedPred);

        winesComponent = (
            <>
                <h3 className="page-title">Wines</h3>
                <Btn classes={ ["yellow-bg"] }
                    onClick={ () => dispatch({type: "resetFilters"}) }
                >
                    Reset Filters
                </Btn>
                <WinesTable onFilterChange={ (column, text) => dispatch({type: "setFilter", column, text}) }
                    wines={ filteredWines }
                    filterTexts={ state.filterTexts }
                    currentPage={ state.currentPage }
                    winesPerPage={ state.winesPerPage }
                />
                <Pagination currentPage={ state.currentPage }
                    pageCount={ Math.max(1,
                        Math.ceil(filteredWines.length / state.winesPerPage )) }
                    onClick={ (currentPage) => dispatch({type: "setCurrentPage", currentPage}) }
                />
            </>
        );
    }
    return (
        <div className="container">
            <Row>
                <Col s={ 12 }>
                    { winesComponent }
                </Col>
            </Row>
        </div>
    );
}
WinesApp.displayName = "WinesApp";
