import { IInventoryWine, IWine, IWineCount, IWineForm, WinePatchForm } from "generated/rest";
import { RestResult } from "lib/result";
import { nonNulls } from "./common";
import { delete_, get, getResult, patch, postForm, putForm } from "./requests";
import { Json } from "./serde";

const BASE_URL = "/rest/wines";

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
    return get(BASE_URL, nonNullParams);
}

export async function getWine(id: number): Promise<RestResult<IWine>> {
    return getResult(`${BASE_URL}/${id}`);
}

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
    return postForm(BASE_URL, form);
}

export async function updateWine(id: number, wine: IWineForm, file: File | null): Promise<IWine> {
    const form = createWineHttpForm(wine, file);
    return putForm(`${BASE_URL}/${id}`, form);
}

export async function partUpdateWine(id: number, winePatch: WinePatchForm): Promise<IWine> {
    return patch(`${BASE_URL}/${id}`, winePatch);
}

export async function deleteWine(id: number): Promise<void> {
    return delete_(`${BASE_URL}/${id}`);
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
    return get(`${BASE_URL}/search`, nonNullParams);
}

export async function getWineVarieties(): Promise<IWineCount> {
    return get(`${BASE_URL}/count`);
}

export async function getInventory(): Promise<IInventoryWine[]> {
    return get(`${BASE_URL}/inventory`, {},
               (t) => Json.parse(t, {dateKeys: ["lastPurchaseDate"]}));
}

export async function uploadWineImage(id: number, image: File): Promise<string> {
    const form = new FormData();
    form.append("image", image);
    return postForm(`${BASE_URL}/${id}/image`, form);
}

export async function deleteWineImage(id: number): Promise<void> {
    return delete_(`${BASE_URL}/${id}/image`);
}
