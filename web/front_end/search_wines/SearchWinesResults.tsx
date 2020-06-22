import React from "react";
import { Preloader } from "../../components/Preloader";
import { SimpleTable } from "../../components/Table";
import { IWine } from "../../lib/api/Rest";
import { SearchWinesResult } from "./SearchWinesResult";

interface ISearchWinesResultsProps {
    resultState: ResultState;
    results: IWine[];
}

export enum ResultState {
    HasNotSearched,
    Searching,
    HasSearched,
}

export const SearchWinesResults: React.FunctionComponent<ISearchWinesResultsProps> = (props) => {
    switch (props.resultState) {
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
            return (
                <SimpleTable columns={ ["Color", "Name and Type", "Producer", "Region", "Viticultural Area"] }>
                    { props.results.map((wine) =>
                        <SearchWinesResult result={ wine } key={ wine.id } />,
                    ) }
                </SimpleTable>
            );
    }
};
SearchWinesResults.displayName = "SearchWinesResult";
