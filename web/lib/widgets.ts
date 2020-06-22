import { Autocomplete } from "materialize-css";
import React from "react";
import { IDict } from "./utils";

type OnChange = (e: string) => void;

/** Setup autocompletion with provided completion options. */
export function autocomplete(elem: React.MutableRefObject<HTMLInputElement>,
                             completions: IDict<string | null>,
                             onChange: OnChange, minLength = 1, limit = 5) {
    if (elem.current) {
        // tslint:disable-next-line no-unused-expression
        new Autocomplete(elem.current, {
            data: completions,
            limit,
            minLength,

            onAutocomplete: function(this, text) {  // tslint:disable-line object-literal-shorthand
                onChange(text);
            },
        });
    }
}

/** Simplifies displaying of toast messages to user */
export function toast(message: string) {
    M.toast({
        classes: "red-bg",
        displayLength: 10000,
        html: message,
    });
}

export function useTitle(title: string) {
    React.useEffect(() => {
        setTitle(title);
    }, [title]);
}

export function setTitle(title: string) {
    document.title = `${title} | vinoteca`;
}

export function useDescription(desc: string) {
    React.useEffect(() => {
        setDescription(desc);
    }, [desc]);
}

export function setDescription(desc: string) {
    document.querySelector('meta[name="description"]')?.setAttribute("content", desc);
}

export function useCanonical(url: string) {
    React.useEffect(() => {
        setCanonical(url);
    });
}

const BASE_URL = "https://vinote.ca";
export function setCanonical(url: string) {
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", `${BASE_URL}${url}`);
}
