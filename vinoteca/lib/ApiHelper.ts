export async function get(url: string): Promise<any> {
    return fetch(url).then((response) => response.json());
}

export async function put(url: string, body: object): Promise<any> {
    return fetch(url, {
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
        },
        method: "PUT",
    });
}
