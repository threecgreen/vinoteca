import { format, parse } from "date-fns";

const FORMAT = "yyyy-MM-dd";

export function serializeDate(date: Date): string {
    return format(date, FORMAT);
}

export function deserializeDate(dateStr: string): Date {
    return parse(dateStr, FORMAT, new Date());
}
