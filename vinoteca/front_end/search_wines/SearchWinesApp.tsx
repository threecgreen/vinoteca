import * as React from "react";
import { Btn } from "../../components/Buttons";
import { Row } from "../../components/Grid";
import { SimpleSpecialChars } from "../../components/SimpleSpecialChars";
import { get } from "../../lib/ApiHelper";
import Logger from "../../lib/Logger";
import { ISearchWinesResult } from "../../lib/RestTypes";
import { SearchWinesForm } from "./SearchWinesForm";
import { ResultState, SearchWinesResults } from "./SearchWinesResults";

export class WineResult {
    public id: number;
    public color: string;
    public wineType: string;
    public name?: string;
    public producer: string;
    public region: string;
    public vitiArea?: string

    constructor(rawResult: ISearchWinesResult) {
        this.id = rawResult.id;
        this.color = rawResult.color;
        this.wineType = rawResult.wineType;
        this.name = rawResult.name;
        this.producer = rawResult.producer;
        this.region = rawResult.region;
        this.vitiArea = rawResult.vitiArea;
    }
}

export enum SearchWinesInput {
    Color,
    WineType,
    Producer,
    Region,
    VitiArea,
};

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
    results: WineResult[];
    lastActiveTextInput?: SearchWinesTextInput;
}

export class SearchWinesApp extends React.Component<{}, ISearchWinesAppState> {
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
        this.logger = new Logger(this.constructor.name),
        this.querySearchResults = this.querySearchResults.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onSpecialCharClick = this.onSpecialCharClick.bind(this);
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
                    onSpecialCharClick={ this.onSpecialCharClick }
                />
                <SearchWinesResults results={ this.state.results }
                    resultState={ this.state.resultState }
                />
            </div>
        );
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

    private onSpecialCharClick(input: SearchWinesTextInput, char: string, position: number) {
        switch (input) {
            case SearchWinesTextInput.WineType:
                return this.setState((prevState) => ({
                    wineTypeText: SimpleSpecialChars.insertCharAt(prevState.wineTypeText, char, position),
                // callback to query
                }), this.querySearchResults);
            case SearchWinesTextInput.Producer:
                return this.setState((prevState) => ({
                    producerText: SimpleSpecialChars.insertCharAt(prevState.producerText, char, position),
                }), this.querySearchResults);
            case SearchWinesTextInput.Region:
                return this.setState((prevState) => ({
                    regionText: SimpleSpecialChars.insertCharAt(prevState.regionText, char, position),
                }), this.querySearchResults);
            case SearchWinesTextInput.VitiArea:
                return this.setState((prevState) => ({
                    vitiAreaText: SimpleSpecialChars.insertCharAt(prevState.vitiAreaText, char, position),
                }), this.querySearchResults);
            default:
                this.logger.logError("The special char controller should not be displayed"
                                     + " before a text input has come into focus.");
        }
    }

    private onResetClick(e: React.MouseEvent) {
        e.preventDefault();
        this.setState(SearchWinesApp.defaultState);
    }

    private async querySearchResults() {
        this.setState({resultState: ResultState.Searching});
        const results: ISearchWinesResult[] = await get("/rest/wines", {
            color: this.state.colorSelection === "Any" ? "" : this.state.colorSelection,
            wine_type: this.state.wineTypeText,
            producer: this.state.producerText,
            region: this.state.regionText,
            viti_area: this.state.vitiAreaText,
        });
        try {
            this.setState({
                results: results.map((r) => new WineResult(r)),
                resultState: ResultState.HasSearched,
            });
        } catch (error) {
            this.logger.logError(`"Error fetching search results: ${error}`);
        }
    }
}
