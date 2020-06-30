import { getCurrentUser } from "lib/api/auth";
import { IUser } from "lib/api/Rest";
import React from "react";
import { IChildrenProp } from "../IProps";

const UserContext = React.createContext<IUser | null>(null);
UserContext.displayName = "UserContext";
const SetUserContext = React.createContext<((user: IUser | null) => void) | null>(null);
SetUserContext.displayName = "SetUserContext";

export const UserProvider: React.FC<IChildrenProp> = ({children}) => {
    const [user, setUser] = React.useState<IUser | null>(null);
    // Set user if already logged in.
    React.useEffect(() => {
        async function checkIfLoggedIn() {
            // Will return `null` if there's any error
            const updatedUser = await getCurrentUser();
            setUser(updatedUser);
        }
        checkIfLoggedIn();
    }, []);

    return (
        <UserContext.Provider value={ user }>
            <SetUserContext.Provider value={ setUser }>
                { children }
            </SetUserContext.Provider>
        </UserContext.Provider>
    );
};
UserProvider.displayName = "UserProvider";

export const useUser = () => {
    const user = React.useContext(UserContext);
    if (user === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return user;
};

export const useSetUser = () => {
    const setUser = React.useContext(SetUserContext);
    if (setUser) {
        return setUser;
    }
    throw new Error("useSetUser must be used within a UserProvider");
};
