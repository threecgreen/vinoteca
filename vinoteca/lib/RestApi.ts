import { get, IQueryParams } from "./ApiHelper";
import { IProducer, IRegion, IRestModel } from "./RestTypes";
import { IDict, isEmpty } from "./utils";
import { ResultState } from "../front_end/search_wines/SearchWinesResults";
import Logger from "./Logger";

function nonNulls(obj: IDict<string | number | boolean | undefined>): IQueryParams {
    let q: IQueryParams = {};
    Object.keys(obj).filter(k => Boolean(k)).forEach((k) => {
        if (obj[k]) {
            q[k] = obj[k] as string | number | boolean;
        }
    });
    return q;
}

function singleEntityGetter<U>(listGetter: (...params: any) => Promise<U[]>): (id: number) => Promise<U> {
    return (id: number) => {
        return listGetter(id)
            .then((results: U[]) =>  {
                if (results.length !== 1) {
                    const message = "Received more than one result when one was expected";
                    const logger = new Logger("RestApi");
                    logger.logCritical(message);
                    Promise.reject(message);
                }
                return results[0];;
            });
    }
}

export async function getRegions(id: number): Promise<IRegion[]> {
    return get("/rest/regions/", {id})
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
