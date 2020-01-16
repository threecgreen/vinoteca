import React from "react";
import { ColorInput } from "../../components/ColorInput";
import { FileInput } from "../../components/FileInput";
import { ProducerInput } from "../../components/ProducerInput";
import { RatingInput } from "../../components/RatingInput";
import { RegionInput } from "../../components/RegionInput";
import { TextInput } from "../../components/TextInput";
import { VitiAreaInput } from "../../components/VitiAreaInput";
import { WineTypeInput } from "../../components/WineTypeInput";

// TODO: handle file
interface IData {
    color: string;
    wineType: string;
    producer: string;
    region: string;
    isRatingEnabled: boolean;
    rating: number;
    name: string;
    why: string;
    vitiArea: string;
    description: string;
    notes: string;
}

export const initWineInputData: () => IData = () => ({
    color: "",
    wineType: "",
    producer: "",
    region: "",
    isRatingEnabled: false,
    rating: 5,
    name: "",
    why: "",
    vitiArea: "",
    description: "",
    notes: "",
});

type Action =
    | {type: "setColor", color: string}
    | {type: "setWineType", wineType: string}
    | {type: "setProducer", producer: string}
    | {type: "setRegion", region: string}
    | {type: "setIsRatingEnabled", isRatingEnabled: boolean}
    | {type: "setRating", rating: number}
    | {type: "setName", name: string}
    | {type: "setWhy", why: string}
    | {type: "setVitiArea", vitiArea: string}
    | {type: "setDescription", description: string}
    | {type: "setNotes", notes: string};

export const wineInputReducer: React.Reducer<IData, Action> = (state, action) => {
    switch (action.type) {
        case "setColor":
            return { ...state, color: action.color };
        case "setWineType":
            return { ...state, wineType: action.wineType };
        case "setProducer":
            return { ...state, producer: action.producer };
        case "setRegion":
            return { ...state, region: action.region };
        case "setIsRatingEnabled":
            return { ...state, isRatingEnabled: action.isRatingEnabled };
        case "setRating":
            return { ...state, rating: action.rating };
        case "setName":
            return { ...state, name: action.name };
        case "setWhy":
            return { ...state, why: action.why };
        case "setVitiArea":
            return { ...state, vitiArea: action.vitiArea };
        case "setDescription":
            return { ...state, description: action.description };
        case "setNotes":
            return { ...state, notes: action.notes };
        default:
            return state;
    }
}


interface IProps {
    data: IData,
    dispatch: React.Dispatch<Action>;
}

export const WineInputs: React.FC<IProps> = ({data, dispatch}) => {
    const ratingIsEnabled = data.rating !== null;

    return (
        <>
            <ColorInput selection={ data.color }
                onChange={ (color) => dispatch({type: "setColor", color}) }
                extraChoice="Select a color"
            />
            <WineTypeInput value={ data.wineType }
                onChange={ (wineType) => dispatch({type: "setWineType", wineType}) }
            />
            <TextInput name="Name" className=""
                s={ 12 } l={ 6 }
                value={ data.name }
                onChange={ (name) => dispatch({type: "setName", name}) }
            />
            <ProducerInput value={ data.producer }
                onChange={ (producer) => dispatch({type: "setProducer", producer}) }
            />
            <RegionInput value={ data.region }
                onChange={ (region) => dispatch({type: "setRegion", region}) }
            />
            <RatingInput isChecked={ data.isRatingEnabled }
                onIsCheckedChange={ (isRatingEnabled) => dispatch({type: "setIsRatingEnabled", isRatingEnabled}) }
                rating={ data.rating }
                onRatingChange={ (rating) => dispatch({type: "setRating", rating}) }
            />
            <VitiAreaInput value={ data.vitiArea }
                onChange={ (vitiArea) => dispatch({type: "setVitiArea", vitiArea}) }
            />
            <TextInput name="Description" className=""
                value={ data.description }
                onChange={ (description) => dispatch({type: "setDescription", description}) }
                s={ 12 } l={ 6 }
            />
            <TextInput name="Notes" className=""
                s={ 12 } l={ 6 }
                value={ data.notes }
                onChange={ (notes) => dispatch({type: "setNotes", notes}) }
            />
            <FileInput name="Wine Image" onChange={ () => null } />
        </>
    );
}
WineInputs.displayName = "WineInputs";
