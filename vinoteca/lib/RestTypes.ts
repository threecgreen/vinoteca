/** Implement interfaces to interact with the vinoteca REST API. */
import { IChartInput } from "./wine_charts";

export interface IRestModel {
    id: number;
    name: string;
}

export interface INewRestModel {
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

export type IRegion = IRestModel;
export type INewRegion = INewRestModel;

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

export interface ISearchWinesResult {
    id: number;
    name?: string;
    color: string;
    producer: string;
    region: string;
    wine_type: string;
    viti_area?: string;
}

export interface IWine {
    id: number;
    name?: string;
    inventory: number;
    rating: number;
    color: string;
    wine_type: string;
    producer: string;
    region: string;
    viti_area?: string;
    last_purchased_date: number;
    total_quantity: number;
    avg_price: number;
}

export class Wine {
    public id: number;
    public name?: string;
    public inventory: number;
    public rating: number;
    public color: string;
    public wineType: string;
    public producer: string;
    public region: string;
    public vitiArea?: string;
    public lastPurchasedDate: number;
    public totalQuantityPurchased: number;
    public avgPrice: number;

    constructor(wine: IWine) {
        this.id = wine.id;
        this.name = wine.name;
        this.inventory = wine.inventory;
        this.rating = wine.rating;
        this.color = wine.color;
        this.wineType = wine.wine_type;
        this.producer = wine.producer;
        this.region = wine.region;
        this.vitiArea = wine.viti_area;
        this.lastPurchasedDate = wine.last_purchased_date;
        this.totalQuantityPurchased = wine.total_quantity;
        this.avgPrice = wine.avg_price;
    }
}
