import { ChartTuple, IChartObject } from "./wine_charts";

/** Implement interfaces to interact with the vinoteca REST API. */

export interface INameJSON {
    name: string;
}

export interface IColorJSON {
    id: number;
    name: string;
}

export interface IRegionJSON {
    id: number;
    name: string;
    is_us: boolean;
}

export interface IProducerJSON {
    id: number;
    name: string;
    region: number;
}

export interface IVitiAreaJSON {
    id: number;
    name: string;
    region: number;
}

export interface IGrapeJSON {
    id: number;
    wine: number;
    grape: string;
    percent: number | undefined;
}

export class Grape implements IChartObject {
    public static fromArray(jsonArray: IGrapeJSON[]) {
        return jsonArray.map((grapeJ) => {
            return new Grape(grapeJ);
        });
    }

    private wine: number;
    private grape: string;
    private percent: number | undefined;

    constructor(json: IGrapeJSON) {
        this.wine = json["wine"];
        this.grape = json["grape"];
        this.percent = json["percent"];
    }

    public key(): string {
        return this.grape;
    }

    public value(): number {
        return this.percent;
    }
}

export interface IWineTypeJSON {
    id: number;
    name: string;
}

export interface IWineJSON {
    id: number;
    name: string;
    producer: number;
    wine_type: number;
    color: number;
    viti_area: number;
}
