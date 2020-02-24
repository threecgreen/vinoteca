import React from "react";
import { RouteComponentProps } from "@reach/router";

interface IProps {
    id: string;
    Component: React.FC<{id: number}>;
}

export const RouteById: React.FC<RouteComponentProps<IProps>> = ({id, Component}) => {
    const RealComponent = Component!;
    if (id === undefined || id === null) {
        return (
            <h1>Not found</h1>
        );
    }
    const idNum = parseInt(id);
    return <RealComponent id={ idNum } />
}
