import React from "react";
import { ColorInput } from "../../components/ColorInput";
import { Row } from "../../components/Grid";
import { ProducerInput } from "../../components/ProducerInput";
import { RegionInput } from "../../components/RegionInput";
import { VitiAreaInput } from "../../components/VitiAreaInput";
import { WineTypeInput } from "../../components/WineTypeInput";
import { SearchWinesInput } from "./SearchWinesApp";

interface IProps {
    colorSelection: string;
    wineTypeText: string;
    producerText: string;
    regionText: string;
    vitiAreaText: string;
    onInputChange: (input: SearchWinesInput, val: string) => void;
}

export const SearchWinesForm: React.FunctionComponent<IProps> = (props) => {
    return (
        <form autoComplete="off">
            <Row>
                <ColorInput selection={ props.colorSelection }
                    onChange={ (v) => props.onInputChange(SearchWinesInput.Color, v) }
                    extraChoice="Any"
                />
                <WineTypeInput value={ props.wineTypeText }
                    onChange={ (v) => props.onInputChange(SearchWinesInput.WineType, v) }
                />
                <ProducerInput value={ props.producerText }
                    onChange={ (v) => props.onInputChange(SearchWinesInput.Producer, v) }
                />
                <RegionInput value={ props.regionText }
                    onChange={ (v) => props.onInputChange(SearchWinesInput.Region, v) }
                    producerText={ props.producerText }
                />
                <VitiAreaInput value={ props.vitiAreaText }
                    onChange={ (v) => props.onInputChange(SearchWinesInput.VitiArea, v) }
                    regionText={ props.regionText }
                />
            </Row>
        </form>
    );
};
SearchWinesForm.displayName = "SearchWinesForm";
