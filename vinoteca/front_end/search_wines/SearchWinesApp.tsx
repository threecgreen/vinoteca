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
        this.onColorChange = this.onColorChange.bind(this);
        this.onWineTypeChange = this.onWineTypeChange.bind(this);
        this.onProducerChange = this.onProducerChange.bind(this);
        this.onRegionChange = this.onRegionChange.bind(this);
        this.onVitiAreaChange = this.onVitiAreaChange.bind(this);
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
                    onColorChange={ this.onColorChange }
                    wineTypeText={ this.state.wineTypeText }
                    onWineTypeChange={ this.onWineTypeChange }
                    producerText={ this.state.producerText }
                    onProducerChange={ this.onProducerChange }
                    regionText={ this.state.regionText }
                    onRegionChange={ this.onRegionChange }
                    isRegionEnabled={ this.isRegionEnabled }
                    vitiAreaText={ this.state.vitiAreaText }
                    onVitiAreaChange={ this.onVitiAreaChange }
                />
                <SearchWinesResults results={ this.state.results }
                    resultState={ this.state.resultState }
                />
            </div>
        );
    }

    private onColorChange(val: string) {
        this.setState({
            colorSelection: val,
        });
    }

    private onWineTypeChange(val: string) {
        this.setState({
            wineTypeText: val,
        });
    }

    private onProducerChange(val: string) {
        this.setState({
            producerText: val,
        });
    }

    private onRegionChange(val: string) {
        this.setState({
            regionText: val,
        });
    }

    private onVitiAreaChange(val: string) {
        this.setState({
            vitiAreaText: val,
        });
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
