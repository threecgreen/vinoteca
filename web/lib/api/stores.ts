import { getOrCreate, nonNulls, singleEntityGetter } from "./common";
import { get, post } from "./requests";
import { IStore, IStoreForm } from "./Rest";

interface IGetStoreParams {
    id?: number;
    name?: string;
}

export async function getStores({id, name}: IGetStoreParams): Promise<IStore[]> {
    const nonNullParams = nonNulls({id, name});
    const stores: IStore[] = await get("/rest/stores", nonNullParams);
    return stores;
}

export const getStore = singleEntityGetter("store", getStores);
export const getOrCreateStore = getOrCreate("store", getStores, createStore);

export async function createStore(store: IStoreForm): Promise<IStore> {
    return post("/rest/stores", store);
}
