import { getOrCreate, nonNulls, singleEntityGetter } from "./common";
import { delete_, get, post, put } from "./requests";
import { IProducer, IProducerForm, ITopEntity } from "./Rest";

interface IGetProducersParams {
    id?: number;
    name?: string;
    regionId?: number;
}

// tslint:disable-next-line max-line-length
export async function getProducers({id, name, regionId}: IGetProducersParams): Promise<IProducer[]> {
    const nonNullParams = nonNulls({id, name, region_id: regionId});
    const producers: IProducer[] = await get("/rest/producers", nonNullParams);
    return producers;
}

export const getProducer = singleEntityGetter("producer", getProducers);
export const getOrCreateProducer = getOrCreate("producer", getProducers, createProducer);

export async function createProducer(producer: IProducerForm): Promise<IProducer> {
    return post("/rest/producers", producer);
}

export async function updateProducer(producer: IProducer): Promise<IProducer> {
    return put(`/rest/producers/${producer.id}`, producer);
}

export async function deleteProducer(id: number): Promise<void> {
    return delete_(`/rest/producers/${id}`);
}

export async function getTopProducers(limit?: number): Promise<ITopEntity[]> {
    const nonNullParams = nonNulls({limit});
    return get("/rest/producers/top", nonNullParams);
}
