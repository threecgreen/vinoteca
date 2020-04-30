import { getOrCreate, nonNulls, singleEntityGetter } from "./common";
import { get, post, put } from "./requests";
import { IGrape, IGrapeForm, ITopEntity } from "./Rest";

interface IGetGrapesParams {
    id?: number;
    name?: string;
}

export async function getGrapes({ id, name }: IGetGrapesParams): Promise<IGrape[]> {
    const nonNullParams = nonNulls({ id, name });
    return get("/rest/grapes", nonNullParams);
}

export const getGrape = singleEntityGetter("grape", getGrapes);
export const getOrCreateGrape = getOrCreate("grape", getGrapes, createGrape);

export async function createGrape(grape: IGrapeForm): Promise<IGrape> {
    return post("/rest/grapes", grape);
}

export async function updateGrape(id: number, grape: IGrapeForm): Promise<IGrape> {
    return put(`/rest/grapes/${id}`, grape);
}

export async function getTopGrapes(limit?: number): Promise<ITopEntity[]> {
    const nonNullParams = nonNulls({limit});
    return get("/rest/grapes/top", nonNullParams);
}
