import * as React from "react";
import { ColorInput } from "../../components/ColorInput";
import { FileInput } from "../../components/FileInput";
import { ProducerInput } from "../../components/ProducerInput";
import { RatingInput } from "../../components/RatingInput";
import { RegionInput } from "../../components/RegionInput";
import { StatelessTextInput } from "../../components/StatelessTextInput";
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
    onSpecialCharClick: (input: NewWineTextInput, c: string, position: number) => void;
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
                    onSpecialCharClick={ (c, p) => this.props.onSpecialCharClick(NewWineTextInput.WineType, c, p) }
                />
                <ProducerInput value={ this.props.producer }
                    onChange={ (v) => this.props.onInputChange(NewWineTextInput.Producer, v) }
                    onSpecialCharClick={ (c, p) => this.props.onSpecialCharClick(NewWineTextInput.Producer, c, p) }
                />
                <RegionInput value={ this.props.region }
                    onChange={ (v) => this.props.onInputChange(NewWineTextInput.Region, v) }
                    onSpecialCharClick={ (c, p) => this.props.onSpecialCharClick(NewWineTextInput.Region, c, p) }
                />
                <RatingInput />
                <VitiAreaInput value={ this.props.vitiArea }
                    onChange={ (v) => this.props.onInputChange(NewWineTextInput.VitiArea, v) }
                    onSpecialCharClick={ (c, p) => this.props.onSpecialCharClick(NewWineTextInput.VitiArea, c, p) }
                />
                <StatelessTextInput name="Description" className=""
                    s={ 12 } l={ 6 }
                    value={ this.props.description }
                    onChange={ (v) => this.props.onInputChange(NewWineTextInput.Description, v) }
                    onSpecialCharClick={ (c, p) => this.props.onSpecialCharClick(NewWineTextInput.Description, c, p) }
                />
                <StatelessTextInput name="Notes" className=""
                    s={ 12 } l={ 6 }
                    value={ this.props.notes }
                    onChange={ (v) => this.props.onInputChange(NewWineTextInput.Notes, v) }
                    onSpecialCharClick={ (c, p) => this.props.onSpecialCharClick(NewWineTextInput.Notes, c, p) }
                />
                <FileInput name="Wine Image" />
            </React.Fragment>
        )
    }

    private onColorChange(val: string) {
        this.setState({color: val})
    }
}
