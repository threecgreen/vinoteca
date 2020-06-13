import { nonNulls } from "./common";
import { get, post } from "./requests";
import { IWineGrape, IWineGrapesForm } from "./Rest";

const BASE_URL = "/rest/wine-grapes";

interface IGetWineGrapesParams {
    wineId?: number;
    grapeId?: number;
}

// tslint:disable-next-line max-line-length
export async function getWineGrapes({ wineId, grapeId }: IGetWineGrapesParams): Promise<IWineGrape[]> {
    const nonNullParams = nonNulls({ wine_id: wineId, grape_id: grapeId });
    const wineGrapes: IWineGrape[] = await get(BASE_URL, nonNullParams);
    return wineGrapes;
}

export async function createWineGrapes(wineGrapes: IWineGrapesForm): Promise<IWineGrape[]> {
    return post(BASE_URL, wineGrapes);
}
