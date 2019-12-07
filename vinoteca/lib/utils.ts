/** Basic type that corresponds to the response JSON of many asynchronous requests. */
import { IRestModel } from "./RestTypes";

/**
 * Key-value store where the key must be a string, but the value is of any type
 * T.
 */
export interface IDict<T> {
    [key: string]: T;
}

/**
 * Basic piped value interface  used to pipe the return values of one function
 * to arguments of the next function.
 *
 * Solution from @regiontog on https://github.com/Microsoft/TypeScript/issues/17718
 */
interface IPipe<T> {
    readonly value: () => T;
    chain<R>(fn: (x: T) => R): IPipe<R>;
}

/**
 * Given a function, returns an object containing the function's return value
 * accessed with .value() and chaining with .chain(fn(x)).
 * @param val
 */
export function pipe<T>(val: T): IPipe<T> {
    return {
        chain: (fn) => pipe(fn(val)),
        value: () => val,
    };
}

/**
 * Converts the objects to a single object of names to null for use with materialize
 * autocomplete.
 * @param objects An array of REST models
 */
export function restModelsToNameDict(objects: IRestModel[]): IDict<null> {
    const dict: IDict<null> = {};
    objects.map((obj) => {
        dict[obj.name] = null;
    });
    return dict;
}

/**
 * Converts an 8-digit number of format 'yyyymmdd' to a Date object.
 * @param num a date number of format 'yyyymmdd'
 */
export function numToDate(num: number): Date {
    const strNum = `${num}`;
    if (strNum.length !== 8) {
        console.warn(`Invalid date number '${strNum}'`);
    }
    const year = strNum.substr(0, 4);
    const month = strNum.substr(4, 2);
    const day = strNum.substr(6, 2);
    // JS months are 0-based
    return new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10));
}

/**
 * Returns the default vintage year, which is two years prior to the current
 * year. This function duplicates the Python function
 * vinoteca.utils.default_vintage_year
 */
export function defaultVintageYear(): number {
    return new Date().getFullYear() - 2;
}

/**
 * Checks if an object is empty, i.e. has no keys.
 * @param obj An object
 */
export function isEmpty(obj: object): boolean {
    return Object.keys(obj).length === 0;
}

/**
 * Returns s with the first letter capitalized.
 * @param s A string
 */
export function capitalizeFirstLetter(s: string): string {
    return s.length > 0 ? s[0].toUpperCase() + s.substring(1) : "";
}

/**
 * Converts a display name to an html id
 * @param name A component display name
 */
export function nameToId(name: string): string {
    return name.replace(/(\s)+/g, "-").toLowerCase();
}

/**
 * Tests if any member of the given container passes the predicate
 * @param arr An array to test
 * @param predicate A test to be applied to each element of arr
 */
export function any<T>(arr: T[], predicate: (elem: T) => boolean): boolean {
    for (const e of arr) {
        if (predicate(e)) {
            return true;
        }
    }
    return false;
}

/**
 * Finds the maximum element by one the properties of the type of element
 * @param arr An array of objcects
 * @param accessor A function for accessing a number property of the objects
 */
export function maxBy<T>(arr: T[], accessor: (elem: T) => number): T | undefined {
    let maxElem: T | undefined;
    let maxVal = -Infinity;
    for (const elem of arr) {
        const val = accessor(elem);
        if (val > maxVal) {
            maxElem = elem;
            maxVal = val;
        }
    }
    return maxElem;
}

/**
 * Sums an array of objects by one of the objects' properties.
 * @param arr An array of objects
 * @param accessor A function for accessing one of the objects' properties
 */
export function sumBy<T>(arr: T[], accessor: (elem: T) => number): number {
    let sum = 0;
    for (const elem of arr) {
        sum += accessor(elem);
    }
    return sum;
}

/**
 * Compares two objects for deep equality.
 * @param a An object
 * @param b An object
 */
export function areEqual(a: any, b: any): boolean {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) {
        return false;
    }
    for (const k of aKeys) {
        if (a[k] !== b[k]) {
            return false;
        }
    }
    return true;
}

interface IRangeArgs {
    start?: number;
    stop?: number;
    step?: number;
}

/**
 * Creates an iterable range of numbersonClick.
 * @param start First number of the range
 * @param stop End of the range (non-inclusive)
 * @param step Increment of the range
 */
export function* range({ start, stop, step }: IRangeArgs): IterableIterator<number> {
    step = step || 1;
    start = start || 0;
    stop = stop || Number.MAX_SAFE_INTEGER;
    for (let i = start; i < stop; i += step) {
        yield i;
    }
}

declare global {
    // tslint:disable-next-line:interface-name
    interface Array<T> {
        any<T>(predicate: (elem: T) => boolean): boolean;
    }
}

/**
 * Finds the maximum element by one the properties of the type of element
 * @param arr An array of objcects
 * @param accessor A function for accessing a number property of the objects
 */
Array.prototype.any = function <T>(this: T[], predicate: (elem: T) => boolean): boolean {
    return any(this, predicate);
};
