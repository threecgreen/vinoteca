import { get, IQueryParams, post, put, delete_ } from "./ApiHelper";
import Logger from "./Logger";
import { IProducer, IRegion, IWine, IPurchase, IRegionForm, IVitiAreaForm, IVitiAreaStats, IVitiArea } from "./Rest";
import { IRestModel } from "./RestTypes";
import { IDict, isEmpty } from "./utils";

export function toDict(models: IRestModel[]): IDict<string | null> {
    let result: IDict<string | null> = {};
    models.forEach((model) => {
        result[model.name] = null;
    });
    return result;
}

export class EmptyResultError extends Error {
    public static isInstance(err: Error): boolean {
        return err.name === this.NAME;
    }

    private static NAME = "EmptyResultError";

    constructor(message: string) {
        super(message);
        this.name = EmptyResultError.NAME;
    }
}

function nonNulls(obj: IDict<string | number | boolean | undefined>): IQueryParams {
    const q: IQueryParams = {};
    Object.keys(obj).filter((k) => Boolean(obj[k])).forEach((k) => {
        q[k] = obj[k] as string | number | boolean;
    });
    return q;
}

function singleEntityGetter<T, U>(
    listGetter: (params: T) => Promise<U[]>,
): (params: T) => Promise<U> {
    const objName = listGetter.name.substr(3);
    return async (params: T) => {
        const results = await listGetter(params);
        if (results.length > 1) {
            const message = `Received more than one ${objName} result when one was expected`;
            const logger = new Logger("RestApi");
            logger.logCritical(message);
            return Promise.reject(message);
        }
        return results[0];
    };
}

/* REGIONS */
interface IGetRegionParams {
    id?: number;
    name?: string;
    producerName?: string;
}

export async function getRegions({ id, name, producerName }: IGetRegionParams): Promise<IRegion[]> {
    const nonNullParams = nonNulls({ id, name, producers__name: producerName });
    if (isEmpty(nonNullParams)) {
        return Promise.reject("No query params provided");
    }
    const regions: IRegion[] = await get("/rest/regions", nonNullParams);
    if (regions.length === 0) {
        return Promise.reject(new EmptyResultError("Empty result returned for region"));
    }
    return regions;
}

export const getRegion = singleEntityGetter(getRegions);

export async function createRegion(region: IRegionForm): Promise<IRegion> {
    return post("/rest/regions", region);
}

export async function updateRegion(region: IRegion): Promise<IRegion> {
    return put(`/rest/regions/${region.id}`, region);
}

/* PRODUCERS */
interface IGetProducersParams {
    id?: number;
    regionId?: number;
}

export async function getProducers({ id, regionId }: IGetProducersParams): Promise<IProducer[]> {
    const nonNullParams = nonNulls({ id, region_id: regionId });
    if (isEmpty(nonNullParams)) {
        return Promise.reject("No query params provided");
    }
    const producers: IProducer[] = await get("/rest/producers", nonNullParams);
    if (producers.length === 0) {
        return Promise.reject(new EmptyResultError("Empty result returned for producer"));
    }
    return producers;
}

export const getProducer = singleEntityGetter(getProducers);

export async function updateProducer(producer: IProducer): Promise<IProducer> {
    return put(`/rest/producers/${producer.id}/`, producer);
}

export async function deleteProducer(id: number): Promise<void> {
    return delete_(`/rest/producers/${id}/`);
}

/* PURCHASES */
interface IGetPurchasesParams {
    wineId?: number;
}

export async function getPurchases({wineId}: IGetPurchasesParams): Promise<IPurchase[]> {
    const nonNullParams = nonNulls({ wine_id: wineId });
    if (isEmpty(nonNullParams)) {
        return Promise.reject("No query params provided");
    }
    const purchases = await get<IPurchase[]>("/rest/purchases", nonNullParams);
    if (purchases.length === 0) {
        return Promise.reject(new EmptyResultError("Empty result returned for purchase"));
    }
    return purchases;
}

/* VITI AREAS */
interface IGetVitiAreasParams {
    id?: number;
    name?: string;
    regionName?: string;
}

export async function getVitiAreas(
    { id, name, regionName }: IGetVitiAreasParams,
): Promise<IVitiArea[]> {
    const nonNullParams = nonNulls({ id, name, region__name: regionName });
    if (isEmpty(nonNullParams)) {
        return Promise.reject("No query params provided");
    }
    const vitiAreas: IVitiArea[] = await get("/rest/viti-areas/", nonNullParams);
    if (vitiAreas.length === 0) {
        return Promise.reject(new EmptyResultError("Empty result returned for viti area"));
    }
    return vitiAreas;
}

export const getVitiArea = singleEntityGetter(getVitiAreas);

export async function createVitiArea(vitiArea: IVitiAreaForm): Promise<IVitiArea> {
    return post("/rest/viti-areas/", vitiArea);
}

export async function updateVitiArea(vitiArea: IVitiArea): Promise<IVitiArea> {
    return put(`/rest/viti-areas/${vitiArea.id}/`, vitiArea);
}

interface IGetVitiAreaStatsParams {
    id?: number;
    regionId?: number;
}

export async function getVitiAreaStats(
    { id, regionId }: IGetVitiAreaStatsParams,
): Promise<IVitiAreaStats[]> {
    const nonNullParams = nonNulls({ id, region_id: regionId });
    if (isEmpty(nonNullParams)) {
        return Promise.reject("No query params provided");
    }
    return get("/rest/viti-areas/stats", nonNullParams);
}

/* WINES */
interface IGetWinesParams {
    id?: number;
    producerId?: number;
    regionId?: number;
    vitiAreaId?: number;
    wineTypeId?: number;
}

export async function getWines(
    { id, producerId, regionId, vitiAreaId, wineTypeId }: IGetWinesParams,
): Promise<IWine[]> {
    const nonNullParams = nonNulls({
        id, producer__region_id: regionId, producer_id: producerId,
        viti_area_id: vitiAreaId, wine_type_id: wineTypeId,
    });
    const wines: IWine[] = await get("/rest/wines", nonNullParams);
    if (wines.length === 0) {
        return Promise.reject(new EmptyResultError("Empty result returned for wines"));
    }
    return wines;
}

export const getWine = singleEntityGetter(getWines);

export async function getWinesTable(): Promise<IWine[]> {
    return get("/rest/wines");
}

/* WINE TYPES */
interface IGetWineTypeParams {
    id?: number;
    name?: number;
}

export async function getWineTypes({ id, name }: IGetWineTypeParams): Promise<IRestModel[]> {
    const nonNullParams = nonNulls({ id, name });
    if (isEmpty(nonNullParams)) {
        return Promise.reject("No query params provided");
    }
    const wineTypes: IRestModel[] = await get("/rest/wine-types", nonNullParams);
    if (wineTypes.length === 0) {
        return Promise.reject(new EmptyResultError("Empty result returned for wine types"));
    }
    return wineTypes;
}

export const getWineType = singleEntityGetter(getWineTypes);

export async function updateWineType(wineType: IRestModel): Promise<IRestModel> {
    return put(`/rest/wine-types/${wineType.id}`, wineType);
}
