import { ITopEntity, IVitiArea, IVitiAreaForm, IVitiAreaStats } from "generated/rest";
import { getOrCreate, nonNulls } from "./common";
import { get, post, put } from "./requests";

const BASE_URL = "/rest/viti-areas";

interface IGetVitiAreasParams {
    id?: number;
    name?: string;
    regionName?: string;
}

export async function getVitiAreas(
    { id, name, regionName }: IGetVitiAreasParams,
): Promise<IVitiArea[]> {
    const nonNullParams = nonNulls({ id, name, region_name: regionName });
    const vitiAreas: IVitiArea[] = await get(BASE_URL, nonNullParams);
    return vitiAreas;
}

export async function getVitiArea(id: number): Promise<IVitiArea> {
    return get(`${BASE_URL}/${id}`);
}

export const getOrCreateVitiArea = getOrCreate("viticultural area", getVitiAreas, createVitiArea);

export async function createVitiArea(vitiArea: IVitiAreaForm): Promise<IVitiArea> {
    return post(BASE_URL, vitiArea);
}

export async function updateVitiArea(vitiArea: IVitiArea): Promise<IVitiArea> {
    return put(`${BASE_URL}/${vitiArea.id}`, vitiArea);
}

interface IGetVitiAreaStatsParams {
    id?: number;
    regionId?: number;
}

export async function getVitiAreaStats(
    { id, regionId }: IGetVitiAreaStatsParams,
): Promise<IVitiAreaStats[]> {
    const nonNullParams = nonNulls({ id, region_id: regionId });
    return get(`${BASE_URL}/stats`, nonNullParams);
}

export async function getTopVitiAreas(limit?: number): Promise<ITopEntity[]> {
    const nonNullParams = nonNulls({limit});
    return get(`${BASE_URL}/top`, nonNullParams);
}
