import * as React from "react";
import { StatelessTextInput } from "../../components/StatelessTextInput";
import { TextInput } from "../../components/TextInput";
import { IRegionJSON, IVitiAreaJSON } from "../../lib/rest";
import { rAutocomplete } from "../../lib/widgets";
import { get } from "../../lib/ApiHelper";

interface ISearchWinesFormProps {

}

interface ISearchWinesFormState {
    producerText: string;
    regionResults: IRegionJSON[];
    regionText: string;
    vitiAreaCompletions: IVitiAreaJSON[];
    vitiAreaText: string;
}

export class SearchWinesForm extends React.Component<ISearchWinesFormProps, ISearchWinesFormState> {
    constructor(props: ISearchWinesFormProps) {
        super(props);
        this.setState({
            producerText: "",
            regionResults: [],
            regionText: "",
            // TODO: should be all viti areas
            vitiAreaCompletions: [],
            vitiAreaText: ""
        });
    }

    public render() {
        return <form>
            { /* TODO: color input */ }
            <TextInput id="wine-type" name="Wine Type" autocomplete={ true } initText=""
                       enabled={ true } className="autocomplete" s={ 8 } l={ 4 } />
            <StatelessTextInput id="producer" name="Producer" text={ this.state.producerText }
                                enabled={ true } className="autocomplete" s={ 6 } l={ 3 }
                                onChange={ this.onProducerChange.bind(this) }
                                componentDidMount={ () => rAutocomplete("producer", "producer") } />
            <StatelessTextInput id="region" name="Region" text={ this.state.regionText }
                                enabled={ this.regionIsEnabled } className="autocomplete"
                                s={ 6 } l={ 3 } onChange={ this.onRegionChange.bind(this) }
                                componentDidMount={ () => undefined } />
            <TextInput id="viti-area" name="" autocomplete={ true } initText=""
                    enabled={ true } className="autocomplete" s={ 6 } l={ 3 } />
        </form>;
    }

    get regionIsEnabled(): boolean {
        return this.state.regionResults.length !== 1;
    }

    public onProducerChange(val: string) {
        this.setState(() => ({
            producerText: val,
        }));
        get(`/rest/producers/`)
    }

    public onRegionChange(val: string) {

    }
}
