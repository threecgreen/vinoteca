import { readCookie } from "./Cookies";
import { IDict, isEmpty } from "./utils";

const headers = {
    "Content-Type": "application/json",
    "X-CSRFToken": readCookie("csrftoken") || "",
};

export type IQueryParams = IDict<string | number | boolean>;

function encodeParams(params: IQueryParams): string {
    if (isEmpty(params)) {
        return "";
    }
    return "?" + Object.entries(params).map(([k, v]) => `${k}=${v}`).join("&");
}

async function checkResponse(response: Response): Promise<any> {
    try {
        if (response.status > 310) {
            return Promise.reject(response.json());
        }
        if (response.status === 204) {
            return [];
        }
        return response.json();
    } catch (err) {
        return Promise.reject(response);
    }
}

/**
 * Makes an HTTP GET request to the url with the optional parameters, then parses
 * the JSON response.
 * @param url A URL to request
 * @param params An optional dictionary of parameters to their values
 * @returns parsed JSON response
 */
export async function get(url: string, params: IQueryParams = {}): Promise<any> {
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
export async function post(url: string, body: object, params: IQueryParams = {}): Promise<any> {
    const response = await fetch(url + encodeParams(params), {
        body: JSON.stringify(body),
        headers,
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
export async function put(url: string, body: object, params: IQueryParams = {}): Promise<any> {
    const response = await fetch(url + encodeParams(params), {
        body: JSON.stringify(body),
        headers,
        method: "PUT",
    });
    return checkResponse(response);
}
