import * as Cookies from "js-cookie";
import { IDict, isEmpty } from "./utils";

const headers = {
    "Content-Type": "application/json",
    "X-CSRFToken": Cookies.get("csrftoken") || "",
};

export type IQueryParams = IDict<string | number | boolean>;

function encodeParams(params: IQueryParams): string {
    if (isEmpty(params)) {
        return "";
    }
    return "?" + Object.entries(params).map(([k, v]) => `${k}=${v}`).join("&");
}

/**
 * Makes an HTTP GET request to the url with the optional parameters, then parses
 * the JSON response.
 * @param url A URL to request
 * @param params An optional dictionary of parameters to their values
 */
export async function get(url: string, params: IQueryParams = {}): Promise<any> {
    return fetch(url + encodeParams(params)).then((response) => response.json());
}

/**
 * Makes an HTTP POST request to the url with the optional parameters containing
 * the body, then parses the JSON response.
 * @param url A URL to request
 * @param body JSON object to encode and send to the server
 * @param params An optional dictionary of parameters to their values
 */
export async function post(url: string, body: object, params: IQueryParams = {}): Promise<any> {
    return fetch(url + encodeParams(params), {
        body: JSON.stringify(body),
        headers,
        method: "POST",
    }).then((response) => response.json());
}

/**
 * Makes an HTTP PUT request to the url with the optional parameters containing
 * the body, then parses the JSON response.
 * @param url A URL to request
 * @param body JSON object to encode and send to the server
 * @param params An optional dictionary of parameters and their values
 */
export async function put(url: string, body: object, params: IQueryParams = {}): Promise<any> {
    return fetch(url + encodeParams(params), {
        body: JSON.stringify(body),
        headers,
        method: "PUT",
    }).then((response) => response.json());
}
