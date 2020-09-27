import { isEmpty, capitalizeFirstLetter } from "../utils";

test("isEmpty works with arrays", () => {
    expect(isEmpty([])).toBeTruthy();
    expect(isEmpty(["element"])).toBeFalsy();
});

test("isEmpty works with objects", () => {
    expect(isEmpty({})).toBeTruthy();
    expect(isEmpty({a: 1})).toBeFalsy();
});

test("capitalizeFirstLetter works with empty string", () => {
    expect(capitalizeFirstLetter("")).toBe("");
});

test("capitalizeFirstLetter to capitalize only the first letter", () => {
    expect(capitalizeFirstLetter("lastPurchaseDate")).toBe("LastPurchaseDate");
});
