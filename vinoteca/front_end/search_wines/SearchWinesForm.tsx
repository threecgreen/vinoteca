import * as React from "react";
import { ColorInput } from "../../components/ColorInput";
import { Row } from "../../components/Grid";
import { ProducerInput } from "../../components/ProducerInput";
import { RegionInput } from "../../components/RegionInput";
import { VitiAreaInput } from "../../components/VitiAreaInput";
import { WineTypeInput } from "../../components/WineTypeInput";
import { SearchWinesInput, SearchWinesTextInput } from "./SearchWinesApp";

interface ISearchWinesFormProps {
    colorSelection: string;
    wineTypeText: string;
    producerText: string;
    regionText: string;
    vitiAreaText: string;
    onInputChange: (input: SearchWinesInput, val: string) => void;
    onTextInputFocus: (input: SearchWinesTextInput) => void;
    onTextInputBlur: (input: SearchWinesTextInput) => void;
}

export const SearchWinesForm: React.FunctionComponent<ISearchWinesFormProps> = (props) => {
    return (
        <form autoComplete="off">
            <Row>
                <ColorInput selection={ props.colorSelection }
                    onChange={ (v) => props.onInputChange(SearchWinesInput.Color, v) }
                    extraChoice="Any"
                />
                <WineTypeInput value={ props.wineTypeText }
                    onChange={ (v) => props.onInputChange(SearchWinesInput.WineType, v) }
                    onFocus={ () => props.onTextInputFocus(SearchWinesTextInput.WineType) }
                    onBlur={ () => props.onTextInputBlur(SearchWinesTextInput.WineType) }
                />
                <ProducerInput value={ props.producerText }
                    onChange={ (v) => props.onInputChange(SearchWinesInput.Producer, v) }
                    onFocus={ () => props.onTextInputFocus(SearchWinesTextInput.Producer) }
                    onBlur={ () => props.onTextInputBlur(SearchWinesTextInput.Producer) }
                />
                <RegionInput value={ props.regionText }
                    onChange={ (v) => props.onInputChange(SearchWinesInput.Region, v) }
                    producerFilter={ props.producerText }
                    onFocus={ () => props.onTextInputFocus(SearchWinesTextInput.Region) }
                    onBlur={ () => props.onTextInputBlur(SearchWinesTextInput.Region) }
                />
                <VitiAreaInput value={ props.vitiAreaText }
                    onChange={ (v) => props.onInputChange(SearchWinesInput.VitiArea, v) }
                    onFocus={ () => props.onTextInputFocus(SearchWinesTextInput.VitiArea) }
                    onBlur={ () => props.onTextInputBlur(SearchWinesTextInput.VitiArea) }
                />
            </Row>
        </form>
    );
};
