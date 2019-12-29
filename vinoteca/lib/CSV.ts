import { IDict } from "./utils";

export function generateCSV<O>(objects: O[], columnOrder: Array<keyof O>,
                               hooks: IDict<(val: any) => string> = {}): string {
    return objects.reduceRight((acc, obj) => {
        const fields = columnOrder.map((col) => {
            if (col in hooks) {
                // @ts-ignore
                return hooks[col](obj[col]);
            }
            return obj[col]
        });
        return `${acc}\n${fields.join(',')}`;
    // Column names
    }, columnOrder.join(","));
}

export function download(fileName: string, data: string, type = "text/csv") {
    const blob = new Blob([data], {type});
    // Create a link element, click it, then destroy it
    const elem = window.document.createElement('a');
    elem.href = window.URL.createObjectURL(blob);
    elem.download = fileName;
    elem.style.display = 'none';
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
    window.URL.revokeObjectURL(elem.href);
}
