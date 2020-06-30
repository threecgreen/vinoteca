import { IRegion, ITopEntity } from "generated/rest";
import { nonNulls, singleEntityGetter } from "./common";
import { get } from "./requests";

const BASE_URL = "/rest/regions";

interface IGetRegionParams {
    id?: number;
    name?: string;
    producerName?: string;
}

export async function getRegions({ id, name, producerName }: IGetRegionParams): Promise<IRegion[]> {
    const nonNullParams = nonNulls({ id, name, producer_name: producerName });
    const regions: IRegion[] = await get(BASE_URL, nonNullParams);
    return regions;
}

export const getRegion = singleEntityGetter("region", getRegions);

export async function getTopRegions(limit?: number): Promise<ITopEntity[]> {
    const nonNullParams = nonNulls({limit});
    return get(`${BASE_URL}/top`, nonNullParams);
}
