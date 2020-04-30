import format from "date-fns/esm/format";

export function dateToStr(date: Date): string {
    return format(date, "yyyy-MM-dd");
}
