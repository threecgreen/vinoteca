import { RouteComponentProps } from "@reach/router";
import React from "react";
import Logger from "../lib/Logger";
import { IUser } from "../lib/Rest";
import { LoginForm } from "./AccountModals";

interface IRouteByIdProps {
    id: string;
    Component: React.FC<{id: number}>;
}

// TODO: check if id is valid
export const RouteById: React.FC<RouteComponentProps<IRouteByIdProps>> = ({id, Component}) => {
    const RealComponent = Component!;
    if (id === undefined || id === null) {
        return (
            <NotFound />
        );
    }
    const idNum = parseInt(id);
    return <RealComponent id={ idNum } />
}

interface IAuthenticatedRouteProps {
    user: IUser | null,
    setUser: (user: IUser | null) => void,
    Component: React.FC,
}

export const AuthenticatedRoute: React.FC<RouteComponentProps<IAuthenticatedRouteProps>> = ({user, setUser, Component, ...props}) => {
    if (user) {
        const RealComponent = Component!;
        return <RealComponent { ...props } />;
    }
    return (
        <LoginForm />
    );
}

export const NotFound: React.FC<RouteComponentProps<{}>> = () => {
    new Logger("NotFound", false, false).logWarning("Client requested url that doesn't exist")
    return (
        <div className="container" style={ {maxWidth: "750px"} }>
            <h1 className="light center big" style={ {fontSize: "80px" } }>
                Error 404&nbsp;&nbsp;&nbsp;(○口○ )
            </h1>
            <br />
            <h4>Looks like you took a wrong turn in the cellar&hellip;</h4>
        </div>
    );
}
NotFound.displayName = "NotFound";
