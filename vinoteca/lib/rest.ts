/** Implement interfaces to interact with the vinoteca REST API. */
import { IChartInput } from "./wine_charts";

export interface IRESTObject {
    id: number;
    name: string;
}

export interface IGenericStatJSON {
    [name: string]: number;
}

export class GenericStat implements IChartInput {
    public static fromJSON(json: IGenericStatJSON) {
        const stats: GenericStat[] = [];
        Object.keys(json).forEach((key) => {
            stats.push(new GenericStat(key, json[key]));
        });
        return stats;
    }

    constructor(private name: string, private stat: number) {
    }

    public label(): string {
        return this.name;
    }

    public datum(): number {
        return this.stat;
    }
}

export interface IColorJSON extends IRESTObject {
}

export interface IRegionJSON extends IRESTObject {
    is_us: boolean;
}

export interface IProducerJSON extends IRESTObject {
    region: number;
}

export interface IVitiAreaJSON extends IRESTObject {
    region: number;
}

export interface IWineGrapeJSON {
    id: number;
    wine: number;
    grape: string;
    percent: number | undefined;
}

export class Grape implements IChartInput {
    public static fromArray(jsonArray: IWineGrapeJSON[]) {
        return jsonArray.map((grapeJ) => {
            return new Grape(grapeJ);
        });
    }

    private wine: number;
    private grape: string;
    private percent: number | undefined;

    constructor(json: IWineGrapeJSON) {
        this.wine = json.wine;
        this.grape = json.grape;
        this.percent = json.percent;
    }

    public label(): string {
        return this.grape;
    }

    public datum(): number {
        return this.percent || 0;
    }
}

export interface IWineTypeJSON extends IRESTObject {
}

export interface IWineJSON extends IRESTObject {
    producer: number;
    wine_type: number;
    color: number;
    viti_area: number;
}

export interface IWineSearchResultsJSON {
    results: string;
}
