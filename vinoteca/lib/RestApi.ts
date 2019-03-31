import { get, IQueryParams } from "./ApiHelper";
import { IProducer, IRegion } from "./RestTypes";
import { IDict, isEmpty } from "./utils";
import Logger from "./Logger";

function nonNulls(obj: IDict<string | number | boolean | undefined>): IQueryParams {
    let q: IQueryParams = {};
    Object.keys(obj).filter(k => Boolean(obj[k])).forEach((k) => {
        q[k] = obj[k] as string | number | boolean;
    });
    return q;
}

function singleEntityGetter<T>(listGetter: (...params: any) => Promise<T[]>): (id: number) => Promise<T> {
    return async (id: number) => {
        const results = await listGetter(id);
        if (results.length !== 1) {
            const message = "Received more than one result when one was expected";
            const logger = new Logger("RestApi");
            logger.logCritical(message);
            Promise.reject(message);
        }
        return results[0];
        ;
    }
}

export async function getRegions(id?: number, producerName?: string): Promise<IRegion[]> {
    const nonNullParams = nonNulls({id, producers__name: producerName});
    if (isEmpty(nonNullParams)) {
        return Promise.reject("No query params provided");
    }
    return get("/rest/regions/", nonNullParams)
        .then((regions: IRegion[]) => {
            if (regions.length === 0) {
                Promise.reject("Empty result returned for region");
            }
            return regions;
        });
}

export const getRegion = singleEntityGetter(getRegions);

export async function getProducers(id?: number, regionId?: number): Promise<IProducer[]> {
    const nonNullParams = nonNulls({id, region_id: regionId});
    if (isEmpty(nonNullParams)) {
        return Promise.reject("No query params provided");
    }
    return get("/rest/producers/", nonNullParams)
        .then((producers: IProducer[]) => {
            if (producers.length === 0) {
                Promise.reject("Empty result return for producer");
            }
            return producers;
        });
}

export const getProducer = singleEntityGetter(getProducers);
