import { IVersion } from "generated/rest";
import { get } from "./requests";

export async function getVersion(): Promise<IVersion> {
    return get("/rest/version");
}
