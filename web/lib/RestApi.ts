import { delete_, get, IQueryParams, patch, post, postForm, put, putForm } from "./ApiHelper";
import Logger from "./Logger";
import { IChangePasswordForm, IColor, IGrape, IGrapeForm, ILogForm, ILoginForm, ILogResponse,
         IMostCommonPurchaseDate, IProducer, IProducerForm, IPurchase, IPurchaseCount,
         IPurchaseForm, IRegion, IStore, IStoreForm, ITopEntity, ITotalLiters, IUser,
         IUserForm, IVitiArea, IVitiAreaForm, IVitiAreaStats, IWine, IWineCount, IWineForm,
         IWineGrape, IWineGrapesForm, IWinePatchForm, IWineType, IWineTypeForm } from "./Rest";
import { IRestModel } from "./RestTypes";
import { IDict } from "./utils";

export function toDict(models: IRestModel[]): IDict<string | null> {
    const result: IDict<string | null> = {};
    models.forEach((model) => {
        result[model.name] = null;
    });
    return result;
}

export class EmptyResultError extends Error {
    public static isInstance(err: Error): boolean {
        return err.name === this.NAME;
    }

    private static NAME = "EmptyResultError";

    constructor(message: string) {
        super(message);
        this.name = EmptyResultError.NAME;
    }
}

function nonNulls(obj: IDict<string | number | boolean | undefined>): IQueryParams {
    const q: IQueryParams = {};
    Object.keys(obj).filter((k) => Boolean(obj[k])).forEach((k) => {
        q[k] = obj[k] as string | number | boolean;
    });
    return q;
}

function singleEntityGetter<Params, Resp>(
    objName: string,
    listGetter: (params: Params) => Promise<Resp[]>,
): (params: Params) => Promise<Resp> {
    // Shave off 'get'
    return async (params: Params) => {
        const results = await listGetter(params);
        if (results.length > 1) {
            const message = `Received more than one ${objName} result when one was expected`;
            const logger = new Logger("RestApi");
            logger.logError(message);
            throw Error(message);
        }
        return results[0];
    };
}

function getOrCreate<ReqParams, Resp, Form>(
    listGetter: (params: ReqParams) => Promise<Resp[]>,
    creator: (form: Form) => Promise<Resp>,
): (params: ReqParams, form: Form) => Promise<Resp> {
    const objName = listGetter.name.substr(3);
    return async (params, form) => {
        const results = await listGetter(params);
        if (results.length === 0) {
            const newObj = await creator(form);
            return newObj;
        }
        if (results.length === 1) {
            return results[0];
        }
        const message = `Received more than one ${objName} result when one was expected`;
        new Logger("RestApi").logError(message);
        throw Error(message);
    };
}

/* COLORS */
interface IGetColorParams {
    id?: number;
    name?: string;
}

export async function getColors({ id, name }: IGetColorParams): Promise<IColor[]> {
    const nonNullParams = nonNulls({ id, name });
    const colors: IColor[] = await get("/rest/colors", nonNullParams);
    if (colors.length === 0) {
        throw new EmptyResultError("Empty result returned for color");
    }
    return colors;
}

export const getColor = singleEntityGetter("color", getColors);

export async function getTopColors(): Promise<ITopEntity[]> {
    return get("/rest/colors/top");
}

/* GRAPES */
interface IGetGrapesParams {
    id?: number;
    name?: string;
}

export async function getGrapes({ id, name }: IGetGrapesParams): Promise<IGrape[]> {
    const nonNullParams = nonNulls({ id, name });
    return get("/rest/grapes", nonNullParams);
}

export const getGrape = singleEntityGetter("grape", getGrapes);
export const getOrCreateGrape = getOrCreate(getGrapes, createGrape);

export async function createGrape(grape: IGrapeForm): Promise<IGrape> {
    return post("/rest/grapes", grape);
}

export async function updateGrape(id: number, grape: IGrapeForm): Promise<IGrape> {
    return put(`/rest/grapes/${id}`, grape);
}

export async function getTopGrapes(limit?: number): Promise<ITopEntity[]> {
    const nonNullParams = nonNulls({limit});
    return get("/rest/grapes/top", nonNullParams);
}

/* PRODUCERS */
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
export const getOrCreateProducer = getOrCreate(getProducers, createProducer);

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

/* PURCHASES */
interface IGetPurchasesParams {
    wineId?: number;
}

export async function getPurchases({wineId}: IGetPurchasesParams): Promise<IPurchase[]> {
    const nonNullParams = nonNulls({ wine_id: wineId });
    const purchases = await get<IPurchase[]>("/rest/purchases", nonNullParams);
    return purchases;
}

export async function createPurchase(purchase: IPurchaseForm): Promise<IPurchase> {
    return post("/rest/purchases", purchase);
}

export async function updatePurchase(id: number, purchase: IPurchaseForm): Promise<IPurchase> {
    return put(`/rest/purchases/${id}`, purchase);
}

export async function deletePurchase(id: number): Promise<void> {
    return delete_(`/rest/purchases/${id}`);
}

export async function getMostCommonPurchaseDate(): Promise<IMostCommonPurchaseDate> {
    return get("/rest/purchases/most-common-purchase-date");
}

export async function getTotalLiters(): Promise<ITotalLiters> {
    return get("/rest/purchases/total-liters");
}

export async function getPurchaseCount(): Promise<IPurchaseCount> {
    return get("/rest/purchases/count");
}

/* REGIONS */
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

/* STORES */
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
export const getOrCreateStore = getOrCreate(getStores, createStore);

export async function createStore(store: IStoreForm): Promise<IStore> {
    return post("/rest/stores", store);
}

/* USERS */
export async function getUser(): Promise<IUser> {
    return get("/rest/users");
}

export async function login(form: ILoginForm): Promise<IUser> {
    return post("/rest/users/login", form);
}

export async function createUser(form: IUserForm): Promise<IUser> {
    return post("/rest/users", form);
}

export async function changePassword(form: IChangePasswordForm): Promise<void> {
    return post("/rest/users/password", form);
}

export async function logout(): Promise<void> {
    return post("/rest/users/logout", {});
}

/* VITI AREAS */
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
export const getOrCreateVitiArea = getOrCreate(getVitiAreas, createVitiArea);

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

/* WINES */
interface IGetWinesParams {
    id?: number;
    producerId?: number;
    regionId?: number;
    vitiAreaId?: number;
    wineTypeId?: number;
}

export async function getWines(
    { id, producerId, regionId, vitiAreaId, wineTypeId }: IGetWinesParams,
): Promise<IWine[]> {
    const nonNullParams = nonNulls({
        id, region_id: regionId, producer_id: producerId,
        viti_area_id: vitiAreaId, wine_type_id: wineTypeId,
    });
    const wines: IWine[] = await get("/rest/wines", nonNullParams);
    return wines;
}

export const getWine = singleEntityGetter("wine", getWines);

const createWineHttpForm = (wine: IWineForm, file: File | null) => {
    const form = new FormData();
    form.append("wine_form", new Blob([JSON.stringify(wine)], {type: "application/json"}));
    if (file) {
        form.append("image", file);
    }
    return form;
};

export async function createWine(wine: IWineForm, file: File | null): Promise<IWine> {
    const form = createWineHttpForm(wine, file);
    return postForm("/rest/wines", form);
}

export async function updateWine(id: number, wine: IWineForm, file: File | null): Promise<IWine> {
    const form = createWineHttpForm(wine, file);
    return putForm(`/rest/wines/${id}`, form);
}

export async function partUpdateWine(id: number, wine: IWinePatchForm): Promise<IWine> {
    return patch(`/rest/wines/${id}`, wine);
}

export async function deleteWine(id: number): Promise<void> {
    return delete_(`/rest/wines/${id}`);
}

interface ISearchWinesParams {
    colorLike?: string;
    wineTypeLike?: string;
    producerLike?: string;
    regionLike?: string;
    vitiAreaLike?: string;
}

export async function searchWines(
    { colorLike, wineTypeLike, producerLike, regionLike, vitiAreaLike }: ISearchWinesParams,
): Promise<IWine[]> {
    const nonNullParams = nonNulls({
        color_like: colorLike, wine_type_like: wineTypeLike, producer_like: producerLike,
        region_like: regionLike, viti_area_like: vitiAreaLike,
    });
    return get("/rest/wines/search", nonNullParams);
}

export async function getWineVarieties(): Promise<IWineCount> {
    return get("/rest/wines/count");
}

/* WINE GRAPES */
interface IGetWineGrapesParams {
    wineId?: number;
    grapeId?: number;
}

// tslint:disable-next-line max-line-length
export async function getWineGrapes({ wineId, grapeId }: IGetWineGrapesParams): Promise<IWineGrape[]> {
    const nonNullParams = nonNulls({ wine_id: wineId, grape_id: grapeId });
    const wineGrapes: IWineGrape[] = await get("/rest/wine-grapes", nonNullParams);
    return wineGrapes;
}

export async function createWineGrapes(wineGrapes: IWineGrapesForm): Promise<IWineGrape[]> {
    return post("/rest/wine-grapes", wineGrapes);
}

/* WINE TYPES */
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
export const getOrCreateWineType = getOrCreate(getWineTypes, createWineType);

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

/* LOGS */
export async function postLog(logForm: ILogForm): Promise<ILogResponse> {
    return post("/rest/logs", logForm);
}
