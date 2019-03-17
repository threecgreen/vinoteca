import * as React from "react";
import Logger from "../../lib/Logger";
import { Row } from "../../components/Grid";

export class WineResult {
    constructor(public color: string, public wineType: string, public producer: string,
                public region: string, public vitiArea: string) {
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
        if (this.state.results.length > 0) {
            const results = <SearchWinesResults />;
        } else {
            const results = <h5 id="no-results">No results found.</h5>;
        }

        return <div>
            <Row s={ 12 }>
                <h3 className="page-title">Find a previously purchased wine</h3>
                { /* non-floating button here */ }
            </Row>
            <SearchWinesForm />
            { results }
        </div>;
    }
}
