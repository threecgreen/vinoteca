import * as React from "react";
import { Row } from "../../components/Grid";
import { get } from "../../lib/ApiHelper";
import Logger from "../../lib/Logger";
import { ISearchWinesResult } from "../../lib/RestTypes";
import { SearchWinesForm } from "./SearchWinesForm";
import { SearchWinesResults, ResultState } from "./SearchWinesResults";

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

interface ISearchWinesAppState {
    colorSelection: string;
    wineTypeText: string;
    producerText: string;
    regionText: string;
    vitiAreaText: string;
    resultState: ResultState;
    results: WineResult[];
}

export class SearchWinesApp extends React.Component<{}, ISearchWinesAppState> {
    private logger: Logger;

    constructor(props: {}) {
        super(props);
        this.state = {
            colorSelection: "",
            wineTypeText: "",
            producerText: "",
            regionText: "",
            vitiAreaText: "",
            resultState: ResultState.HasNotSearched,
            results: [],
        };
        this.logger = new Logger(this.constructor.name, true),
        this.querySearchResults = this.querySearchResults.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    public get isRegionEnabled(): boolean {
        // TODO:
        return true;
    }

    public render() {
        return (
            <div className="container">
                <Row s={ 12 }>
                    <h3 className="page-title">Find a previously purchased wine</h3>
                    { /* non-floating button here */ }
                </Row>
                <SearchWinesForm
                    colorSelection={ this.state.colorSelection }
                    wineTypeText={ this.state.wineTypeText }
                    producerText={ this.state.producerText }
                    regionText={ this.state.regionText }
                    isRegionEnabled={ this.isRegionEnabled }
                    vitiAreaText={ this.state.vitiAreaText }
                    onInputChange={ this.onInputChange }
                />
                <SearchWinesResults results={ this.state.results }
                    resultState={ this.state.resultState }
                />
            </div>
        );
    }

    private onInputChange(input: SearchWinesInput, val: string) {
        switch(input) {
            case SearchWinesInput.Color:
                this.setState({ colorSelection: val });
                return;
            case SearchWinesInput.WineType:
                this.setState({ wineTypeText: val });
                return;
            case SearchWinesInput.Producer:
                this.setState({ producerText: val });
                return;
            case SearchWinesInput.Region:
                this.setState({ regionText: val });
                return;
            case SearchWinesInput.VitiArea:
                this.setState({ vitiAreaText: val })
                return;
            default:
                this.logger.logWarning(`Tried to unknown property ${input}`);
        }
    }

    private querySearchResults(colorSelection: string, wineTypeText: string, producerText: string,
        regionText: string, vitiAreaText: string) {
        this.setState({resultState: ResultState.Searching});
        get("/rest/wines/search/", {
            color: colorSelection,
            wine_type: wineTypeText,
            producer: producerText,
            region: regionText,
            viti_area: vitiAreaText,
        }).then((results: ISearchWinesResult[]) => {
            this.setState({
                results: results.map((r) => new WineResult(r)),
                resultState: ResultState.HasSearched,
            });
        }).catch((error) => {
            this.logger.logError(`"Error fetching search results: ${error}`)
        });
    }
}
