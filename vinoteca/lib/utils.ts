/** Basic type that corresponds to the response JSON of many asynchronous requests. */
import { IRESTObject } from "./rest";

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

export function restObjsToNameDict(objects: IRESTObject[]) {
    const dict: IDict<string | null> = {};
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
    return Object.keys(obj).length > 0;
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
