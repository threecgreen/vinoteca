/** Basic type that corresponds to the response JSON of many asynchronous requests. */
export interface Dict<T> {
    [key: string]: T;
}