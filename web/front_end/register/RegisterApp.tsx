import { navigate, RouteComponentProps } from "@reach/router";
import { useSetUser, useUser } from "components/context/UserContext";
import { IUser } from "generated/rest";
import { useDescription, useTitle } from "lib/widgets";
import React from "react";
import { NewUserForm } from "./NewUserForm";

export const RegisterApp: React.FC<RouteComponentProps> = () => {
    useTitle("Register for an account");
    useDescription("Create a new vinoteca account");

    const user = useUser();
    if (user) {
        return (
            <div className="container">
                <h1>It looks like you&rsquo;re already logged in.</h1>
            </div>
        );
    }

    const setUser = useSetUser();
    const onFinish = (newUser: IUser) => {
        setUser(newUser);
        navigate("/");
    }

    return (
        <div className="container">
            <div className="center">
                <h3 className="page-title">Register</h3>

                <NewUserForm onFinish={ onFinish } />
            </div>
        </div>
    );
}
RegisterApp.displayName = "RegisterApp";
