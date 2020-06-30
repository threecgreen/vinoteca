import { navigate, RouteComponentProps } from "@reach/router";
import { useSetUser, useUser } from "components/context/UserContext";
import { IUser } from "generated/rest";
import React from "react";
import { LoginForm } from "./LoginForm";

export const LoginApp: React.FC<RouteComponentProps> = () => {
    const user = useUser();
    if (user) {
        return (
            <div className="container">
                <h1>It looks like you&rsquo;re already logged in.</h1>
            </div>
        );
    }

    const setUser = useSetUser();
    const onFinish = (updatedUser: IUser) => {
        setUser(updatedUser);
        navigate("/");
    }

    return (
        <div className="container">
            <div className="center">
                <h3 className="page-title">Login</h3>

                <LoginForm onFinish={ onFinish } />
            </div>
        </div>
    );
}
LoginApp.displayName = "LoginApp";
