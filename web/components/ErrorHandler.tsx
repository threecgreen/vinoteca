import { VinotecaError } from "generated/rest";
import React from "react";
import { Forbidden, NotFound, Unauthorized } from "./CommonRoutes";

interface IProps {
    error: VinotecaError;
}

export const ErrorHandler: React.FC<IProps> = ({error}) => {
    switch (error.type) {
        case "NotFound":
            return <NotFound info={ error.message } />;
        case "Unauthorized":
            return <Unauthorized info={ error.message }/>;
        case "Forbidden":
            return <Forbidden info={ error.message } />;
        default:
            return (
                <div className="container">
                    <h1>An error occurred</h1>
                    <h2>{ error.message }</h2>
                </div>
            );
        }
}
ErrorHandler.displayName = "ErrorHandler";
