import { navigate, redirectTo, RouteComponentProps } from "@reach/router";
import React, { lazy } from "react";
import { IUser } from "../lib/api/Rest";
import { useLogger } from "../lib/Logger";
import { LoginForm } from "./AccountModals";
import { useSetUser, useUser } from "./UserContext";

interface IRouteByIdProps {
    id: string;
    componentName: keyof typeof Components;
}

// TODO: check if id is valid
export const RouteById: React.FC<RouteComponentProps<IRouteByIdProps>> = ({id, componentName}) => {
    if (!componentName) {
        throw new Error("Unexpected undefined or null componentName");
    }
    const [creationTime, _] = React.useState(new Date().getTime());

    const user = useUser();
    const setUser = useSetUser();
    if (user) {
        if (id === undefined || id === null) {
            return (
                <NotFound />
            );
        }
        // @ts-ignore
        return <AsyncComponent componentName={ componentName } id={ id } />;
    }
    // Wait 500ms before showing login screen
    if (new Date().getTime() - creationTime < 500)  {
        return null;
    }
    // TODO: better support for creating an account as well
    return (
        <LoginForm onFinish={ setUser! }
            onCancel={ () => navigate("/") }
        />
    );
}

interface IAuthenticatedRouteProps {
    user: IUser | null,
    setUser: (user: IUser | null) => void,
    componentName: keyof typeof Components,
}

export const AuthenticatedRoute: React.FC<RouteComponentProps<IAuthenticatedRouteProps>> = ({componentName, ...props}) => {
    if (!componentName) {
        throw new Error("Unexpected undefined or null componentName");
    }
    const [creationTime, _] = React.useState(new Date().getTime());

    const user = useUser();
    const setUser = useSetUser();
    if (user) {
        return <AsyncComponent componentName={ componentName } {...props} />;
    }
    // Wait 500ms before showing login screen
    if (new Date().getTime() - creationTime < 500)  {
        return null;
    }
    // TODO: better support for creating an account as well
    return (
        <LoginForm onFinish={ setUser! }
            onCancel={ () => navigate("/") }
        />
    );
}
AuthenticatedRoute.displayName = "AuthenticatedRoute";

const Dashboard = lazy(() => import(/* webpackChunkName: "dashboard" */ "../front_end/dashboards/DashboardApp"));
const Grapes = lazy(() => import(/* webpackChunkName: "grapes" */ "../front_end/grapes/GrapesApp"));
const HomeDashboard = lazy(() => import(/* webpackChunkName: "home_dashboard" */ "../front_end/home/HomeDashboard"));
const Inventory = lazy(() => import(/* webpackChunkName: "inventory" */ "../front_end/inventory/InventoryApp"));
const NewWine = lazy(() => import(/* webpackChunkName: "new_wine" */ "../front_end/new_wine/NewWineApp"));
const ProducerProfile = lazy(() => import(/* webpackChunkName: "producer_profile" */ "../front_end/producer_profile/ProducerProfileApp"));
const RegionProfile = lazy(() => import(/* webpackChunkName: "region_profile" */ "../front_end/region_profile/RegionProfileApp"));
const SearchWines = lazy(() => import(/* webpackChunkName: "search_wines" */ "../front_end/search_wines/SearchWinesApp"));
const UserProfile = lazy(() => import(/* webpackChunkName: "user_profile" */ "../front_end/user_profile/UserProfileApp"));
const VitiAreaProfile = lazy(() => import(/* webpackChunkName: "viti_area_profile" */ "../front_end/viti_area_profile/VitiAreaProfileApp"));
const WineProfile = lazy(() => import(/* webpackChunkName: "wine_profile" */ "../front_end/wine_profile/WineProfileApp"));
const Wines = lazy(() => import(/* webpackChunkName: "wines" */ "../front_end/wines/WinesApp"));
const WineTypeProfile = lazy(() => import(/* webpackChunkName: "wine_type_profile" */ "../front_end/wine_type_profile/WineTypeProfileApp"));

const Components = {
    Dashboard,
    Grapes,
    HomeDashboard,
    Inventory,
    NewWine,
    ProducerProfile,
    RegionProfile,
    SearchWines,
    UserProfile,
    VitiAreaProfile,
    WineProfile,
    Wines,
    WineTypeProfile,
};

export const AsyncComponent: React.FC<{componentName: keyof typeof Components}> = ({componentName, ...props}) => {
    const Component = Components[componentName];
    // @ts-ignore
    return <Component {...props} />;
}

export const NotFound: React.FC<RouteComponentProps<{}>> = () => {
    const logger = useLogger("NotFound", false, false);
    logger.logWarning("Client requested url that doesn't exist")
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
