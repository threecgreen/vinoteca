/** Basic type that corresponds to the response JSON of many asynchronous requests. */
export interface Dict<T> {
    [key: string]: T;
}

/** Basic piping of the return values of one function to arguments of the next
 * function.
 *
 * Solution from @regiontog on https://github.com/Microsoft/TypeScript/issues/17718
 */
interface IPipe<T> {
    readonly value: () => T;
    chain<R>(fn: (x: T) => R): IPipe<R>;
}

/** Given a function, returns an object containing the function's return value
 * accessed with .value() and chaining with .chain(fn(x)).
*/
export function pipe<T>(val: T): IPipe<T> {
    return {
        chain: fn => pipe(fn(val)),
        value: () => val
    };
}

/** Creates a range like the Python built-in of the same name. */
export function range(size:number, startAt:number = 0):ReadonlyArray<number> {
    return [...Array(size)].map(i => i + startAt);
}
