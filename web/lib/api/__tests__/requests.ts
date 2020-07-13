import { get } from "../requests";

beforeEach(() => {
    // @ts-ignore
    // fetch.resetMocks();
});

// FIXME: these tests
test.skip("get with checkResponse handle error codes", () => {
    const response = new Response("Uh oh", {status: 401, statusText: "Unauthorized"});
    // @ts-ignore
    fetch.mockResponseOnce(response);
    expect(() => get("/private/data")).toThrow("Uh oh");
});

test("get with checkResponse handle no application/json", () => {

});

test("get with checkResponse throw when empty body", () => {

});

test("getResult returns VinotecaError", () => {

});

test("getResult throws with unknown error", () => {

});
