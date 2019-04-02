import * as React from "react";
import { WineResult } from "./SearchWinesApp";
import { SearchWinesResult } from "./SearchWinesResult";
import { Preloader } from "../../components/Preloader";

interface ISearchWinesResultsProps {
    resultState: ResultState;
    results: WineResult[];
}

export enum ResultState {
    HasNotSearched,
    Searching,
    HasSearched,
};

export const SearchWinesResults: React.FunctionComponent<ISearchWinesResultsProps> = (props) => {
    switch(props.resultState) {
        case ResultState.HasNotSearched:
            return null;
        case ResultState.Searching:
            return (
                <Preloader />
            );
        case ResultState.HasSearched:
            if (props.results.length === 0) {
                return (
                    <h5 id="no-results">No results found.</h5>
                );
            }
            // TODO: use components
            return (
                <table className="highlight responsive-table">
                    <thead>
                        <tr>
                            <th>Color</th>
                            <th>Name and Type</th>
                            <th>Producer</th>
                            <th>Region</th>
                            <th>Viticultural Area</th>
                        </tr>
                    </thead>
                    <tbody>
                        { props.results.map((wine) => {
                            return(
                                <SearchWinesResult result={ wine } key={ wine.id } />
                            );
                        }) }
                    </tbody>
                </table>
            );
    }
};
SearchWinesResults.displayName = "SearchWinesResult";
