import { Link, Router as ReachRouter } from "@reach/router";
import { HomeApp } from "./HomeApp";
import React from "react";

const Router: React.FC<{}> = (_) => {
    return (
        <ReachRouter>
            <HomeApp />
        </ReachRouter>
    )
};
