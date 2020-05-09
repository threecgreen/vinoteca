import { RestResult } from "../error";
import { getResult, postResult, putResult } from "./requests";
import { IChangePasswordForm, IChangeUserForm, ILoginForm, IUser, IUserForm } from "./Rest";

async function getUser(): Promise<RestResult<IUser>> {
    return getResult("/rest/users");
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
    return postResult("/rest/users/login", form);
}

export async function createUser(form: IUserForm): Promise<RestResult<IUser>> {
    return postResult("/rest/users", form);
}

export async function changePassword(form: IChangePasswordForm): Promise<RestResult<void>> {
    return postResult("/rest/users/password", form);
}

export async function updateUser(form: IChangeUserForm): Promise<RestResult<IUser>> {
    return putResult("/rest/users", form);
}

export async function logout(): Promise<RestResult<void>> {
    return postResult("/rest/users/logout", {});
}
