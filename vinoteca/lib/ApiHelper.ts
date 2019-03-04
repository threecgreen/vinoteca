import * as Cookies from "js-cookie";

const headers = {
    "Content-Type": "application/json",
    "X-CSRFToken": Cookies.get("csrftoken") || "",
};

export async function get(url: string): Promise<any> {
    return fetch(url).then((response) => response.json());
}

export async function post(url: string, body: object): Promise<any> {
    return fetch(url, {
        body: JSON.stringify(body),
        headers,
        method: "POST",
    }).then((response) => response.json());
}

export async function put(url: string, body: object): Promise<any> {
    return fetch(url, {
        body: JSON.stringify(body),
        headers,
        method: "PUT",
    });
}
