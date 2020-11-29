import { navigate, RouteComponentProps } from "@reach/router";
import { useSetUser, useUser } from "components/context/UserContext";
import { IUser } from "generated/rest";
import { useCanonical, useDescription, useTitle } from "lib/hooks";
import React from "react";
import { NewUserForm } from "./NewUserForm";

const RegisterApp: React.FC<RouteComponentProps> = () => {
    useTitle("Register for an account");
    useCanonical("/register")
    useDescription("Create a new vinoteca account");

    const user = useUser();
    const setUser = useSetUser();
    if (user) {
        return (
            <div className="container">
                <h1>It looks like you&rsquo;re already logged in.</h1>
            </div>
        );
    }

    const onFinish = (newUser: IUser) => {
        setUser(newUser);
        void navigate("/");
    }

    return (
        <div className="container">
            <div className="center">
                <h1 className="page-title med-heading">Register</h1>

                <NewUserForm onFinish={ onFinish } />
            </div>
        </div>
    );
}
RegisterApp.displayName = "RegisterApp";
export default RegisterApp;
