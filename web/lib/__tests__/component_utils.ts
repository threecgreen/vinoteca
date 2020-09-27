import { nameToId } from "lib/component_utils";

test("nameToId converts to kabob case", () => {
    expect(nameToId("grape    4")).toBe("grape-4");
});
