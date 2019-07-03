import * as React from "react";
import { Row } from "../../components/Grid";
import { get } from "../../lib/ApiHelper";
import Logger from "../../lib/Logger";
import { ISearchWinesResult } from "../../lib/RestTypes";
import { SearchWinesForm } from "./SearchWinesForm";
import { SearchWinesResults, ResultState } from "./SearchWinesResults";
import { SpecialChars } from "../../components/SpecialChars";
import { Btn } from "../../components/Buttons";

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
        this.wineType = rawResult.wine_type;
        this.name = rawResult.name;
        this.producer = rawResult.producer;
        this.region = rawResult.region;
        this.vitiArea = rawResult.viti_area;
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
    private logger: Logger;

    constructor(props: {}) {
        super(props);
        this.state = SearchWinesApp.defaultState;
        this.logger = new Logger(this.constructor.name, true),
        this.querySearchResults = this.querySearchResults.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onTextInputFocus = this.onTextInputFocus.bind(this);
        this.onTextInputBlur = this.onTextInputBlur.bind(this);
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
                <SpecialChars onClick={ this.onSpecialCharClick }
                    display={ this.state.lastActiveTextInput !== undefined }
                />
                <SearchWinesForm
                    colorSelection={ this.state.colorSelection }
                    wineTypeText={ this.state.wineTypeText }
                    producerText={ this.state.producerText }
                    regionText={ this.state.regionText }
                    vitiAreaText={ this.state.vitiAreaText }
                    onInputChange={ this.onInputChange }
                    onTextInputFocus={ this.onTextInputFocus }
                    onTextInputBlur={ this.onTextInputBlur }
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

    private onTextInputFocus(input: SearchWinesTextInput) {
        this.setState((prevState) => SpecialChars.onTextInputFocus(prevState, input));
    }

    private onTextInputBlur(input: SearchWinesTextInput) {
        this.setState(prevState => SpecialChars.onTextInputBlur(prevState, input));
    }

    private onSpecialCharClick(e: React.MouseEvent, char: string) {
        e.preventDefault();
        switch (this.state.lastActiveTextInput) {
            case SearchWinesTextInput.WineType:
                return this.setState((prevState) => ({
                    wineTypeText: prevState.wineTypeText + char,
                // callback to query
                }), this.querySearchResults);
            case SearchWinesTextInput.Producer:
                return this.setState((prevState) => ({
                    producerText: prevState.producerText + char,
                }), this.querySearchResults);
            case SearchWinesTextInput.Region:
                return this.setState((prevState) => ({
                    regionText: prevState.regionText + char,
                }), this.querySearchResults);
            case SearchWinesTextInput.VitiArea:
                return this.setState((prevState) => ({
                    vitiAreaText: prevState.vitiAreaText + char,
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

    private querySearchResults() {
        this.setState({resultState: ResultState.Searching});
        get("/rest/wines/search/", {
            color: this.state.colorSelection === "Any" ? "" : this.state.colorSelection,
            wine_type: this.state.wineTypeText,
            producer: this.state.producerText,
            region: this.state.regionText,
            viti_area: this.state.vitiAreaText,
        }).then((results: ISearchWinesResult[]) => {
            this.setState({
                results: results.map((r) => new WineResult(r)),
                resultState: ResultState.HasSearched,
            });
            }
        }).catch((error) => {
            this.logger.logError(`"Error fetching search results: ${error}`);
        });
    }
}
