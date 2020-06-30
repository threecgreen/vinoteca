import { ILogForm, ILogResponse } from "generated/rest";
import { post } from "./requests";

export async function postLog(logForm: ILogForm): Promise<ILogResponse> {
    return post("/rest/logs", logForm);
}
