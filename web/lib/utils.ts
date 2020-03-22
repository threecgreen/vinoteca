/** Basic type that corresponds to the response JSON of many asynchronous requests. */
import { IRestModel } from "./RestTypes";
import Logger from "./Logger";

/**
 * Key-value store where the key must be a string, but the value is of any type
 * T.
 */
export interface IDict<T> {
    [key: string]: T;
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

export function dateToNum(date: Date): number {
    return date.getFullYear() * 10_000 + (date.getMonth() + 1) * 100 + date.getDate();
}

export const EN_DASH: string = "–";

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

export async function imageExists(imageUrl: string): Promise<boolean> {
    try {
        const response = await fetch(imageUrl, {method: "HEAD"});
        return response.ok;
    } catch {
        return false;
    }
}

export function getNameAndType(name: string | null, wineType: string): string {
    return `${(name ? name + " " : "")}${wineType}`;
}

export function onLoad(fun: () => void) {
    document.addEventListener("DOMContentLoaded", fun);
}

export function onError(event: Event | string, source?: string, line?: number, col?: number, error?: Error) {
    new Logger("window", false, false).logCritical(
        `A top-level error occured at line ${line}:${col} of ${source}: ${error?.message},`
        + ` event: ${event.toString()}`);
}
