import { Color } from "./Color";
import { Grape } from "./Grape";
import { Producer } from "./Producer";
import { Region } from "./Region";
import { Wine } from "./Wine";
import { WineGrape } from "./WineGrape";
import { WineType } from "./WineType";

type GraphModel = Color | Grape | Producer | Region | Wine | WineGrape | WineType;

/** Basic type that corresponds to the response JSON of many asynchronous requests. */
export interface IDict<T> {
    [key: string]: T;
}
