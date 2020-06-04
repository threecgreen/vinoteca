import { nonNulls, singleEntityGetter } from "./common";
import { get } from "./requests";
import { IRegion, ITopEntity } from "./Rest";

interface IGetRegionParams {
    id?: number;
    name?: string;
    producerName?: string;
}

export async function getRegions({ id, name, producerName }: IGetRegionParams): Promise<IRegion[]> {
    const nonNullParams = nonNulls({ id, name, producer_name: producerName });
    const regions: IRegion[] = await get("/rest/regions", nonNullParams);
    return regions;
}

export const getRegion = singleEntityGetter("region", getRegions);

export async function getTopRegions(limit?: number): Promise<ITopEntity[]> {
    const nonNullParams = nonNulls({limit});
    return get("/rest/regions/top", nonNullParams);
}
