import React, { MutableRefObject } from "react";
import { setTitle, setDescription, setCanonical } from "./widgets";

export function useTitle(title: string): void {
    React.useEffect(() => {
        setTitle(title);
    }, [title]);
}

export function useDescription(desc: string): void {
    React.useEffect(() => {
        setDescription(desc);
    }, [desc]);
}

export function useCanonical(url: string): void {
    React.useEffect(() => {
        setCanonical(url);
    });
}
