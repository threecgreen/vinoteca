import { format } from "date-fns/esm";
import { deserializeDate } from "../date";

test("Deserialize naive date string without timezone", () => {
    process.env.TZ = "America/Chicago";
    expect((new Date()).getTimezoneOffset()).toBeGreaterThan(0);

    const date = deserializeDate("2019-04-01");
    expect(date.getMonth()).toBe(3);    // Months start at 0
    expect(date.getDate()).toBe(1);
    expect(date.getFullYear()).toBe(2019);
});

test("Format to date string after deserializing keeps naive date", () => {
    process.env.TZ = "America/Chicago";
    expect((new Date()).getTimezoneOffset()).toBeGreaterThan(0);

    let dateStr = format(deserializeDate("2019-04-01"), "MMM dd, yyyy");
    expect(dateStr).toBe("Apr 01, 2019");
    dateStr = format(deserializeDate("2020-06-01"), "MMM dd, yyyy");
    expect(dateStr).toBe("Jun 01, 2020");
});
