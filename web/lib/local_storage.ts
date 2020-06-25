import React from "react";
import { useLogger } from "./Logger";

export function useLocalStorage<V>(key: string, initValue: V,
                                   posthook = (x: any): V => x,
                                   prehook = (x: V): any => x) {
    const logger = useLogger(`useLocalStorage<${key}>`);
    const [storedValue, setStoredValue] = React.useState(() => {
        const json = window.localStorage.getItem(key);
        if (json) {
            try {
                const val = JSON.parse(json);
                return posthook(val);
            } catch (err) {
                window.localStorage.removeItem(key);
                logger.logWarning(`Failed to read local storage with error: ${err}`);
                return initValue;
            }
        }
        return initValue;
    });

    const setAndStoreValue = (newValue: V) => {
        try {
            const value = newValue instanceof Function ? newValue(storedValue) : newValue;
            setStoredValue(value);
            const serializedValue = JSON.stringify(prehook(value));
            window.localStorage.setItem(key, serializedValue);
        } catch (err) {
            logger.logWarning(`Failed to update local storage with error: ${err.message}`);
            window.localStorage.removeItem(key);
        }
    };

    return [storedValue, setAndStoreValue];
}

export function useLocalStorageReducer<S, A>(
    key: string, reducer: React.Reducer<S, A>,
    initializer: () => S,
    serializer: (v: S) => string = JSON.stringify,
    parser: (t: string) => S = JSON.parse,
    exclude: Array<keyof S> = [],
): [S, React.Dispatch<A>, () => void] {

    const logger = useLogger(`useLocalStorageReducer<${key}>`);

    const reduceAndStore: React.Reducer<S, A> = (prevState, action) => {
        const newState = reducer(prevState, action);
        try {
            let stateToSerialize: S;
            if (exclude.length > 0) {
                stateToSerialize = {...newState};
                exclude.forEach((field) => {
                    delete stateToSerialize[field];
                });
            } else {
                stateToSerialize = newState;
            }
            const serializedValue = serializer(newState);
            window.localStorage.setItem(key, serializedValue);
        } catch (err) {
            logger.logWarning(`Failed to update local storage with error: ${err.message}`);
            window.localStorage.removeItem(key);
        }
        return newState;
    };

    const [state, dispatch] = React.useReducer(reduceAndStore, [], () => {
        const json = window.localStorage.getItem(key);
        if (json) {
            try {
                return parser(json);
            } catch (err) {
                window.localStorage.removeItem(key);
                logger.logWarning(`Failed to read local storage with error: ${err}`);
            }
        }
        return initializer();
    });

    const clearStorage = () => window.localStorage.removeItem(key);
    return [state, dispatch, clearStorage];
}
