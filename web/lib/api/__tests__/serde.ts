import { Json } from "../serde";

test("Deserializing nullable Date leaves null alone", () => {
    const obj = {date: null, fruit: "Apple", count: 1};
    const input = JSON.stringify(obj);

    const result = Json.parse(input, {dateKeys: ["date"]}) as typeof obj;
    expect(result.date).toBeNull();
});

test("Serializing nullable Date leaves null alone", () => {
    const obj = {date: null, fruit: "Pear", count: 2.5};
    const result = Json.stringify(obj);
    expect(result).toContain("null");
});

test("(De)serialize date", () => {
    const obj = {date: new Date(2006, 12, 25), fruit: "peach", count: -3};

    const objString = Json.stringify(obj, {dateKeys: ["date"]});
    const result = Json.parse(objString, {dateKeys: ["date"]}) as typeof obj;
    expect(result).toStrictEqual(obj);
});


test("Deserialize datetime", () => {
    const obj = {dateTime: new Date(2018, 6, 26, 13, 30), count: 0.75};
    const input = JSON.stringify(obj);

    const result = Json.parse(input, {dateTimeKeys: ["dateTime"]}) as typeof obj;
    expect(result).toStrictEqual(obj);
});
