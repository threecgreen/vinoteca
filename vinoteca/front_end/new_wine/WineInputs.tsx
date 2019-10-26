import * as React from "react";
import { ColorInput } from "../../components/ColorInput";
import { NewWineTextInput } from "./NewWineApp";
import { WineTypeInput } from "../../components/WineTypeInput";
import { ProducerInput } from "../../components/ProducerInput";
import { RegionInput } from "../../components/RegionInput";
import { VitiAreaInput } from "../../components/VitiAreaInput";
import { StatelessTextInput } from "../../components/StatelessTextInput";
import { RatingInput } from "../../components/RatingInput";
import { FileInput } from "../../components/FileInput";

interface IProps {
    wineType: string;
    producer: string;
    region: string;
    name: string;
    why: string;
    vitiArea: string;
    description: string;
    notes: string;
    onInputChange: (input: NewWineTextInput, val: string) => void;
    onInputFocus: (input: NewWineTextInput) => void;
}

interface IState {
    color: string;
    ratingIsEnabled: boolean;
    rating?: number;
}

export class WineInputs extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            color: "",
            ratingIsEnabled: false,
        }
    }

    public render() {
        return (
            <React.Fragment>
                <ColorInput selection={ this.state.color }
                    onChange={ (v) => this.onColorChange(v) }
                    extraChoice="Select a color"
                />
                <WineTypeInput value={ this.props.wineType }
                    onChange={ (v) => this.props.onInputChange(NewWineTextInput.WineType, v) }
                    onFocus={ () => this.props.onInputFocus(NewWineTextInput.WineType) }
                />
                <ProducerInput value={ this.props.producer }
                    onChange={ (v) => this.props.onInputChange(NewWineTextInput.Producer, v) }
                    onFocus={ () => this.props.onInputFocus(NewWineTextInput.Producer) }
                />
                <RegionInput value={ this.props.region }
                    onChange={ (v) => this.props.onInputChange(NewWineTextInput.Region, v) }
                    onFocus={ () => this.props.onInputFocus(NewWineTextInput.Region) }
                />
                <RatingInput />
                <VitiAreaInput value={ this.props.vitiArea }
                    onChange={ (v) => this.props.onInputChange(NewWineTextInput.VitiArea, v) }
                    onFocus={ () => this.props.onInputFocus(NewWineTextInput.VitiArea) }
                />
                <StatelessTextInput name="Description" className=""
                    s={ 12 } l={ 6 }
                    value={ this.props.description }
                    onChange={ (v) => this.props.onInputChange(NewWineTextInput.Description, v) }
                    onFocus={ () => this.props.onInputFocus(NewWineTextInput.Description) }
                />
                <StatelessTextInput name="Notes" className=""
                    s={ 12 } l={ 6 }
                    value={ this.props.notes }
                    onChange={ (v) => this.props.onInputChange(NewWineTextInput.Notes, v) }
                    onFocus={ () => this.props.onInputFocus(NewWineTextInput.Notes) }
                />
                <FileInput name="Wine Image" />
            </React.Fragment>
        )
    }

    private onColorChange(e: React.ChangeEvent<HTMLSelectElement>) {
        this.setState({color: e.target.value})
    }
}
