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
export interface INewVitiArea extends INewRestModel {
    region: number;
}

export interface IWineGrape {
    id: number;
    wine: number;
    grape: string;
    percent: number | undefined;
}

export interface IGrape extends IRestModel {
    wines: number;
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
    producer_id: number;
    region: string;
    region_id: number;
    viti_area?: string;
    viti_area_id?: number;
    last_purchased_date: number;
    total_quantity: number;
    avg_price: number;
    last_purchased_price: number;
    vintage?: number;
}

export class Wine {
    public static getNameAndType(name: string | undefined, wineType: string): string {
        return `${(name ? name + " " : "")}${wineType}`;
    }

    public id: number;
    public name?: string;
    public inventory: number;
    public rating: number;
    public color: string;
    public wineType: string;
    public producer: string;
    public producerId: number;
    public region: string;
    public regionId: number;
    public vitiArea?: string;
    public vitiAreaId?: number;
    public lastPurchasedDate: number;
    public totalQuantityPurchased: number;
    public avgPrice: number;
    public lastPurchasedPrice?: number;
    public vintage?: number;

    constructor(wine: IWine) {
        this.id = wine.id;
        this.name = wine.name;
        this.inventory = wine.inventory;
        this.rating = wine.rating;
        this.color = wine.color;
        this.wineType = wine.wine_type;
        this.producer = wine.producer;
        this.producerId = wine.producer_id;
        this.region = wine.region;
        this.regionId = wine.region_id;
        this.vitiArea = wine.viti_area;
        this.vitiAreaId = wine.viti_area_id;
        this.lastPurchasedDate = wine.last_purchased_date;
        this.totalQuantityPurchased = wine.total_quantity;
        this.avgPrice = wine.avg_price;
        this.lastPurchasedPrice = wine.last_purchased_price;
        this.vintage = wine.vintage;
    }

    public get nameAndType(): string {
        return Wine.getNameAndType(this.name, this.wineType);
    }
}

export class WineTableWine {
    public static getNameAndType(name: string | undefined, wineType: string): string {
        return `${(name ? name + " " : "")}${wineType}`;
    }

    public id: number;
    public name?: string;
    public inventory: number;
    public rating: number;
    public color: string;
    public wineType: string;
    public producer: string;
    public producerId: number;
    public region: string;
    public regionId: number;
    public vitiArea?: string;
    public vitiAreaId?: number;
    public lastPurchasedPrice?: number;
    public vintage?: number;

    constructor(wine: IWine) {
        this.id = wine.id;
        this.name = wine.name;
        this.inventory = wine.inventory;
        this.rating = wine.rating;
        this.color = wine.color;
        this.wineType = wine.wine_type;
        this.producer = wine.producer;
        this.producerId = wine.producer_id;
        this.region = wine.region;
        this.regionId = wine.region_id;
        this.vitiArea = wine.viti_area;
        this.vitiAreaId = wine.viti_area_id;
        this.lastPurchasedPrice = wine.last_purchased_price;
        this.vintage = wine.vintage;
    }

    public get nameAndType(): string {
        return Wine.getNameAndType(this.name, this.wineType);
    }
}


export interface IVitiAreaStats extends IRestModel {
    total_wines: number;
    avg_price?: number;
    avg_rating?: number;
}

export class VitiAreaStats {
    public id: number;
    public name: string;
    public totalWines: number;
    public avgPrice?: number;
    public avgRating?: number;

    constructor(vitiAreaStats: IVitiAreaStats) {
        this.id = vitiAreaStats.id;
        this.name = vitiAreaStats.name;
        this.totalWines = vitiAreaStats.total_wines;
        this.avgPrice = vitiAreaStats.avg_price;
        this.avgRating = vitiAreaStats.avg_rating;
    }
}

export interface IProfileStats {
    total_quantity: number;
    avg_price: number;
    avg_rating: number;
}

export class ProfileStats {
    public totalQuantity: number;
    public avgPrice: number;
    public avgRating: number;

    constructor(stats: IProfileStats) {
        this.totalQuantity = stats.total_quantity;
        this.avgPrice = stats.avg_price;
        this.avgRating = stats.avg_rating;
    }
}
