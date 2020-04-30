import { nonNulls } from "./common";
import { delete_, get, post, put } from "./requests";
import { IMostCommonPurchaseDate, IPurchase, IPurchaseCount, IPurchaseForm, IRecentPurchase,
         ITotalLiters, IYearsPurchases } from "./Rest";

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

export async function getPurchasesByYear(): Promise<IYearsPurchases[]> {
    return get("/rest/purchases/by-year");
}

export async function getRecentPurchases(): Promise<IRecentPurchase[]> {
    return get("/rest/purchases/recent");
}
