import React from "react";
import { SearchWinesResult } from "./SearchWinesResult";
import { Preloader } from "../../components/Preloader";
import { IWine } from "../../lib/Rest";
import { Table } from "../../components/Table";

interface ISearchWinesResultsProps {
    resultState: ResultState;
    results: IWine[];
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
            return (
                <Table columns={ ["Color", "Name and Type", "Producer", "Region", "Viticultural Area"] }>
                    { props.results.map((wine) =>
                        <SearchWinesResult result={ wine } key={ wine.id } />
                    ) }
                </Table>
            );
    }
};
SearchWinesResults.displayName = "SearchWinesResult";
