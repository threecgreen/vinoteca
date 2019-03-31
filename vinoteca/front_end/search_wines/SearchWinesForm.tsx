import * as React from "react";
import { ColorInput } from "../../components/ColorInput";
import { Row } from "../../components/Grid";
import { ProducerInput } from "../../components/ProducerInput";
import { RegionInput } from "../../components/RegionInput";
import { VitiAreaInput } from "../../components/VitiAreaInput";
import { WineTypeInput } from "../../components/WineTypeInput";

interface ISearchWinesFormProps {
    colorSelection: string;
    onColorChange: (val: string) => void;
    wineTypeText: string;
    onWineTypeChange: (val: string) => void;
    producerText: string;
    onProducerChange: (val: string) => void;
    regionText: string;
    onRegionChange: (val: string) => void;
    vitiAreaText: string;
    onVitiAreaChange: (val: string) => void;
    isRegionEnabled: boolean;
}

export const SearchWinesForm: React.FunctionComponent<ISearchWinesFormProps> = (props) => {
    return (
        <form autoComplete="off">
            <Row>
                <ColorInput selection={ props.colorSelection }
                    onChange={ props.onColorChange }
                />
                <WineTypeInput value={ props.wineTypeText }
                    onChange={ props.onWineTypeChange }
                />
                <ProducerInput value={ props.producerText }
                    onChange={ props.onProducerChange }
                />
                <RegionInput value={ props.regionText }
                    onChange={ props.onRegionChange }
                    enabled={ props.isRegionEnabled }
                />
                <VitiAreaInput value={ props.vitiAreaText }
                    onChange={ props.onVitiAreaChange }
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
