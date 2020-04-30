import { EmptyResultError, nonNulls, singleEntityGetter } from "./common";
import { get } from "./requests";
import { IColor, ITopEntity } from "./Rest";

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
