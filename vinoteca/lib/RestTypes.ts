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
    private percent: number | null;

    constructor(json: IWineGrape) {
        this.wine = json.wineId;
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

export class Wine implements IWine {
    public static getNameAndType(name: string | null, wineType: string): string {
        return `${(name ? name + " " : "")}${wineType}`;
    }

    // @ts-ignore
    public id: number;
    // @ts-ignore
    public name: string | null;
    // @ts-ignore
    public inventory: number;
    // @ts-ignore
    public rating: number | null;
    // @ts-ignore
    public color: string;
    // @ts-ignore
    public colorId: number;
    // @ts-ignore
    public wineType: string;
    // @ts-ignore
    public wineTypeId: number;
    // @ts-ignore
    public producer: string;
    // @ts-ignore
    public producerId: number;
    // @ts-ignore
    public region: string;
    // @ts-ignore
    public regionId: number;
    // @ts-ignore
    public vitiArea: string | null;
    // @ts-ignore
    public vitiAreaId: number | null;
    // @ts-ignore
    public avgPrice: number;
    // @ts-ignore
    public lastPurchasedVintage: number | null;
    // @ts-ignore
    public why: string | null;
    // @ts-ignore
    public description: string | null;
    // @ts-ignore
    public notes: string | null;

    constructor(wine: IWine) {
        Object.assign(this, wine);
    }

    public get nameAndType(): string {
        return Wine.getNameAndType(this.name, this.wineType);
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
