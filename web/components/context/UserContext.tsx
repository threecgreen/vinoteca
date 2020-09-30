import { PreloaderCirc } from "components/Preloader";
import { IUser } from "generated/rest";
import { getCurrentUser } from "lib/api/auth";
import React from "react";
import { IChildrenProp } from "../IProps";

const UserContext = React.createContext<IUser | null>(null);
UserContext.displayName = "UserContext";
const SetUserContext = React.createContext<((user: IUser | null) => void) | null>(null);
SetUserContext.displayName = "SetUserContext";

type Action =
    | {type: "setUser", user: IUser | null};

interface IState {
    isSet: boolean;
    user: IUser | null;
}

const reducer: React.Reducer<IState, Action> = (prevState, action) => {
    switch (action.type) {
        case "setUser":
            return {isSet: true, user: action.user};
        default:
            return prevState;
    }
}

export const UserProvider: React.FC<IChildrenProp> = ({children}) => {
    const [state, dispatch] = React.useReducer(reducer, {isSet: false, user: null});
    // Set user if already logged in.
    React.useEffect(() => {
        async function checkIfLoggedIn() {
            // Will return `null` if there's any error
            const updatedUser = await getCurrentUser();
            dispatch({type: "setUser", user: updatedUser});
        }
        void checkIfLoggedIn();
    }, [dispatch]);

    if (state.isSet) {
        return (
            <UserContext.Provider value={ state.user }>
                <SetUserContext.Provider value={ (user) => dispatch({type: "setUser", user}) }>
                    { children }
                </SetUserContext.Provider>
            </UserContext.Provider>
        );
    }
    // Don't show dependent components until we know whether user is logged in
    return (
        <div style={ {position: "absolute", left: "50%", top: "50%"} }>
            <PreloaderCirc />
        </div>
    );
};
UserProvider.displayName = "UserProvider";

export const useUser = (): IUser | null => {
    const user = React.useContext(UserContext);
    if (user === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return user;
};

export const useSetUser = (): (u: IUser | null) => void => {
    const setUser = React.useContext(SetUserContext);
    if (setUser) {
        return setUser;
    }
    throw new Error("useSetUser must be used within a UserProvider");
};
