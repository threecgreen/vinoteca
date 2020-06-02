import { RestResult, Result } from "../error";
import { IDict, isEmpty } from "../utils";
import { VinotecaError } from "./Rest";

const APP_JSON = "application/json";

const HEADERS = {
    Accept: APP_JSON,
    "Content-Type": APP_JSON,
};

export type IQueryParams = IDict<string | number | boolean>;

function encodeParams(params: IQueryParams): string {
    if (isEmpty(params)) {
        return "";
    }
    return "?" + Object.entries(params).map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join("&");
}

function encodeJson(obj: object): string {
    return JSON.stringify(obj);
}

async function decodeJsonIfAny(response: Response) {
    if (response.headers.get("content-type") === APP_JSON) {
        return response.json();
    }
    // Sentinel
    return "EMPTY";
}

function isVinotecaError(obj: any): obj is VinotecaError {
    if (obj && obj instanceof Object) {
        if (!obj.hasOwnProperty("type")) {
            return false;
        }
        switch (obj.type) {
            case "NotFound":
            case "Internal":
            case "MissingConstraint":
            case "BadRequest":
            case "Forbidden":
                return true;
            default:
                return false;
        }
    }
    return false;
}

async function checkResponse(response: Response): Promise<any> {
    if (response.status > 310) {
        const message = await decodeJsonIfAny(response);
        if (isVinotecaError(message)) {
            // TODO: create own error type in JS?
            throw Error(`${message.type}: ${message.message}`);
        }
        throw Error(message);
    }
    if (response.status === 204) {
        return [];
    }
    try {
        return decodeJsonIfAny(response);
    } catch (err) {
        throw Error(await response.text());
    }
}

async function checkResult(response: Response): Promise<RestResult<any>> {
    if (response.status > 310) {
        const message = await decodeJsonIfAny(response);
        if (isVinotecaError(message)) {
            return Result.Err(message);
        }
        throw Error(message);
    }
    try {
        const json = await decodeJsonIfAny(response);
        if (json) {
            return Result.Ok(json);
        }
        throw Error();
    } catch (err) {
        throw Error(await response.text());
    }
}

/**
 * Makes an HTTP GET request to the url with the optional parameters, then parses
 * the JSON response.
 * @param url A URL to request
 * @param params An optional dictionary of parameters to their values
 * @returns parsed JSON response
 */
export async function get<T>(url: string, params: IQueryParams = {}): Promise<T> {
    const response = await fetch(url + encodeParams(params), {headers: {Accept: APP_JSON}});
    return checkResponse(response);
}

/**
 * Makes an HTTP GET request to the url with the optional parameters, then parses
 * the JSON result.
 * @param url A URL to request
 * @param params An optional dictionary of parameters to their values
 * @returns RestResult
 */
export async function getResult<T>(url: string, params: IQueryParams = {}): Promise<RestResult<T>> {
    const response = await fetch(url + encodeParams(params), {headers: {Accept: APP_JSON}});
    return checkResult(response);
}

/**
 * Makes an HTTP POST request to the url with the optional parameters containing
 * the body, then parses the JSON response.
 * @param url A URL to request
 * @param body JSON object to encode and send to the server
 * @param params An optional dictionary of parameters to their values
 * @returns parsed JSON response
 */
export async function post<T>(url: string, body: object, params: IQueryParams = {}): Promise<T> {
    const response = await fetch(url + encodeParams(params), {
        body: encodeJson(body),
        headers: HEADERS,
        method: "POST",
    });
    return checkResponse(response);
}

/**
 * Makes an HTTP POST request to the url with the optional parameters containing
 * the body, then parses the JSON result.
 * @param url A URL to request
 * @param body JSON object to encode and send to the server
 * @param params An optional dictionary of parameters to their values
 * @returns RestResult
 */
export async function postResult<T>(url: string, body: object,
                                    params: IQueryParams = {}): Promise<RestResult<T>> {

    const response = await fetch(url + encodeParams(params), {
        body: encodeJson(body),
        headers: HEADERS,
        method: "POST",
    });
    return checkResult(response);
}

export async function postForm<T>(url: string, form: FormData,
                                  params: IQueryParams = {}): Promise<T> {

    const response = await fetch(url + encodeParams(params), {
        body: form,
        method: "POST",
    });
    return checkResponse(response);
}

/**
 * Makes an HTTP PUT request to the url with the optional parameters containing
 * the body, then parses the JSON response.
 * @param url A URL to request
 * @param body JSON object to encode and send to the server
 * @param params An optional dictionary of parameters and their values
 * @returns parsed JSON response
 */
export async function put<Response>(url: string, body: object,
                                    params: IQueryParams = {}): Promise<Response> {
    const response = await fetch(url + encodeParams(params), {
        body: encodeJson(body),
        headers: HEADERS,
        method: "PUT",
    });
    return checkResponse(response);
}

export async function putResult<T>(url: string, body: object,
                                   params: IQueryParams = {}): Promise<RestResult<T>> {

    const response = await fetch(url + encodeParams(params), {
        body: encodeJson(body),
        headers: HEADERS,
        method: "PUT",
    });
    return checkResult(response);
}

export async function putForm<Response>(url: string, form: FormData,
                                        params: IQueryParams = {}): Promise<Response> {
    const response = await fetch(url + encodeParams(params), {
        body: form,
        method: "PUT",
    });
    return checkResponse(response);
}

export async function patch<Response>(url: string, body: object,
                                      params: IQueryParams= {}): Promise<Response> {
    const response = await fetch(url + encodeParams(params), {
        body: encodeJson(body),
        headers: HEADERS,
        method: "PATCH",
    });
    return checkResponse(response);
}

export async function delete_<Response>(url: string, params: IQueryParams = {}): Promise<Response> {
    const response = await fetch(url + encodeParams(params), {
        headers: HEADERS,
        method: "DELETE",
    });
    return checkResponse(response);
}
