import { Autocomplete } from "materialize-css";

type OnChange = (e: string) => void;

/** Setup autocompletion with provided completion options. */
export function autocomplete(elem: React.MutableRefObject<HTMLInputElement>,
                             completions: Record<string, string | null>,
                             onChange: OnChange, minLength = 1, limit = 5): void {
    if (elem.current) {
        new Autocomplete(elem.current, {
            data: completions,
            limit,
            minLength,

            onAutocomplete: function(this, text) {
                onChange(text);
            },
        });
    }
}

/** Simplifies displaying of toast messages to user */
export function toast(message: string): void {
    M.toast({
        classes: "red-bg",
        displayLength: 10000,
        html: message,
    });
}

export function setTitle(title: string): void {
    document.title = `${title} | vinoteca`;
}

export function setDescription(desc: string): void {
    document.querySelector('meta[name="description"]')?.setAttribute("content", desc);
}

const BASE_URL = "https://vinote.ca";
export function setCanonical(url: string): void {
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", `${BASE_URL}${url}`);
}
