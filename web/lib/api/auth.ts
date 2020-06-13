import { RestResult } from "../error";
import { getResult, postResult, putResult } from "./requests";
import { IChangePasswordForm, IChangeUserForm, ILoginForm, IUser, IUserForm } from "./Rest";

const BASE_URL = "/rest/users";

async function getUser(): Promise<RestResult<IUser>> {
    return getResult(BASE_URL);
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
    return postResult(`${BASE_URL}/login`, form);
}

export async function createUser(form: IUserForm): Promise<RestResult<IUser>> {
    return postResult(BASE_URL, form);
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
