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
 * Determines if a given JQuery selector actually selects an element on the
 * page.
 */
export function elementExists(elem: JQuery<HTMLElement>): boolean {
    return typeof(elem) !== "undefined" && elem.length > 0;
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
    return new Date(`${year}-${month}-${day}`);
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
