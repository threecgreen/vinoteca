import { get, post } from "./requests";
import { IChangePasswordForm, ILoginForm, IUser, IUserForm } from "./Rest";

async function getUser(): Promise<IUser> {
    return get("/rest/users");
}

export const getCurrentUser = async (): Promise<IUser | null> => {
    try {
        return await getUser();
    } catch {
        return null;
    }
};

export async function login(form: ILoginForm): Promise<IUser> {
    return post("/rest/users/login", form);
}

export async function createUser(form: IUserForm): Promise<IUser> {
    return post("/rest/users", form);
}

export async function changePassword(form: IChangePasswordForm): Promise<void> {
    return post("/rest/users/password", form);
}

export async function logout(): Promise<void> {
    return post("/rest/users/logout", {});
}
