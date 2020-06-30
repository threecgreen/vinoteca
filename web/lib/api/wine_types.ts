import { ITopEntity, IWineType, IWineTypeForm } from "generated/rest";
import { getOrCreate, nonNulls } from "./common";
import { get, post, put } from "./requests";

const BASE_URL = "/rest/wine-types";

interface IGetWineTypesParams {
    id?: number;
    name?: string;
}

export async function getWineTypes({ id, name }: IGetWineTypesParams): Promise<IWineType[]> {
    const nonNullParams = nonNulls({ id, name });
    const wineTypes: IWineType[] = await get(BASE_URL, nonNullParams);
    return wineTypes;
}

export async function getWineType(id: number): Promise<IWineType> {
    return get(`${BASE_URL}/${id}`);
}

export const getOrCreateWineType = getOrCreate("wine type", getWineTypes, createWineType);

export async function createWineType(wineType: IWineTypeForm): Promise<IWineType> {
    return post(BASE_URL, wineType);
}

export async function updateWineType(wineType: IWineType): Promise<IWineType> {
    return put(`${BASE_URL}/${wineType.id}`, wineType);
}

export async function getTopWineTypes(limit?: number): Promise<ITopEntity[]> {
    const nonNullParams = nonNulls({limit});
    return get(`${BASE_URL}/top`, nonNullParams);
}
