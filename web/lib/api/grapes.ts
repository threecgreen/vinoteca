import { IGrape, IGrapeForm, ITopEntity } from "generated/rest";
import { getOrCreate, nonNulls } from "./common";
import { get, post, put } from "./requests";

const BASE_URL = "/rest/grapes";

interface IGetGrapesParams {
    id?: number;
    name?: string;
}

export async function getGrapes({ id, name }: IGetGrapesParams): Promise<IGrape[]> {
    const nonNullParams = nonNulls({ id, name });
    return get(BASE_URL, nonNullParams);
}

export const getOrCreateGrape = getOrCreate("grape", getGrapes, createGrape);

export async function createGrape(grape: IGrapeForm): Promise<IGrape> {
    return post(BASE_URL, grape);
}

export async function updateGrape(id: number, grape: IGrapeForm): Promise<IGrape> {
    return put(`${BASE_URL}/${id}`, grape);
}

export async function getTopGrapes(limit?: number): Promise<ITopEntity[]> {
    const nonNullParams = nonNulls({limit});
    return get(`${BASE_URL}/top`, nonNullParams);
}
