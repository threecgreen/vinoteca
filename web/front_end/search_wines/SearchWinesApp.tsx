import { Btn } from "components/Buttons";
import { Row } from "components/Grid";
import { IWine } from "lib/api/Rest";
import { searchWines } from "lib/api/wines";
import Logger from "lib/Logger";
import { setTitle } from "lib/widgets";
import React from "react";
import { SearchWinesForm } from "./SearchWinesForm";
import { ResultState, SearchWinesResults } from "./SearchWinesResults";

export enum SearchWinesInput {
    Color,
    WineType,
    Producer,
    Region,
    VitiArea,
}

export enum SearchWinesTextInput {
    WineType,
    Producer,
    Region,
    VitiArea,
}

interface ISearchWinesAppState {
    colorSelection: string;
    wineTypeText: string;
    producerText: string;
    regionText: string;
    vitiAreaText: string;
    resultState: ResultState;
    results: IWine[];
    lastActiveTextInput?: SearchWinesTextInput;
}

export default class SearchWinesApp extends React.Component<{}, ISearchWinesAppState> {
    private static defaultState: Readonly<ISearchWinesAppState> = {
            colorSelection: "",
            wineTypeText: "",
            producerText: "",
            regionText: "",
            vitiAreaText: "",
            resultState: ResultState.HasNotSearched,
            results: [],
        };
    private readonly logger: Logger;

    constructor(props: {}) {
        super(props);
        this.state = SearchWinesApp.defaultState;
        this.logger = new Logger("SearchWinesApp");
        this.querySearchResults = this.querySearchResults.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onResetClick = this.onResetClick.bind(this);
    }

    public render() {
        return (
            <div className="container">
                <Row s={ 12 }>
                    <h3 className="page-title">Find a previously purchased wine</h3>
                    <Btn classes={ ["yellow-bg"] }
                        onClick={ this.onResetClick }
                    >
                        Reset Filters
                    </Btn>
                </Row>
                <SearchWinesForm
                    colorSelection={ this.state.colorSelection }
                    wineTypeText={ this.state.wineTypeText }
                    producerText={ this.state.producerText }
                    regionText={ this.state.regionText }
                    vitiAreaText={ this.state.vitiAreaText }
                    onInputChange={ this.onInputChange }
                />
                <div className="section">
                    <SearchWinesResults results={ this.state.results }
                        resultState={ this.state.resultState }
                    />
                </div>
            </div>
        );
    }

    public componentDidMount() {
        setTitle("Search wines");
    }

    private onInputChange(input: SearchWinesInput, val: string) {
        switch (input) {
            case SearchWinesInput.Color:
                return this.setState({ colorSelection: val }, this.querySearchResults);
            case SearchWinesInput.WineType:
                return this.setState({ wineTypeText: val }, this.querySearchResults);
            case SearchWinesInput.Producer:
                return this.setState({ producerText: val }, this.querySearchResults);
            case SearchWinesInput.Region:
                return this.setState({ regionText: val }, this.querySearchResults);
            case SearchWinesInput.VitiArea:
                return this.setState({ vitiAreaText: val }, this.querySearchResults);
            default:
                this.logger.logWarning(`Tried to change an unknown property ${input}`);
        }
    }

    private onResetClick() {
        this.setState(SearchWinesApp.defaultState);
    }

    private async querySearchResults() {
        // Check if all form items are empty
        const allEmpty = [
            this.state.colorSelection, this.state.wineTypeText, this.state.producerText,
            this.state.regionText, this.state.vitiAreaText,
        ].every((s) => s.length === 0);
        if (allEmpty) {
            this.setState({resultState: ResultState.HasNotSearched});
            return;
        }
        this.setState({resultState: ResultState.Searching});
        const results: IWine[] = await searchWines({
            colorLike: this.state.colorSelection,
            wineTypeLike: this.state.wineTypeText,
            producerLike: this.state.producerText,
            regionLike: this.state.regionText,
            vitiAreaLike: this.state.vitiAreaText,
        });
        try {
            this.setState({
                results,
                resultState: ResultState.HasSearched,
            });
        } catch (error) {
            this.logger.logError(`"Error fetching search results: ${error}`);
        }
    }
}
