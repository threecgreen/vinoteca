import React from "react";
import { Form } from "../../components/Form";
import { Row } from "../../components/Grid";
import { ColorInput } from "../../components/model_inputs/ColorInput";
import { ProducerInput } from "../../components/model_inputs/ProducerInput";
import { RegionInput } from "../../components/model_inputs/RegionInput";
import { VitiAreaInput } from "../../components/model_inputs/VitiAreaInput";
import { WineTypeInput } from "../../components/model_inputs/WineTypeInput";
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
        <Form>
            <Row>
                <ColorInput selection={ props.colorSelection }
                    s={ 12 } m={ 4 } l={ 2 }
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
        </Form>
    );
};
SearchWinesForm.displayName = "SearchWinesForm";
