/* eslint-disable @typescript-eslint/no-explicit-any */
import { VinotecaError } from "generated/rest";
import { RestResult, Result } from "../result";
import { isEmpty } from "../utils";

const APP_JSON = "application/json";

const HEADERS = {
    "Accept": APP_JSON,
    "Content-Type": APP_JSON,
};

export type IQueryParams = Record<string, string | number | boolean>;
type Serializer<T> = (value: T) => string;
type Parser<T> = (text: string) => T;

function encodeParams(params: IQueryParams): string {
    if (isEmpty(params)) {
        return "";
    }
    return "?" + Object.entries(params)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
        .join("&");
}

function encodeJson<T>(obj: T, fun?: (val: T) => string): string {
    return (fun ?? JSON.stringify)(obj);
}

async function decodeJsonIfAny(response: Response, parser?: (text: string)  => any) {
    if (response.headers.get("content-type") === APP_JSON) {
        if (parser) {
            return parser(await response.text());
        }
        return response.json();
    }
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
            case "Unauthorized":
                return true;
            default:
                return false;
        }
    }
    return false;
}

async function checkResponse(
    response: Response, parser?: (text: string) => any,
): Promise<RestResult<any>> {
    if (response.status > 310) {
        const message = await decodeJsonIfAny(response);
        if (isVinotecaError(message)) {
            return Result.Err(message);
        }
        throw Error(message);
    }
    const json = await decodeJsonIfAny(response, parser);
    if (json !== undefined) {
        return Result.Ok(json);
    }
    throw Error("Empty response");
}

/**
 * Makes an HTTP GET request to the url with the optional parameters, then parses
 * the JSON response.
 * @param url A URL to request
 * @param params An optional dictionary of parameters to their values
 * @param parser An optional custom JSON parser such as for deserializing dates
 * @returns parsed JSON response
 */
export async function get<R>(
    url: string, params: IQueryParams = {}, parser?: Parser<any>,
): Promise<R> {
    const response = await fetch(url + encodeParams(params), {headers: {Accept: APP_JSON}});
    return (await checkResponse(response, parser)).unwrap();
}

/**
 * Makes an HTTP GET request to the url with the optional parameters, then parses
 * the JSON result.
 * @param url A URL to request
 * @param params An optional dictionary of parameters to their values
 * @param parser An optional custom JSON parser such as for deserializing dates
 * @returns RestResult
 */
export async function getResult<T>(
    url: string, params: IQueryParams = {}, parser?: Parser<any>,
): Promise<RestResult<T>> {
    const response = await fetch(url + encodeParams(params), {headers: {Accept: APP_JSON}});
    return checkResponse(response, parser);
}

/**
 * Makes an HTTP POST request to the url with the optional parameters containing
 * the body, then parses the JSON response.
 * @param url A URL to request
 * @param body JSON object to encode and send to the server
 * @param params An optional dictionary of parameters to their values
 * @param serializer An option @c JSON.stringify() replacement for serializing
 * the request body
 * @param parser An optional custom JSON parser such as for deserializing dates
 * @returns parsed JSON response
 */
export async function post<B, R>(
    url: string, body: B, params: IQueryParams = {},
    serializer?: Serializer<B>,
    parser?: Parser<R>,
): Promise<R> {
    return (await postResult(url, body, params, serializer, parser)).unwrap();
}

/**
 * Makes an HTTP POST request to the url with the optional parameters containing
 * the body, then parses the JSON result.
 * @param url A URL to request
 * @param body JSON object to encode and send to the server
 * @param params An optional dictionary of parameters to their values
 * @param serializer An option @c JSON.stringify() replacement for serializing
 * the request body
 * @param parser An optional custom JSON parser such as for deserializing dates
 * @returns RestResult
 */
export async function postResult<B, R>(
    url: string, body: B, params: IQueryParams = {},
    serializer?: Serializer<B>, parser?: Parser<R>,
): Promise<RestResult<R>> {

    const response = await fetch(url + encodeParams(params), {
        body: encodeJson(body, serializer),
        headers: HEADERS,
        method: "POST",
    });
    return checkResponse(response, parser);
}

export async function postForm<T>(url: string, form: FormData,
                                  params: IQueryParams = {}): Promise<T> {

    const response = await fetch(url + encodeParams(params), {
        body: form,
        method: "POST",
    });
    return (await checkResponse(response)).unwrap();
}

/**
 * Makes an HTTP PUT request to the url with the optional parameters containing
 * the body, then parses the JSON response.
 * @param url A URL to request
 * @param body JSON object to encode and send to the server
 * @param params An optional dictionary of parameters and their values
 * @param serializer An option @c JSON.stringify() replacement for serializing
 * the request body
 * @param parser An optional custom JSON parser such as for deserializing dates
 * @returns parsed JSON response
 */
export async function put<B, R>(
    url: string, body: B, params: IQueryParams = {},
    serializer?: (val: B) => string,
    parser?: (text: string) => R,
): Promise<R> {
    return (await putResult(url, body, params, serializer, parser)).unwrap();
}

export async function putResult<B, R>(
    url: string, body: B, params: IQueryParams = {},
    serializer?: Serializer<B>, parser?: Parser<R>,
): Promise<RestResult<R>> {
    const response = await fetch(url + encodeParams(params), {
        body: encodeJson(body, serializer),
        headers: HEADERS,
        method: "PUT",
    });
    return checkResponse(response, parser);
}

export async function putForm<Response>(url: string, form: FormData,
                                        params: IQueryParams = {}): Promise<Response> {
    const response = await fetch(url + encodeParams(params), {
        body: form,
        method: "PUT",
    });
    return (await checkResponse(response)).unwrap();
}

export async function patch<Response>(url: string, body: Record<string, unknown>,
                                      params: IQueryParams= {}): Promise<Response> {
    const response = await fetch(url + encodeParams(params), {
        body: encodeJson(body),
        headers: HEADERS,
        method: "PATCH",
    });
    return (await checkResponse(response)).unwrap();
}

export async function patchResult<Response>(
    url: string, body: Record<string, unknown>, params: IQueryParams= {}
): Promise<RestResult<Response>> {
    const response = await fetch(url + encodeParams(params), {
        body: encodeJson(body),
        headers: HEADERS,
        method: "PATCH",
    });
    return await checkResponse(response);
}

export async function delete_<Response>(url: string, params: IQueryParams = {}): Promise<Response> {
    const response = await fetch(url + encodeParams(params), {
        headers: HEADERS,
        method: "DELETE",
    });
    return (await checkResponse(response)).unwrap();
}
