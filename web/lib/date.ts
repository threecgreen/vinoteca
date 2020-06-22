import format from "date-fns/esm/format";
import parse from "date-fns/esm/parse";

const FORMAT = "yyyy-MM-dd";

export function serializeDate(date: Date): string {
    return format(date, FORMAT);
}

export function deserializeDate(dateStr: string): Date {
    return parse(dateStr, FORMAT, new Date());
}
