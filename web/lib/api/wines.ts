import { nonNulls } from "./common";
import { delete_, get, patch, postForm, putForm } from "./requests";
import { IInventoryWine, IWine, IWineCount, IWineForm, IWinePatchForm } from "./Rest";

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
    return get("/rest/wines", nonNullParams);
}

export async function getWine(id: number): Promise<IWine> {
    return get(`/rest/wines/${id}`);
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

export async function getInventory(): Promise<IInventoryWine[]> {
    return get("/rest/wines/inventory");
}

export async function uploadWineImage(id: number, image: File): Promise<string> {
    const form = new FormData();
    form.append("image", image);
    return postForm(`/rest/wines/${id}/image`, form);
}

export async function deleteWineImage(id: number): Promise<void> {
    return delete_(`/rest/wines/${id}/image`);
}
