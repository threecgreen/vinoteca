import { IProducer, IProducerForm, ITopEntity } from "generated/rest";
import { getOrCreate, nonNulls } from "./common";
import { delete_, get, post, put } from "./requests";

const BASE_URL = "/rest/producers";

interface IGetProducersParams {
    id?: number;
    name?: string;
    regionId?: number;
}

// tslint:disable-next-line max-line-length
export async function getProducers({id, name, regionId}: IGetProducersParams): Promise<IProducer[]> {
    const nonNullParams = nonNulls({id, name, region_id: regionId});
    const producers: IProducer[] = await get(BASE_URL, nonNullParams);
    return producers;
}

export async function getProducer(id: number): Promise<IProducer> {
    return get(`${BASE_URL}/${id}`);
}

export const getOrCreateProducer = getOrCreate("producer", getProducers, createProducer);

export async function createProducer(producer: IProducerForm): Promise<IProducer> {
    return post(BASE_URL, producer);
}

export async function updateProducer(producer: IProducer): Promise<IProducer> {
    return put(`${BASE_URL}/${producer.id}`, producer);
}

export async function deleteProducer(id: number): Promise<void> {
    return delete_(`${BASE_URL}/${id}`);
}

export async function getTopProducers(limit?: number): Promise<ITopEntity[]> {
    const nonNullParams = nonNulls({limit});
    return get(`${BASE_URL}/top`, nonNullParams);
}
