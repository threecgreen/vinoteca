import { IChangePasswordForm, IChangeUserForm, ILoginForm, IUser, IUserForm } from "generated/rest";
import { RestResult } from "../result";
import { getResult, postResult, putResult } from "./requests";
import { Json } from "./serde";

const BASE_URL = "/rest/users";

const parseUser = (t: string): IUser => Json.parse(t, {dateTimeKeys: ["createdAt", "lastLogin"]});
async function getUser(): Promise<RestResult<IUser>> {
    return getResult(BASE_URL, {}, parseUser);
}

export const getCurrentUser = async (): Promise<IUser | null> => {
    try {
        const userResult: RestResult<IUser | null> = await getUser();
        return userResult.unwrapOr(null);
    } catch {
        return null;
    }
};

export async function login(form: ILoginForm): Promise<RestResult<IUser>> {
    return postResult(`${BASE_URL}/login`, form, {}, undefined, parseUser);
}

export async function createUser(form: IUserForm): Promise<RestResult<IUser>> {
    return postResult(BASE_URL, form, {}, undefined, parseUser);
}

export async function changePassword(form: IChangePasswordForm): Promise<RestResult<void>> {
    return postResult(`${BASE_URL}/password`, form);
}

export async function updateUser(form: IChangeUserForm): Promise<RestResult<IUser>> {
    return putResult(BASE_URL, form);
}

export async function logout(): Promise<RestResult<void>> {
    return postResult(`${BASE_URL}/logout`, {});
}
