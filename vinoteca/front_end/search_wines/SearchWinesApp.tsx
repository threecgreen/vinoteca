import * as React from "react";
import { Row } from "../../components/Grid";
import Logger from "../../lib/Logger";
import { get } from "../../lib/ApiHelper";
import { SearchWinesForm } from "./SearchWinesForm";
import { SearchWinesResults } from "./SearchWinesResults";
import { SpecialChars } from "../../components/SpecialChars";

export class WineResult {
    constructor(public id: number, public color: string, public wineType: string,
                public name: string, public producer: string, public region: string,
                public vitiArea: string) {
    }
}

interface ISearchWinesAppState {
    logger: Logger;
    results: WineResult[];
}

export class SearchWinesApp extends React.Component<{}, ISearchWinesAppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            logger: new Logger(this.constructor.name),
            results: [],
        };
    }

    public render() {
        return (
            <div className="container">
                <Row s={ 12 }>
                    <h3 className="page-title">Find a previously purchased wine</h3>
                    { /* non-floating button here */ }
                </Row>
                <SearchWinesForm onChange={ this.onInputChange.bind(this) } />
                <SpecialChars onClick={ this.handleSpecialChar.bind(this) } display />
                <SearchWinesResults results={ this.state.results } />
            </div>
        );
    }

    public onInputChange(colorSelection: string, wineTypeText: string, producerText: string,
        regionText: string, vitiAreaText: string) {
        get("/rest/wines/search/", {
            color: colorSelection,
            wine_type: wineTypeText,
            producer: producerText,
            region: regionText,
            viti_area: vitiAreaText,
        }).then((results: WineResult[]) => {
            this.setState({results});
        });
    }

    public handleSpecialChar(e: React.MouseEvent, char: string) {
        e.preventDefault();
        // TODO: pass to form component
    }
}
