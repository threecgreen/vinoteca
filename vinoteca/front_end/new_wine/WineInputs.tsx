import React from "react";
import { ColorInput } from "../../components/ColorInput";
import { FileInput } from "../../components/FileInput";
import { ProducerInput } from "../../components/ProducerInput";
import { RatingInput } from "../../components/RatingInput";
import { RegionInput } from "../../components/RegionInput";
import { TextInput } from "../../components/TextInput";
import { VitiAreaInput } from "../../components/VitiAreaInput";
import { WineTypeInput } from "../../components/WineTypeInput";
import { NewWineTextInput } from "./NewWineApp";

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
            <>
                <ColorInput selection={ this.state.color }
                    onChange={ (v) => this.onColorChange(v) }
                    extraChoice="Select a color"
                />
                <WineTypeInput value={ this.props.wineType }
                    onChange={ (v) => this.props.onInputChange(NewWineTextInput.WineType, v) }
                />
                <TextInput name="Name" className=""
                    s={ 12 } l={ 6 }
                    value={ this.props.name }
                    onChange={ (v) => this.props.onInputChange(NewWineTextInput.Name, v) }
                />
                <ProducerInput value={ this.props.producer }
                    onChange={ (v) => this.props.onInputChange(NewWineTextInput.Producer, v) }
                />
                <RegionInput value={ this.props.region }
                    onChange={ (v) => this.props.onInputChange(NewWineTextInput.Region, v) }
                />
                <RatingInput />
                <VitiAreaInput value={ this.props.vitiArea }
                    onChange={ (v) => this.props.onInputChange(NewWineTextInput.VitiArea, v) }
                />
                <TextInput name="Description" className=""
                    s={ 12 } l={ 6 }
                    value={ this.props.description }
                    onChange={ (v) => this.props.onInputChange(NewWineTextInput.Description, v) }
                />
                <TextInput name="Notes" className=""
                    s={ 12 } l={ 6 }
                    value={ this.props.notes }
                    onChange={ (v) => this.props.onInputChange(NewWineTextInput.Notes, v) }
                />
                <FileInput name="Wine Image" onChange={ () => null } />
            </>
        )
    }

    private onColorChange(val: string) {
        this.setState({color: val})
    }
}
