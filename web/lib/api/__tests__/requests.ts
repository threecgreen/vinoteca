import { get, getResult } from "../requests";
import "isomorphic-fetch";
import { VinotecaError } from "generated/rest";

const createJsonResponse = (body: any, status: number): Response => {
    return new Response(
        JSON.stringify(body),
        {status, headers: new Headers({"content-type": "application/json"})},
    );
}

const mockFetch = (response: Response) => {
    global.fetch = jest.fn().mockReturnValueOnce(response);
}

test("get with checkResponse handle error codes", async () => {
    const error: VinotecaError = {type: "Unauthorized", message: "Uh oh"};
    mockFetch(createJsonResponse(error, 401));

    expect.assertions(2);
    await get("/private/data").catch((e) => {
        expect(e.message).toContain("Uh oh");
    })
    expect(global.fetch).toBeCalled();
});

test("get with checkResponse handle no content-length", async () => {
    mockFetch(createJsonResponse({passed: true}, 200));

    const result = await get("/test/json");
    expect(result).toEqual({passed: true});
    expect(global.fetch).toBeCalled();
});

test("get with checkResponse throw when empty body", async () => {
    const response = new Response("", {status: 200});
    mockFetch(response);

    expect.assertions(2);
    await get("/empty/data").catch((e) => {
        expect(e.message).toBe("Empty response");
    });
    expect(global.fetch).toBeCalled();
});

test("getResult returns VinotecaError", async () => {
    const error: VinotecaError = {
        type: "NotFound",
        message: "This resource doesn't exist",
    };
    mockFetch(createJsonResponse(error, 404));

    const result = await getResult("/not/there");
    expect(result.isErr()).toBeTruthy();
    expect(result.unwrapErr()).toEqual(error);
});

test("getResult throws with unknown error", async () => {
    const response = new Response("", {status: 200});
    mockFetch(response);

    expect.assertions(2);
    await getResult("/empty/data").catch((e) => {
        expect(e.message).toBe("Empty response");
    });
    expect(global.fetch).toBeCalled();
});
