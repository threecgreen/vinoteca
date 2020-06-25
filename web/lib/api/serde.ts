import { deserializeDate, serializeDate } from "../date";

interface IParseParams<T> {
    dateKeys: Array<keyof T>;
    dateTimeKeys: Array<keyof T>;
}

interface IStringifyParams<T> {
    dateKeys: Array<keyof T>;
}

/**
 * JSON class with improved de(ser)erialization of dates and datetimes.
 */
export class Json {
    public static parse<T>(
        text: string, { dateKeys, dateTimeKeys }: Partial<IParseParams<T>> = {},
    ): T {
        if (dateKeys || dateTimeKeys) {
            return JSON.parse(
                text,
                Json.createReviver(
                    dateKeys ?? [],
                    dateTimeKeys ?? [],
                ) as (this: any, key: string, value: any) => any,
            );
        }
        return JSON.parse(text);
    }

    public static stringify<T>(
        value: T, { dateKeys }: Partial<IStringifyParams<T>> = {},
    ): string {
        if (dateKeys) {
            return JSON.stringify(
                value,
                Json.createReplacer(
                    dateKeys,
                ) as (this: any, key: string, value: any) => string,
            );
        }
        return JSON.stringify(value);
    }

    private static createReviver<T>(
        dateKeys: Array<keyof T>,
        dateTimeKeys: Array<keyof T>,
    ): (this: any, key: keyof T, value: any) => any {
        return (key, value) =>  {
            if (value === null) {
                return value;
            }
            if (dateKeys.includes(key)) {
                return deserializeDate(value);
            }
            if (dateTimeKeys.includes(key)) {
                return new Date(value);
            }
            return value;
        };
    }

    private static createReplacer<T>(
        dateKeys: Array<keyof T>,
    ): (this: any, key: keyof T, value: any) => string {
        return (key, value) => {
            if (value === null) {
                return value;
            }
            if (dateKeys.includes(key)) {
                // Yes we have to deserialize to re-serialize
                return serializeDate(new Date(value));
            }
            return value;
        };
    }
}
