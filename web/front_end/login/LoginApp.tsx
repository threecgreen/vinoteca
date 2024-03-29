import { navigate, RouteComponentProps } from "@gatsbyjs/reach-router";
import { useSetUser, useUser } from "components/context/UserContext";
import { IUser } from "generated/rest";
import { useCanonical, useDescription, useTitle } from "lib/hooks";
import React from "react";
import { LoginForm } from "./LoginForm";

const LoginApp: React.FC<RouteComponentProps> = () => {
    useTitle("Login");
    useCanonical("/login");
    useDescription("Login to an existing vinoteca account");

    const user = useUser();
    const setUser = useSetUser();
    if (user) {
        return (
            <div className="container">
                <h1>It looks like you&rsquo;re already logged in.</h1>
            </div>
        );
    }

    const onFinish = (updatedUser: IUser) => {
        setUser(updatedUser);
        void navigate("/");
    }

    return (
        <div className="text-container">
            <div className="center">
                <h1 className="page-title med-heading">Login</h1>

                <LoginForm onFinish={ onFinish } />
            </div>
        </div>
    );
}
LoginApp.displayName = "LoginApp";
export default LoginApp;
