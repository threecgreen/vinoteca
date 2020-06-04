import Logger from "../Logger";
import { IDict } from "../utils";
import { IQueryParams } from "./requests";

interface IRestModel {
    id: number;
    name: string;
}

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

export function nonNulls(obj: IDict<string | number | boolean | undefined>): IQueryParams {
    const q: IQueryParams = {};
    Object.keys(obj).filter((k) => Boolean(obj[k])).forEach((k) => {
        q[k] = obj[k] as string | number | boolean;
    });
    return q;
}

export function singleEntityGetter<Params, Resp>(
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

export function getOrCreate<ReqParams, Resp, Form>(
    objName: string,
    listGetter: (params: ReqParams) => Promise<Resp[]>,
    creator: (form: Form) => Promise<Resp>,
): (params: ReqParams, form: Form) => Promise<Resp> {
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
        throw Error(message);
    };
}
