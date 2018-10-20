import { IChartInput } from "./wine_charts";

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

export class Grape implements IChartInput {
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

    public label(): string {
        return this.grape;
    }

    public datum(): number {
        return this.percent;
    }
}

export interface IWineTypeJSON {
    id: number;
    name: string;
}

export interface IWineTypesDictJSON {
    [name: string]: number;
}

export class WineTypeStat implements IChartInput {
    public static fromDict(dict: IWineTypesDictJSON) {
        const wineTypes: WineTypeStat[] = [];
        Object.keys(dict).forEach((key) => {
            wineTypes.push(new WineTypeStat(key, dict[key]));
        });
        return wineTypes;
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

export interface IWineJSON {
    id: number;
    name: string;
    producer: number;
    wine_type: number;
    color: number;
    viti_area: number;
}
