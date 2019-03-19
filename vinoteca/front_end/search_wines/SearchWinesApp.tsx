import * as React from "react";
import Logger from "../../lib/Logger";
import { Row } from "../../components/Grid";
import { SearchWinesResults } from "./SearchWinesResults";
import { SearchWinesForm } from "./SearchWinesForm";

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
        return <div>
            <Row s={ 12 }>
                <h3 className="page-title">Find a previously purchased wine</h3>
                { /* non-floating button here */ }
            </Row>
            <SearchWinesForm />
            { /* TODO: special characters */ }
            <SearchWinesResults results={ this.state.results } />
        </div>;
    }
}
