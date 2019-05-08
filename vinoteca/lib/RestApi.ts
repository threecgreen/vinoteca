import { get, IQueryParams, post, put } from "./ApiHelper";
import Logger from "./Logger";
import { INewRegion, IProducer, IRegion, IWine } from "./RestTypes";
import { IDict, isEmpty } from "./utils";

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
interface IGetRegionsParams {
    id?: number;
    name?: string;
    producerName?: string;
}

export async function getRegions({id, name, producerName}: IGetRegionsParams): Promise<IRegion[]> {
    const nonNullParams = nonNulls({id, name, producers__name: producerName});
    if (isEmpty(nonNullParams)) {
        return Promise.reject("No query params provided");
    }
    return get("/rest/regions/", nonNullParams)
        .then((regions: IRegion[]) => {
            if (regions.length === 0) {
                return Promise.reject(new EmptyResultError("Empty result returned for region"));
            }
            return regions;
        });
}

export const getRegion = singleEntityGetter(getRegions);

export async function createRegion(region: INewRegion): Promise<IRegion> {
    return post("/rest/regions/", region);
}

/* PRODUCERS */
interface IGetProducersParams {
    id?: number;
    regionId?: number;
}

export async function getProducers({id, regionId}: IGetProducersParams): Promise<IProducer[]> {
    const nonNullParams = nonNulls({id, region_id: regionId});
    if (isEmpty(nonNullParams)) {
        return Promise.reject("No query params provided");
    }
    return get("/rest/producers/", nonNullParams)
        .then((producers: IProducer[]) => {
            if (producers.length === 0) {
                return Promise.reject(new EmptyResultError("Empty result returned for producer"));
            }
            return producers;
        });
}

export const getProducer = singleEntityGetter(getProducers);

export async function updateProducer(producer: IProducer): Promise<IProducer> {
    return put(`/rest/producers/${producer.id}/`, producer);
}

/* WINES */
interface IGetWinesParams {
    id?: number;
    producerId?: number;
    regionId?: number;
    wineTypeId?: number;
}

export async function getWines(
    {id, producerId, regionId, wineTypeId}: IGetWinesParams,
): Promise<IWine[]> {
    const nonNullParams = nonNulls({id, producer_id: producerId, producer__region_id: regionId,
                                    wine_type_id: wineTypeId});
    if (isEmpty(nonNullParams)) {
        return Promise.reject("No query params provided");
    }
    return get("/rest/wines/", nonNullParams)
        .then((wines: IWine[]) => {
            if (wines.length === 0) {
                return Promise.reject(new EmptyResultError("Empty result returned for wines"));
            }
            return wines;
        });
}
