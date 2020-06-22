import React from "react";
import { FileInput } from "../../components/inputs/FileInput";
import { TextInput } from "../../components/inputs/TextInput";
import { ColorInput } from "../../components/model_inputs/ColorInput";
import { ProducerInput } from "../../components/model_inputs/ProducerInput";
import { RatingInput } from "../../components/model_inputs/RatingInput";
import { RegionInput } from "../../components/model_inputs/RegionInput";
import { VitiAreaInput } from "../../components/model_inputs/VitiAreaInput";
import { WineTypeInput } from "../../components/model_inputs/WineTypeInput";
import { getColor } from "../../lib/api/colors";
import { getOrCreateProducer } from "../../lib/api/producers";
import { getRegion } from "../../lib/api/regions";
import { IColor, IProducer, IVitiArea, IWineForm, IWineType } from "../../lib/api/Rest";
import { getOrCreateVitiArea } from "../../lib/api/viti_areas";
import { getOrCreateWineType } from "../../lib/api/wine_types";

export interface IWineData {
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
    file: File | null;
}

export const initWineInputData = (): IWineData => ({
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
    file: null,
});

const getOrCreateVitiAreaForRegion = async (data: IWineData, regionId: number) => {
    if (data.vitiArea) {
        return getOrCreateVitiArea({name: data.vitiArea}, {name: data.vitiArea, regionId});
    }
    return null;
};

const getProducerAndVitiArea = async (data: IWineData) => {
    const region = await getRegion({name: data.region});
    return Promise.all<IProducer, IVitiArea | null>([
        getOrCreateProducer({name: data.producer}, {name: data.producer, regionId: region.id}),
        getOrCreateVitiAreaForRegion(data, region.id),
    ]);
};

export const wineDataToForm = async (data: IWineData, inventory: number): Promise<IWineForm> => {
    const [color, wineType, [producer, vitiArea]] =
        await Promise.all<IColor, IWineType, [IProducer, IVitiArea | null]>([
            getColor({name: data.color}),
            getOrCreateWineType({name: data.wineType}, {name: data.wineType}),
            getProducerAndVitiArea(data),
        ]);
    return {
        colorId: color.id,
        wineTypeId: wineType.id,
        producerId: producer.id,
        vitiAreaId: vitiArea?.id ?? null,
        name: data.name || null,
        why: data.why || null,
        description: data.description || null,
        rating: data.isRatingEnabled ? data.rating : null,
        inventory,
        notes: data.notes || null,
    };
};

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
    | {type: "setNotes", notes: string}
    | {type: "setFile", file: File | null}
    | {type: "reset" };

export const wineInputReducer: React.Reducer<IWineData, Action> = (state, action) => {
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
        case "setFile":
            return { ...state, file: action.file };
        case "reset":
            return initWineInputData();
        default:
            return state;
    }
};

interface IProps {
    data: IWineData;
    dispatch: React.Dispatch<Action>;
}

export const WineInputs: React.FC<IProps> = ({data, dispatch}) => (
    <>
        {/* TODO: required */}
        <ColorInput selection={ data.color }
            s={ 12 } m={ 4 } l={ 2 }
            onChange={ (color) => dispatch({type: "setColor", color}) }
            extraChoice="Select a color"
        />
        <WineTypeInput value={ data.wineType }
            onChange={ (wineType) => dispatch({type: "setWineType", wineType}) }
            required={ true }
        />
        <TextInput name="Name" className=""
            s={ 12 } l={ 6 }
            value={ data.name }
            onChange={ (name) => dispatch({type: "setName", name}) }
        />
        <ProducerInput value={ data.producer }
            onChange={ (producer) => dispatch({type: "setProducer", producer}) }
            required={ true }
        />
        <RegionInput value={ data.region }
            onChange={ (region) => dispatch({type: "setRegion", region}) }
            required={ true }
            producerText={ data.producer }
        />
        <RatingInput isChecked={ data.isRatingEnabled }
            onIsCheckedChange={ (isRatingEnabled) => dispatch({
                type: "setIsRatingEnabled",
                isRatingEnabled,
            }) }
            rating={ data.rating }
            onRatingChange={ (rating) => dispatch({type: "setRating", rating}) }
        />
        <VitiAreaInput value={ data.vitiArea }
            onChange={ (vitiArea) => dispatch({type: "setVitiArea", vitiArea}) }
            regionText={ data.region }
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
        <FileInput name="Wine Image"
            onChange={ (file) => dispatch({type: "setFile", file}) }
            // This to display something while editing if the wine already has an image
            fileName={ data.file?.name }
        />
    </>
);
WineInputs.displayName = "WineInputs";
