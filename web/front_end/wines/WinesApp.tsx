import { Btn, BtnLink } from "components/Buttons";
import { Col, Row } from "components/Grid";
import { Pagination } from "components/Pagination";
import { Preloader } from "components/Preloader";
import { columnToVal, WinesTable } from "components/WinesTable";
import { IWine } from "generated/rest";
import { getWines } from "lib/api/wines";
import { useCanonical, useDescription, useTitle } from "lib/hooks";
import { useLogger } from "lib/Logger";
import React from "react";
import { initState, reducer, Status, updateLocalStorage } from "./state";

const WinesApp: React.FC = (_) => {
    const logger = useLogger("WinesApp");
    useTitle("Wines");
    useDescription("All the wines you've entered into vinoteca");
    useCanonical("/wines");

    const [state, dispatch] = React.useReducer(reducer, initState());

    React.useEffect(() => {
        async function fetchWines() {
            try {
                // TODO: migrate to `RestResult`
                const wines = (await getWines({})).unwrap();
                dispatch({type: "setWines", wines});
            } catch (e) {
                logger.logError(`Failed to get wines: ${e.message}`);
                dispatch({type: "setWines", wines: []});
            }
        }

        void fetchWines();
    }, [logger]);

    // Update local storage predicates when they change
    React.useEffect(() => {
        updateLocalStorage(logger, state.filterTexts);
    }, [logger, state.filterTexts]);

    // Rendering
    let winesComponent;
    if (state.status === Status.Initial) {
        winesComponent = (
            <>
                <h1 className="page-title med-heading">Wines</h1>
                <Preloader />
            </>
        );
    } else if (state.status === Status.Error) {
        winesComponent = (
            <div className="center-align">
                <h6 className="bold">
                    Critical error retrieving wines.
                </h6>
                <p>Try refreshing the page</p>
            </div>
        );
    } else if (state.wines.length === 0) {
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
                return (wine) => prevVal(wine)
                    && filterExpr.call(columnToVal(column, wine) as string | number);
            }, (__: IWine) => true);
        const filteredWines = state.wines.filter(combinedPred);

        winesComponent = (
            <>
                <h1 className="page-title med-heading">Wines</h1>
                <Btn classes={ ["yellow-bg"] }
                    onClick={ () => dispatch({type: "resetFilters"}) }
                >
                    Reset Filters
                </Btn>
                <WinesTable
                    onFilterChange={ (column, text) => dispatch({type: "setFilter", column, text}) }
                    wines={ filteredWines }
                    filterTexts={ state.filterTexts }
                    currentPage={ state.currentPage }
                    winesPerPage={ state.winesPerPage }
                />
                <Pagination currentPage={ state.currentPage }
                    pageCount={ Math.max(1,
                        Math.ceil(filteredWines.length / state.winesPerPage)) }
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
};
WinesApp.displayName = "WinesApp";
export default WinesApp;
