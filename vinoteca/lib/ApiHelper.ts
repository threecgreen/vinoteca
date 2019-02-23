const headers = {
    "Content-Type": "application/json",
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
