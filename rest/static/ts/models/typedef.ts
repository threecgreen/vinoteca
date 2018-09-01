export type Maybe<T> = T | null;

/** Basic type that corresponds to the response JSON of many asynchronous requests. */
export interface IDict<T> {
    [key: number]: T;
}
