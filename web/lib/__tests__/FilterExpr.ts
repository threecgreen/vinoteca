import FilterExpr from "../FilterExpr";

test("parse and toString are functionally equivalent to id", () => {
    const originalStr = ">5";
    const expr = FilterExpr.parse(originalStr);
    const res = expr.toString();
    expect(res).toBe(originalStr);
});

test("toJson and fromJson are functionally equivalent to id", () => {
    const originalStr = "<=2.5";
    const originalExpr = FilterExpr.parse(originalStr);
    const json = originalExpr.toJson();
    const expr = FilterExpr.fromJson(json);
    expect(expr.toJson()).toBe(json);
});

test("Numerical operator filtering should work", () => {
    const expr = FilterExpr.parse("> 0.5");
    expect(expr.call(0.5)).toBeFalsy();
    expect(expr.call(0.45)).toBeFalsy();
    expect(expr.call(-0.5)).toBeFalsy();
    expect(expr.call(0.6)).toBeTruthy();
    expect(expr.call(6)).toBeTruthy();
    expect(expr.call("")).toBeFalsy();
});

test("Text filtering should be case insensitive", () => {
    const mixedExpr = FilterExpr.parse("Cam");
    const lowerExpr = FilterExpr.parse("cam");
    const upperExpr = FilterExpr.parse("CAM");

    [mixedExpr, lowerExpr, upperExpr].forEach((expr) => {
        expect(expr.call("Camino")).toBeTruthy();
        expect(expr.call("Campo Viejo")).toBeTruthy();
        expect(expr.call("Casillero")).toBeFalsy();
        expect(expr.call("California")).toBeFalsy();
        expect(expr.call("Ucam")).toBeTruthy();
    });
});
