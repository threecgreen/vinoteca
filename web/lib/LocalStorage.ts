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
                logger.logWarning(`Failed local storage with error: ${err}`);
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
            logger.logWarning(`Failed to update local storage with error: ${err}`);
            window.localStorage.removeItem(key);
        }
    };

    return [storedValue, setAndStoreValue];
}

export function useLocalStorageReducer<S, A>(key: string, reducer: React.Reducer<S, A>,
                                             initializer: () => S) {
    const logger = useLogger(`useLocalStorageReducer<${key}>`);
    const [state, dispatch] =  React.useReducer(reducer, [], initializer);
}
