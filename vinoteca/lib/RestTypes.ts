/** Implement interfaces to interact with the vinoteca REST API. */
import { IChartInput } from "./wine_charts";

export interface IRestModel {
    id: number;
    name: string;
}

export interface IGenericStat {
    [name: string]: number;
}

export class GenericStat implements IChartInput {
    public static fromJSON(json: IGenericStat) {
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

export interface IRegion extends IRestModel {
    is_us: boolean;
}

export interface IProducer extends IRestModel {
    region: number;
}

export interface IVitiArea extends IRestModel {
    region: number;
}

export interface IWineGrape {
    id: number;
    wine: number;
    grape: string;
    percent: number | undefined;
}

export class Grape implements IChartInput {
    public static fromArray(jsonArray: IWineGrape[]) {
        return jsonArray.map((grapeJ) => {
            return new Grape(grapeJ);
        });
    }

    private wine: number;
    private grape: string;
    private percent: number | undefined;

    constructor(json: IWineGrape) {
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

export interface IWine extends IRestModel {
    producer: number;
    wine_type: number;
    color: number;
    viti_area: number;
}

export interface ISearchWinesResult {
    id: number;
    name?: string;
    color: string;
    producer: string;
    region: string;
    wine_type: string;
    viti_area?: string;
}

export interface IProducerWines {
    lastPurchasedDate: Date;
    color: string;
    name?: string;
    wineType: string;
    vitiArea: string;
    totalQuantityPurchased: number;
    avgPrice: number;
    rating: number;
}
