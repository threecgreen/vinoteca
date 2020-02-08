import { readCookie } from "./Cookies";
import { IDict, isEmpty } from "./utils";

const HEADERS = {
    "Content-Type": "application/json",
    "X-CSRFToken": readCookie("csrftoken") || "",
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
    if (parseFloat(response.headers.get("content-length") ?? "0") > 0
        && response.headers.get("content-type") === "application/json") {
        return response.json();
    }
}

type VinotecaError =
    | {"NotFound": string}
    | {"Internal": string}
    | {"MissingConstraint": string}
    | {"BadRequest": string};

function isVinotecaError(obj: object): obj is VinotecaError {
    const keys = Object.keys(obj);
    return keys.length === 1
        && ["NotFound", "Internal", "MissingConstraint", "BadRequest"].find((i) => i === keys[0]) !== undefined;
}

async function checkResponse(response: Response): Promise<any> {
    if (response.status > 310) {
        const message = await decodeJsonIfAny(response);
        if (isVinotecaError(message)) {
            throw Error(`${Object.keys(message)[0]}: ${Object.values(message)[0]}`);
        }
        throw Error(message);
    }
    if (response.status === 204) {
        return [];
    }
    try {
        return decodeJsonIfAny(response);
    } catch (err) {
        throw Error(await response.text())
    }
}

/**
 * Makes an HTTP GET request to the url with the optional parameters, then parses
 * the JSON response.
 * @param url A URL to request
 * @param params An optional dictionary of parameters to their values
 * @returns parsed JSON response
 */
export async function get<Response>(url: string, params: IQueryParams = {}): Promise<Response> {
    const response = await fetch(url + encodeParams(params));
    return checkResponse(response);
}

/**
 * Makes an HTTP POST request to the url with the optional parameters containing
 * the body, then parses the JSON response.
 * @param url A URL to request
 * @param body JSON object to encode and send to the server
 * @param params An optional dictionary of parameters to their values
 * @returns parsed JSON response
 */
export async function post<Response>(url: string, body: object, params: IQueryParams = {}): Promise<Response> {
    const response = await fetch(url + encodeParams(params), {
        body: encodeJson(body),
        headers: HEADERS,
        method: "POST",
    });
    return checkResponse(response);
}

export async function postForm<Response>(url: string, form: FormData, params: IQueryParams = {}): Promise<Response> {
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
export async function put<Response>(url: string, body: object, params: IQueryParams = {}): Promise<Response> {
    const response = await fetch(url + encodeParams(params), {
        body: encodeJson(body),
        headers: HEADERS,
        method: "PUT",
    });
    return checkResponse(response);
}

export async function putForm<Response>(url: string, form: FormData, params: IQueryParams = {}): Promise<Response> {
    const response = await fetch(url + encodeParams(params), {
        body: form,
        method: "PUT",
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
