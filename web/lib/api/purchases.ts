import { IMostCommonPurchaseDate, IPurchase, IPurchaseCount, IPurchaseForm, IRecentPurchase,
         ITotalLiters, IYearsPurchases } from "generated/rest";
import { nonNulls } from "./common";
import { delete_, get, post, put } from "./requests";
import { Json } from "./serde";

const BASE_URL = "/rest/purchases";

interface IGetPurchasesParams {
    wineId?: number;
}

const stringifyPurchaseForm = (v: IPurchaseForm) => Json.stringify(v, {dateKeys: ["date"]});
const parsePurchase = (t: string): IPurchase => Json.parse(t, {dateKeys: ["date"]});

export async function getPurchases({wineId}: IGetPurchasesParams): Promise<IPurchase[]> {
    const nonNullParams = nonNulls({ wine_id: wineId });
    const purchases = await get<IPurchase[]>(BASE_URL, nonNullParams, parsePurchase);
    return purchases;
}

export async function createPurchase(purchase: IPurchaseForm): Promise<IPurchase> {
    return post(BASE_URL, purchase, {},
                stringifyPurchaseForm,
                parsePurchase);
}

export async function updatePurchase(id: number, purchase: IPurchaseForm): Promise<IPurchase> {
    return put(`${BASE_URL}/${id}`, purchase, {},
               (v) => Json.stringify(v, {dateKeys: ["date"]}),
               (t) => Json.parse(t, {dateKeys: ["date"]}));
}

export async function deletePurchase(id: number): Promise<void> {
    return delete_(`${BASE_URL}/${id}`);
}

export async function getMostCommonPurchaseDate(): Promise<IMostCommonPurchaseDate> {
    return get(`${BASE_URL}/most-common-purchase-date`);
}

export async function getTotalLiters(): Promise<ITotalLiters> {
    return get(`${BASE_URL}/total-liters`);
}

export async function getPurchaseCount(): Promise<IPurchaseCount> {
    return get(`${BASE_URL}/count`);
}

export async function getPurchasesByYear(): Promise<IYearsPurchases[]> {
    return get(`${BASE_URL}/by-year`);
}

export async function getRecentPurchases(): Promise<IRecentPurchase[]> {
    return get(`${BASE_URL}/recent`, {}, (t) => Json.parse(t, {dateKeys: ["date"]}));
}
