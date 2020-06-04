import { getOrCreate, nonNulls, singleEntityGetter } from "./common";
import { get, post, put } from "./requests";
import { ITopEntity, IWineType, IWineTypeForm } from "./Rest";

interface IGetWineTypesParams {
    id?: number;
    name?: string;
}

export async function getWineTypes({ id, name }: IGetWineTypesParams): Promise<IWineType[]> {
    const nonNullParams = nonNulls({ id, name });
    const wineTypes: IWineType[] = await get("/rest/wine-types", nonNullParams);
    return wineTypes;
}

export const getWineType = singleEntityGetter("wine type", getWineTypes);
export const getOrCreateWineType = getOrCreate("wine type", getWineTypes, createWineType);

export async function createWineType(wineType: IWineTypeForm): Promise<IWineType> {
    return post("/rest/wine-types", wineType);
}

export async function updateWineType(wineType: IWineType): Promise<IWineType> {
    return put(`/rest/wine-types/${wineType.id}`, wineType);
}

export async function getTopWineTypes(limit?: number): Promise<ITopEntity[]> {
    const nonNullParams = nonNulls({limit});
    return get("/rest/wine-types/top", nonNullParams);
}
