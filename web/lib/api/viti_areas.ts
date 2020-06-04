import { getOrCreate, nonNulls, singleEntityGetter } from "./common";
import { get, post, put } from "./requests";
import { ITopEntity, IVitiArea, IVitiAreaForm, IVitiAreaStats } from "./Rest";

interface IGetVitiAreasParams {
    id?: number;
    name?: string;
    regionName?: string;
}

export async function getVitiAreas(
    { id, name, regionName }: IGetVitiAreasParams,
): Promise<IVitiArea[]> {
    const nonNullParams = nonNulls({ id, name, region_name: regionName });
    const vitiAreas: IVitiArea[] = await get("/rest/viti-areas", nonNullParams);
    return vitiAreas;
}

export const getVitiArea = singleEntityGetter("viticultural area", getVitiAreas);
export const getOrCreateVitiArea = getOrCreate("viticultural area", getVitiAreas, createVitiArea);

export async function createVitiArea(vitiArea: IVitiAreaForm): Promise<IVitiArea> {
    return post("/rest/viti-areas", vitiArea);
}

export async function updateVitiArea(vitiArea: IVitiArea): Promise<IVitiArea> {
    return put(`/rest/viti-areas/${vitiArea.id}`, vitiArea);
}

interface IGetVitiAreaStatsParams {
    id?: number;
    regionId?: number;
}

export async function getVitiAreaStats(
    { id, regionId }: IGetVitiAreaStatsParams,
): Promise<IVitiAreaStats[]> {
    const nonNullParams = nonNulls({ id, region_id: regionId });
    return get("/rest/viti-areas/stats", nonNullParams);
}

export async function getTopVitiAreas(limit?: number): Promise<ITopEntity[]> {
    const nonNullParams = nonNulls({limit});
    return get("/rest/viti-areas/top", nonNullParams);
}
