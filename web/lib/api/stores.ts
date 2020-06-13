import { getOrCreate, nonNulls } from "./common";
import { get, post } from "./requests";
import { IStore, IStoreForm } from "./Rest";

const BASE_URL = "/rest/stores";

interface IGetStoreParams {
    id?: number;
    name?: string;
}

export async function getStores({id, name}: IGetStoreParams): Promise<IStore[]> {
    const nonNullParams = nonNulls({id, name});
    const stores: IStore[] = await get(BASE_URL, nonNullParams);
    return stores;
}

export const getOrCreateStore = getOrCreate("store", getStores, createStore);

export async function createStore(store: IStoreForm): Promise<IStore> {
    return post(BASE_URL, store);
}
