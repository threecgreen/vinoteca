export const EN_DASH: string = "–";

/**
 * Returns the default vintage year, which is two years prior to the current
 * year. This function duplicates the Python function
 * vinoteca.utils.default_vintage_year
 */
export function defaultVintageYear(): number {
    return new Date().getFullYear() - 2;
}

export function getNameAndType(name: string | null, wineType: string): string {
    return `${(name ? name + " " : "")}${wineType}`;
}

/**
 * Converts a display name to an html id
 * @param name A component display name
 */
export function nameToId(name: string): string {
    return name.replace(/(\s)+/g, "-").toLowerCase();
}

export function handleSubmit(save: () => Promise<void>,
                             setIsSaving: (isSaving: boolean) => void): () => Promise<void> {

    return async () => {
        setIsSaving(true);
        await save();
        setIsSaving(false);
    };
}

export const compareNums = (x: number, y: number): number => {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
}
