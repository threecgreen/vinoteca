import { FormSelect } from "materialize-css";
import * as React from "react";
import { Row } from "../../components/Grid";
import { SpecialChars } from "../../components/SpecialChars";
import { StatelessSelectInput } from "../../components/StatelessSelectInput";
import { StatelessTextInput } from "../../components/StatelessTextInput";
import { get } from "../../lib/ApiHelper";
import Logger from "../../lib/Logger";
import { IProducer, IRegion, IVitiArea } from "../../lib/RestTypes";
import { IDict, nameToId, restModelsToNameDict } from "../../lib/utils";
import { staticAutocomplete } from "../../lib/widgets";

interface ISearchWinesFormProps {
    onChange: (colorSelection: string, wineTypeText: string, producerText: string,
        regionText: string, vitiAreaText: string) => void;
}

interface ISearchWinesFormState {
    colorSelection: string;
    colorOptions: string[];
    producerText: string;
    allRegions: IDict<string>;
    regionIsEnabled: boolean;
    regionText: string;
    vitiAreaText: string;
    wineTypeText: string;
}

export class SearchWinesForm extends React.Component<ISearchWinesFormProps, ISearchWinesFormState> {
    private colorSelectRef: React.RefObject<HTMLSelectElement>;
    private logger: Logger;
    private updateLastActive: (char: string) => void;

    constructor(props: ISearchWinesFormProps) {
        super(props);
        this.state = {
            colorSelection: "",
            colorOptions: [],
            producerText: "",
            allRegions: {},
            regionText: "",
            regionIsEnabled: true,
            vitiAreaText: "",
            wineTypeText: ""
        };
        this.logger = new Logger(this.constructor.name, true);
        this.updateLastActive = (_) => null;
        this.colorSelectRef = React.createRef();
        this.onColorChange = this.onColorChange.bind(this);
        this.onWineTypeChange = this.onWineTypeChange.bind(this);
        this.onProducerChange = this.onProducerChange.bind(this);
        this.onRegionChange = this.onRegionChange.bind(this);
        this.onVitiAreaChange = this.onVitiAreaChange.bind(this);
        this.handleSpecialChar = this.handleSpecialChar.bind(this);
    }

    public render() {
        return (
            <div>
                <SpecialChars onClick={ this.handleSpecialChar } display />
                <form>
                    <Row>
                        <StatelessSelectInput name="Color" s={ 4 } m={ 2 }
                            selectRef={ this.colorSelectRef }
                            selection={ this.state.colorSelection }
                            options={ this.state.colorOptions }
                            onChange={ this.onColorChange }
                            selectText="Select a color"
                        />
                        <StatelessTextInput name="Wine Type" value={ this.state.wineTypeText }
                            enabled className="autocomplete" s={ 8 } l={ 4 }
                            onChange={ this.onWineTypeChange }
                        />
                        <StatelessTextInput name="Producer" value={ this.state.producerText }
                            enabled className="autocomplete" s={ 6 } l={ 3 }
                            onChange={ this.onProducerChange }
                        />
                        <StatelessTextInput name="Region" value={ this.state.regionText }
                            enabled={ this.state.regionIsEnabled } className="autocomplete"
                            s={ 6 } l={ 3 } onChange={ this.onRegionChange }
                        />
                        <StatelessTextInput name="Viti Area" value={ this.state.vitiAreaText }
                            className="autocomplete" s={ 6 } l={ 3 }
                            onChange={ this.onVitiAreaChange }
                        />
                    </Row>
                </form>
            </div>
        );
    }

    public componentDidMount() {
        get("/rest/colors/all/")
            .then((colors: IDict<string>) => {
                this.setState({
                    colorOptions: Object.keys(colors),
                });
                const formSelect = new FormSelect(this.colorSelectRef.current!);
            });
        get("/rest/wine-types/all/")
            .then((wineTypes: IDict<string>) => {
                staticAutocomplete(nameToId("Wine Type"), wineTypes, this.onWineTypeChange);
            });
        get("/rest/producers/all/")
            .then((producers: IDict<string>) => {
                staticAutocomplete(nameToId("Producer"), producers, this.onProducerChange);
            });
        get("/rest/regions/all/")
            .then((regions: IDict<string>) => {
                this.setState({allRegions: regions});
            });
        get("/rest/viti-areas/all/")
            .then((vitiAreas: IDict<string>) => {
                staticAutocomplete(nameToId("Viti Area"), vitiAreas, this.onVitiAreaChange);
            });
    }

    public onColorChange(val: string) {
        this.setState({
            colorSelection: val,
        });
        this.onChange();
    }

    public onWineTypeChange(val: string) {
        this.setState({
            wineTypeText: val,
        });
        // TODO: On focus instead of on change
        this.updateLastActive = (c) => this.onWineTypeChange(this.state.wineTypeText + c);
        this.onChange();
    }

    public onProducerChange(val: string) {
        this.setState({
            producerText: val,
        });
        this.updateRegion();
        this.onChange();
    }

    private async updateRegion() {
        const producers: IProducer[] = await get(
            `/rest/producers/`, {name: this.state.producerText}
        );
        if (producers.length !== 1) {
            return true;
        }
        get("/rest/regions/", {producer__name: this.state.producerText})
            .then((regions: IRegion[]) => {
                this.setState({
                    regionIsEnabled: regions.length > 0,
                });
                if (regions.length === 0) {
                    this.setState({
                        regionText: regions[0].name,
                    })
                    this.onRegionChange(regions[0].name);
                }
                return true;
            });
    }

    public async updateRegionAutocomplete() {

    }

    public onRegionChange(val: string) {
        this.setState({
            regionText: val,
        });
        this.updateLastActive = (c) => this.onRegionChange(this.state.regionText + c);
        get("/rest/viti-areas/", {region__name: this.state.regionText})
            .then((vitiAreas: IVitiArea[]) => {
                staticAutocomplete(
                    nameToId("Viti Area"),
                    restModelsToNameDict(vitiAreas),
                    this.onVitiAreaChange,
                );
            });
        this.onChange();
    }

    public onVitiAreaChange(val: string) {
        this.setState({
            vitiAreaText: val,
        });
        this.onChange();
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

    public handleSpecialChar(e: React.MouseEvent, char: string) {
        e.preventDefault();
        this.updateLastActive(char);
    }
}
