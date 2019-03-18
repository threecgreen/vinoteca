import * as React from "react";
import { WineResult } from "./SearchWinesApp";
import { SearchWinesResult } from "./SearchWinesResult";

interface ISearchWinesResultsProps {
    results: WineResult[];
}

export const SearchWinesResults: React.FunctionComponent<ISearchWinesResultsProps> = (props) => {
    if (props.results.length > 0) {
        return <table className="highlight responsive-table">
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
                { props.results.map((wine) => <SearchWinesResult result={ wine } /> ) }
            </tbody>
        </table>;
    }
    // TODO: preloader
    return <h5 id="no-results">No results found.</h5>;
};
