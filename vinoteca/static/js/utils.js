/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />
/**
 * Given a function, returns an object containing the function's return value
 * accessed with .value() and chaining with .chain(fn(x)).
 */
export function pipe(val) {
    return {
        chain: function (fn) { return pipe(fn(val)); },
        value: function () { return val; }
    };
}
/**
 * Determines if a given JQuery selector actually selects an element on the
 * page.
 */
export function elementExists(elem) {
    return typeof (elem) !== "undefined" && elem.length > 0;
}
//# sourceMappingURL=utils.js.map