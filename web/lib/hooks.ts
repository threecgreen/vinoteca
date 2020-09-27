import React from "react";
import { setTitle, setDescription, setCanonical } from "./widgets";

export function useTitle(title: string) {
    React.useEffect(() => {
        setTitle(title);
    }, [title]);
}

export function useDescription(desc: string) {
    React.useEffect(() => {
        setDescription(desc);
    }, [desc]);
}

export function useCanonical(url: string) {
    React.useEffect(() => {
        setCanonical(url);
    });
}
