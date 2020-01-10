/** Implement interfaces to interact with the vinoteca REST API. */
import { IChartInput } from "./wine_charts";
import { IRegionForm, IWineGrape, IWine } from "./Rest";

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

export type INewRegion = IRegionForm;

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
    wineType: string;
    vitiArea?: string;
}

export class Wine {
    public static getNameAndType(name: string | undefined, wineType: string): string {
        return `${(name ? name + " " : "")}${wineType}`;
    }

    public id: number;
    public name?: string;
    public inventory: number;
    public rating?: number;
    public color: string;
    public wineType: string;
    public wineTypeId: number;
    public producer: string;
    public producerId: number;
    public region: string;
    public regionId: number;
    public vitiArea?: string;
    public vitiAreaId?: number;
    public lastPurchaseDate: number;
    public totalQuantityPurchased: number;
    public avgPrice: number;
    public lastPurchasePrice?: number;
    public vintage?: number;
    why?: string;
    description?: string;
    notes?: string;

    constructor(wine: IWine) {
        this.id = wine.id;
        this.name = wine.name;
        this.inventory = wine.inventory;
        this.rating = wine.rating;
        this.color = wine.color;
        this.wineType = wine.wineType;
        this.wineTypeId = wine.wineTypeId;
        this.producer = wine.producer;
        this.producerId = wine.producerId;
        this.region = wine.region;
        this.regionId = wine.regionId;
        this.vitiArea = wine.vitiArea;
        this.vitiAreaId = wine.vitiAreaId;
        this.lastPurchaseDate = wine.lastPurchaseDate;
        this.totalQuantityPurchased = wine.totalQuantity;
        this.avgPrice = wine.avgPrice;
        this.lastPurchasePrice = wine.lastPurchasePrice;
        this.vintage = wine.vintage;
        this.why = wine.why;
        this.description = wine.description;
        this.notes = wine.notes;
    }

    public get nameAndType(): string {
        return Wine.getNameAndType(this.name, this.wineType);
    }
}

export interface IVitiAreaStats extends IRestModel {
    totalWines: number;
    avgPrice?: number;
    avgRating?: number;
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
        this.totalWines = vitiAreaStats.totalWines;
        this.avgPrice = vitiAreaStats.avgPrice;
        this.avgRating = vitiAreaStats.avgRating;
    }
}

export interface IProfileStats {
    totalQuantity: number;
    avgPrice: number;
    avgRating: number;
}

export class ProfileStats {
    public totalQuantity: number;
    public avgPrice: number;
    public avgRating: number;

    constructor(stats: IProfileStats) {
        this.totalQuantity = stats.totalQuantity;
        this.avgPrice = stats.avgPrice;
        this.avgRating = stats.avgRating;
    }
}
