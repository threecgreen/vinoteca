import * as React from "react";
import { SelectInput } from "../../components/SelectInput";
import { StatelessTextInput } from "../../components/StatelessTextInput";
import { get } from "../../lib/ApiHelper";
import { IRegionJSON, IVitiAreaJSON } from "../../lib/rest";
import { rAutocomplete } from "../../lib/widgets";

interface ISearchWinesFormProps {

}

interface ISearchWinesFormState {
    colorSelection: string;
    colorOptions: string[];
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
            // TODO: default should be all viti areas
            vitiAreaCompletions: [],
            vitiAreaText: ""
        });
    }

    public render() {
        return (
            <form>
                <SelectInput id="color" name="color" s={ 4 } m={ 2 }
                    selection={ this.state.colorSelection }
                    options={ this.state.colorOptions }
                    onChange={ this.onColorChange.bind(this) }
                />
                <TextInput id="wine-type" name="Wine Type"
                    autocomplete enabled initText=""
                    className="autocomplete" s={ 8 } l={ 4 }
                />
                <StatelessTextInput id="producer" name="Producer" text={ this.state.producerText }
                    enabled className="autocomplete" s={ 6 } l={ 3 }
                    onChange={ this.onProducerChange.bind(this) }
                    componentDidMount={ () => rAutocomplete("producer", "producer") }
                />
                <StatelessTextInput id="region" name="Region" text={ this.state.regionText }
                    enabled={ this.regionIsEnabled } className="autocomplete"
                    s={ 6 } l={ 3 } onChange={ this.onRegionChange.bind(this) }
                    componentDidMount={ () => undefined }
                />
                <TextInput id="viti-area" name="" autocomplete initText="" enabled
                    className="autocomplete" s={ 6 } l={ 3 }
                />
            </form>
        );
    }

    get regionIsEnabled(): boolean {
        return this.state.regionResults.length !== 1;
    }

    public onColorChange(e: React.ChangeEvent<HTMLSelectElement>) {
        this.setState({
            colorSelection: e.target.value,
        });
    }

    public onProducerChange(val: string) {
        this.setState({
            producerText: val,
        });
        get(`/rest/producers/`)
    }

    public onRegionChange(val: string) {
        this.setState({
            regionText: val,
        });
        get(`/rest/`)
    }

    /**
     * On any change send a new request for search results based on the latest
     * inputs.
     */
    public onChange() {
        get("/rest/wines/search/", {
            color: this.state.colorSelection,
            win
        });
    }
}
