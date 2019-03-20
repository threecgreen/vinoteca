import * as React from "react";
import { StatelessSelectInput } from "../../components/StatelessSelectInput";
import { StatelessTextInput } from "../../components/StatelessTextInput";
import { get } from "../../lib/ApiHelper";
import { IVitiAreaJSON, IProducerJSON, IRegionJSON } from "../../lib/rest";
import { IDict, nameToId, restObjsToNameDict } from "../../lib/utils";
import { rAutocomplete, staticAutocomplete } from "../../lib/widgets";
import { Row } from "../../components/Grid";
import { FormSelect } from "materialize-css";

interface ISearchWinesFormProps {
    onChange: (colorSelection: string, wineTypeText: string, producerText: string,
        regionText: string, vitiAreaText: string) => void;
}

interface ISearchWinesFormState {
    colorSelection: string;
    colorOptions: string[];
    producerText: string;
    regionIsEnabled: boolean;
    regionText: string;
    vitiAreaText: string;
    wineTypeText: string;
}

export class SearchWinesForm extends React.Component<ISearchWinesFormProps, ISearchWinesFormState> {
    private colorSelectRef: React.RefObject<HTMLSelectElement>;

    constructor(props: ISearchWinesFormProps) {
        super(props);
        this.state = {
            colorSelection: "",
            colorOptions: [],
            producerText: "",
            regionText: "",
            regionIsEnabled: true,
            vitiAreaText: "",
            wineTypeText: ""
        };
        this.colorSelectRef = React.createRef();
        this.onColorChange = this.onColorChange.bind(this);
        this.onWineTypeChange = this.onWineTypeChange.bind(this);
        this.onProducerChange = this.onProducerChange.bind(this);
        this.onRegionChange = this.onRegionChange.bind(this);
        this.onVitiAreaChange = this.onVitiAreaChange.bind(this);
    }

    public render() {
        return (
            <form>
                <Row>
                    <StatelessSelectInput name="Color" s={ 4 } m={ 2 }
                        selectRef={ this.colorSelectRef }
                        selection={ this.state.colorSelection }
                        options={ this.state.colorOptions }
                        onChange={ this.onColorChange }
                        selectText="Select a color"
                    />
                    <StatelessTextInput name="Wine Type" text={ this.state.wineTypeText }
                        enabled className="autocomplete" s={ 8 } l={ 4 }
                        onChange={ this.onWineTypeChange }
                        componentDidMount={ () => this.onWineTypeChange }
                    />
                    <StatelessTextInput name="Producer" text={ this.state.producerText }
                        enabled className="autocomplete" s={ 6 } l={ 3 }
                        onChange={ this.onProducerChange }
                        componentDidMount={ () => this.onProducerChange }
                    />
                    <StatelessTextInput name="Region" text={ this.state.regionText }
                        enabled={ this.state.regionIsEnabled } className="autocomplete"
                        s={ 6 } l={ 3 } onChange={ this.onRegionChange }
                    />
                    <StatelessTextInput name="Viti Area" text={ this.state.vitiAreaText }
                        className="autocomplete" s={ 6 } l={ 3 }
                        onChange={ this.onVitiAreaChange }
                    />
                </Row>
            </form>
        );
    }

    public componentDidMount() {
        get("/rest/viti-areas/all/")
            .then((vitiAreas: IDict<string>) => {
                staticAutocomplete(nameToId("Viti Area"), vitiAreas, this.onVitiAreaChange);
            });
        get("/rest/colors/all/")
            .then((colors: IDict<string>) => {
                this.setState({
                    colorOptions: Object.keys(colors),
                });
                const formSelect = new FormSelect(this.colorSelectRef.current!);
            });
    }

    public onColorChange(val: string) {
        this.setState({
            colorSelection: val,
        });
    }

    public onWineTypeChange(val: string) {
        this.setState({
            wineTypeText: val,
        });
    }

    public onProducerChange(val: string) {
        this.setState({
            producerText: val,
        });
        this.updateRegion();
    }

    private async updateRegion() {
        const producers: IProducerJSON[] = await get(
            `/rest/producers/`, {name: this.state.producerText}
        );
        if (producers.length !== 1) {
            return false;
        }
        get(`/rest/regions`, {producer__name: this.state.producerText})
            .then((regions: IRegionJSON[]) => {
                this.setState({
                    regionIsEnabled: regions.length > 0,
                });
                if (regions.length === 0) {
                    this.setState({
                        regionText: regions[0].name,
                    })
                    this.onRegionChange(regions[0].name);
                }
            })
        return true;
    }

    public onRegionChange(val: string) {
        this.setState({
            regionText: val,
        });
        get("/rest/viti-areas/", {region__name: this.state.regionText})
            .then((vitiAreas: IVitiAreaJSON[]) => {
                const context = this;
                staticAutocomplete(
                    nameToId("Viti Area"),
                    restObjsToNameDict(vitiAreas),
                    this.onVitiAreaChange,
                );
            });
    }

    public onVitiAreaChange(val: string) {
        this.setState({
            vitiAreaText: val,
        });
    }

    public onChange() {
        this.props.onChange(
            this.state.colorSelection,
            this.state.wineTypeText,
            this.state.producerText,
            this.state.regionText,
            this.state.vitiAreaText
        );
    }

    private updateVitiArea() {
    }
}
