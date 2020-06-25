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
