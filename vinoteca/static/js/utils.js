/** Given a function, returns an object containing the function's return value
 * accessed with .value() and chaining with .chain(fn(x)).
*/
export function pipe(val) {
    return {
        chain: function (fn) { return pipe(fn(val)); },
        value: function () { return val; }
    };
}
/** Creates a range like the Python built-in of the same name. */
export function range(size, startAt) {
    if (startAt === void 0) { startAt = 0; }
    return Array(size).slice().map(function (i) { return i + startAt; });
}
//# sourceMappingURL=utils.js.map