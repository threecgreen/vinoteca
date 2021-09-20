import Logger from "./Logger";

/**
 * Checks if an object is empty, i.e. has no keys.
 * @param obj An object
 */
export function isEmpty(obj: unknown[] | Record<string, unknown>): boolean {
    if (obj instanceof Array) {
        return obj.length === 0;
    }
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
export function areEqual(a: Record<string, unknown>, b: Record<string, unknown>): boolean {
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

// eslint-disable-next-line
export function hasChanged<T extends Record<string, any>, U extends Record<string, any>>(
    newObj: T, source: U, exclude: Array<keyof T> = []): boolean {

    const keysToExclude = new Set(exclude);
    for (const k of Object.keys(newObj)) {
        if (keysToExclude.has(k)) {
            continue;
        }
        if (newObj[k] !== source[k]) {
            // If both falsey, ignore differences
            if (!newObj[k] && !source[k]) {
                continue;
            }
            (new Logger("hasChanged", false, false)).logWarning(`Key that changed`, { key: k });
            return true;
        }
    }
    return false;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function arrayHasChanged(newArr: any[], source: any[], exclude: string[] = []): boolean {
    if (newArr.length !== source.length) {
        return true;
    }
    for (let i = 0; i < newArr.length; ++i) {
        if (hasChanged(newArr[i], source[i], exclude)) {
            return true;
        }
    }
    return false;
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

export function onLoad(fun: () => void): void {
    document.addEventListener("DOMContentLoaded", fun);
}

export async function onError(
    event: Event | string, source?: string, line?: number, col?: number, error?: Error,
): Promise<void> {
    const logger = new Logger("window", false, false);
    if (error && error.message.startsWith("Loading chunk ")) {
        logger.logError(
            `A top-level error occured loading chunk: ${error.message}. Reloading...`);
        location.reload();
    } else {
        logger.logCritical(
            `A top-level error occured at line ${line}:${col} of ${source}: ${error?.message},`
            + ` event: ${event.toString()}`);
    }
}

/**
 * Check for the existence of a property on an object. This function is defined
 * to help TypeScript narrow the type.
 * @param obj object to check
 * @param prop property name to check
 */
export function hasOwnProperty<X extends Record<string, unknown>, Y extends PropertyKey>
    (obj: X, prop: Y): obj is X & Record<Y, unknown> {
    return obj.hasOwnProperty(prop)
}

export function isIn<T>(val: T, ...args: T[]): boolean {
    return args.includes(val);
}
