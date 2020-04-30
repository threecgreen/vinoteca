import { post } from "./requests";
import { ILogForm, ILogResponse } from "./Rest";

export async function postLog(logForm: ILogForm): Promise<ILogResponse> {
    return post("/rest/logs", logForm);
}
