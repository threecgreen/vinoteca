import { IUser } from "./Rest";
import { getUser } from "./RestApi";

export const getCurrentUser = async (): Promise<IUser | null> => {
    try {
        return await getUser();
    } catch {
        return null;
    }
};
