import React from "react";

// Credit to Dan Abramov at overreacted.io
/**
 * React hook for calling a function/performing an action periodically, tied
 * to the component lifecycle.
 * @param callback Function to be called periodically
 * @param delay Interval between calls of @p callback in milliseconds
 */
export function useInterval(callback: () => void, delay: number | null = null): void {
    const savedCallback = React.useRef(() => { return; });

    // Remember the latest callback without having to re-run use effect every
    // time the callback changes
    React.useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    React.useEffect(() => {
        if (delay !== null) {
            const id = setInterval(savedCallback.current, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}
