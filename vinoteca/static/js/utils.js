/** Given a function, returns an object containing the function's return value
 * accessed with .value() and chaining with .chain(fn(x)).
*/
export function pipe(val) {
    return {
        chain: function (fn) { return pipe(fn(val)); },
        value: function () { return val; }
    };
}
//# sourceMappingURL=utils.js.map