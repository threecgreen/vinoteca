import { navigate, redirectTo, RouteComponentProps, Link } from "@reach/router";
import React, { lazy, Suspense } from "react";
import { IUser } from "../generated/rest";
import { useLogger } from "../lib/Logger";
import { useUser } from "./context/UserContext";
import { Preloader } from "./Preloader";
import { BtnLink } from "./Buttons";
import { MaterialIcon } from "./MaterialIcon";

interface IRouteByIdProps {
    id: string;
    componentName: keyof typeof Components;
}

// TODO: check if id is valid
export const RouteById: React.FC<RouteComponentProps<IRouteByIdProps>> = ({id, componentName}) => {
    if (!componentName) {
        throw new Error("Unexpected undefined or null componentName");
    }

    const user = useUser();
    if (user) {
        if (id === undefined || id === null) {
            return (
                <NotFound />
            );
        }
        const idNum: number = Number.parseInt(id, 10);
        // @ts-ignore
        return <AsyncComponent componentName={ componentName } id={ idNum } />;
    }

    redirectTo("/login");
    // never
    return null;
};

interface IAuthenticatedRouteProps {
    user: IUser | null;
    setUser: (user: IUser | null) => void;
    componentName: keyof typeof Components;
}

export const AuthenticatedRoute: React.FC<RouteComponentProps<IAuthenticatedRouteProps>> =
    ({componentName, ...props}) => {

    if (!componentName) {
        throw new Error("Unexpected undefined or null componentName");
    }

    const user = useUser();
    if (user) {
        return <AsyncComponent componentName={ componentName } {...props} />;
    }

    navigate("/login");
    // never
    return null;
};
AuthenticatedRoute.displayName = "AuthenticatedRoute";

// Prefetched components
const Login = lazy(() => import(/* webpackPrefetch: true, webpackChunkName: "login" */ "../front_end/login/LoginApp"))
const Register = lazy(() => import(/* webpackPrefetch: true, webpackChunkName: "register" */ "../front_end/register/RegisterApp"))
// Normal async components
const Dashboard = lazy(() => import(/* webpackChunkName: "dashboard" */ "../front_end/dashboards/DashboardApp"));
const Grapes = lazy(() => import(/* webpackChunkName: "grapes" */ "../front_end/grapes/GrapesApp"));
const HomeDashboard = lazy(() => import(/* webpackChunkName: "home_dashboard" */ "../front_end/home/HomeDashboard"));
const Inventory = lazy(() => import(/* webpackChunkName: "inventory" */ "../front_end/inventory/InventoryApp"));
const NewWine = lazy(() => import(/* webpackChunkName: "new_wine" */ "../front_end/new_wine/NewWineApp"));
const ProducerProfile = lazy(() => import(/* webpackChunkName: "producer_profile" */ "../front_end/producer_profile/ProducerProfileApp"));
const RegionProfile = lazy(() => import(/* webpackChunkName: "region_profile" */ "../front_end/region_profile/RegionProfileApp"));
const SearchWines = lazy(() => import(/* webpackChunkName: "search_wines" */ "../front_end/search_wines/SearchWinesApp"));
const ShoppingList = lazy(() => import(/* webpackChunkName: "shopping_list" */ "../front_end/shopping_list/ShoppingListApp"))
const UserProfile = lazy(() => import(/* webpackChunkName: "user_profile" */ "../front_end/user_profile/UserProfileApp"));
const VitiAreaProfile = lazy(() => import(/* webpackChunkName: "viti_area_profile" */ "../front_end/viti_area_profile/VitiAreaProfileApp"));
const WineProfile = lazy(() => import(/* webpackChunkName: "wine_profile" */ "../front_end/wine_profile/WineProfileApp"));
const Wines = lazy(() => import(/* webpackChunkName: "wines" */ "../front_end/wines/WinesApp"));
const WineTypeProfile = lazy(() => import(/* webpackChunkName: "wine_type_profile" */ "../front_end/wine_type_profile/WineTypeProfileApp"));

const Components = {
    // Prefetch
    Login,
    Register,
    // Normal
    Dashboard,
    Grapes,
    HomeDashboard,
    Inventory,
    NewWine,
    ProducerProfile,
    RegionProfile,
    SearchWines,
    ShoppingList,
    UserProfile,
    VitiAreaProfile,
    WineProfile,
    Wines,
    WineTypeProfile,
};

interface IAsyncComponentProps {
    componentName: keyof typeof Components;
}

export const AsyncComponent: React.FC<IAsyncComponentProps> = ({componentName, ...props}) => {
    const Component = Components[componentName];
    return (
        <Suspense fallback={ <Preloader /> }>
            {
                // @ts-ignore
                <Component {...props} />
            }
        </Suspense>
    );
};

export const AsyncRoute: React.FC<IAsyncComponentProps & RouteComponentProps> = ({
    componentName, ...props
}) => (
    <AsyncComponent componentName={ componentName } { ...props } />
)

export const NotFound: React.FC<RouteComponentProps<{info?: string}>> = ({info}) => {
    const logger = useLogger("NotFound", false, false);
    logger.logWarning("Client requested a resource that doesn't exist");
    return (
        <div className="container" style={ {maxWidth: "750px"} }>
            <h1 className="light center big" style={ {fontSize: "80px" } }>
                Error 404<span style={ {whiteSpace: "pre-wrap"} }>   (○口○&nbsp;)</span>
            </h1>
            <br />
            <h4>Looks like you took a wrong turn in the cellar&hellip;</h4>
            <p>{ info }</p>
        </div>
    );
};
NotFound.displayName = "NotFound";

export const Unauthorized: React.FC<RouteComponentProps<{info?: string}>> = ({info}) => {
    return (
        <div className="container">
            <h1 className="light center big">You need to log in to access this</h1>
            <br />
            <p>{ info }</p>
            <BtnLink classes={["green-bg"]} to="/login">
                <MaterialIcon iconName="account_circle" />
                login
            </BtnLink>
            <BtnLink classes={["yellow-bg"]} to="/register">
                <MaterialIcon iconName="add_circle" />
                register
            </BtnLink>
        </div>
    )
}
Unauthorized.displayName = "Unauthorized";

export const Forbidden: React.FC<RouteComponentProps<{info?: string}>> = ({info}) => {
    const logger = useLogger("Forbidden", false, false);
    logger.logWarning("Client requested a forbidden resource");
    return (
        <div className="container">
            <h1 className="light center big">Forbidden</h1>
            <p>{ info }</p>
        </div>
    );
}
Forbidden.displayName = "Forbidden";
