import * as React from "react";
import { ColorInput } from "../../components/ColorInput";
import { Row } from "../../components/Grid";
import { ProducerInput } from "../../components/ProducerInput";
import { RegionInput } from "../../components/RegionInput";
import { VitiAreaInput } from "../../components/VitiAreaInput";
import { WineTypeInput } from "../../components/WineTypeInput";
import { SearchWinesInput } from "./SearchWinesApp";

interface ISearchWinesFormProps {
    colorSelection: string;
    wineTypeText: string;
    producerText: string;
    regionText: string;
    vitiAreaText: string;
    isRegionEnabled: boolean;
    onInputChange: (input: SearchWinesInput, val: string) => void;
}

export const SearchWinesForm: React.FunctionComponent<ISearchWinesFormProps> = (props) => {
    return (
        <form autoComplete="off">
            <Row>
                <ColorInput selection={ props.colorSelection }
                    onChange={ (v) => props.onInputChange(SearchWinesInput.Color, v) }
                />
                <WineTypeInput value={ props.wineTypeText }
                    onChange={ (v) => props.onInputChange(SearchWinesInput.WineType, v) }
                />
                <ProducerInput value={ props.producerText }
                    onChange={ (v) => props.onInputChange(SearchWinesInput.Producer, v) }
                />
                <RegionInput value={ props.regionText }
                    onChange={ (v) => props.onInputChange(SearchWinesInput.Region, v) }
                    enabled={ props.isRegionEnabled }
                />
                <VitiAreaInput value={ props.vitiAreaText }
                    onChange={ (v) => props.onInputChange(SearchWinesInput.VitiArea, v) }
                />
            </Row>
        </form>
    );
};
    // private async updateRegion() {
    //     const producers: IProducer[] = await get(
    //         `/rest/producers/`, {name: this.state.producerText}
    //     );
    //     if (producers.length !== 1) {
    //         return true;
    //     }
    //     get("/rest/regions/", {producer__name: this.state.producerText})
    //         .then((regions: IRegion[]) => {
    //             this.setState({
    //                 regionIsEnabled: regions.length > 0,
    //             });
    //             if (regions.length === 0) {
    //                 this.setState({
    //                     regionText: regions[0].name,
    //                 })
    //                 this.onRegionChange(regions[0].name);
    //             }
    //             return true;
    //         });
    // }

    // public onRegionChange(val: string) {
    //     this.setState({
    //         regionText: val,
    //     });
    //     this.updateLastActive = (c) => this.onRegionChange(this.state.regionText + c);
    //     get("/rest/viti-areas/", {region__name: this.state.regionText})
    //         .then((vitiAreas: IVitiArea[]) => {
    //             staticAutocomplete(
    //                 nameToId("Viti Area"),
    //                 restModelsToNameDict(vitiAreas),
    //                 this.onVitiAreaChange,
    //             );
    //         });
    //     this.onChange();
    // }
