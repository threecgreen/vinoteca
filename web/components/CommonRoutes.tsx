/* eslint-disable max-len */
import { RouteComponentProps } from "@gatsbyjs/reach-router";
import { setTitle } from "lib/widgets";
import React, { lazy, Suspense } from "react";
import { useLogger } from "../lib/Logger";
import { BtnLink } from "./Buttons";
import { useUser } from "./context/UserContext";
import { MaterialIcon } from "./MaterialIcon";
import { Preloader } from "./Preloader";

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
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return <AsyncComponent componentName={ componentName } id={ idNum } />;
    }

    return <Unauthorized />;
};

interface IAuthAsyncRouteProps {
    componentName: keyof typeof Components;
}

export const AuthAsyncRoute: React.FC<RouteComponentProps<IAuthAsyncRouteProps>> =
    ({componentName, ...props}) => {

    if (!componentName) {
        throw new Error("Unexpected undefined or null componentName");
    }

    const user = useUser();
    if (user) {
        return <AsyncComponent componentName={ componentName } {...props} />;
    }

    return <Unauthorized />;
};
AuthAsyncRoute.displayName = "AuthAsyncRoute";

// Prefetched components
const Login = lazy(() => import(/* webpackPrefetch: true, webpackChunkName: "login" */ "../front_end/login/LoginApp"))
const Register = lazy(() => import(/* webpackPrefetch: true, webpackChunkName: "login" */ "../front_end/register/RegisterApp"))
// Normal async components
const Dashboard = lazy(() => import(/* webpackChunkName: "private" */ "../front_end/dashboards/DashboardApp"));
const Grapes = lazy(() => import(/* webpackChunkName: "private" */ "../front_end/grapes/GrapesApp"));
const Producers = lazy(() => import(/* webpackChunkName: "private" */ "../front_end/producers/ProducersApp"));
const HomeDashboard = lazy(() => import(/* webpackChunkName: "private" */ "../front_end/home/HomeDashboard"));
const Inventory = lazy(() => import(/* webpackChunkName: "private" */ "../front_end/inventory/InventoryApp"));
const NewWine = lazy(() => import(/* webpackChunkName: "private" */ "../front_end/new_wine/NewWineApp"));
const ProducerProfile = lazy(() => import(/* webpackChunkName: "private" */ "../front_end/producer_profile/ProducerProfileApp"));
const RegionProfile = lazy(() => import(/* webpackChunkName: "private" */ "../front_end/region_profile/RegionProfileApp"));
const SearchWines = lazy(() => import(/* webpackChunkName: "private" */ "../front_end/search_wines/SearchWinesApp"));
const ShoppingList = lazy(() => import(/* webpackChunkName: "private" */ "../front_end/shopping_list/ShoppingListApp"))
const UserProfile = lazy(() => import(/* webpackChunkName: "private" */ "../front_end/user_profile/UserProfileApp"));
const VitiAreaProfile = lazy(() => import(/* webpackChunkName: "private" */ "../front_end/viti_area_profile/VitiAreaProfileApp"));
const WineProfile = lazy(() => import(/* webpackChunkName: "private" */ "../front_end/wine_profile/WineProfileApp"));
const Wines = lazy(() => import(/* webpackChunkName: "private" */ "../front_end/wines/WinesApp"));
const WineTypeProfile = lazy(() => import(/* webpackChunkName: "private" */ "../front_end/wine_type_profile/WineTypeProfileApp"));

const Components = {
    // Prefetch
    Login,
    Register,
    // Normal
    Dashboard,
    Grapes,
    Producers,
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
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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

export const NotFound: React.FC<RouteComponentProps> = (props) => {
    const logger = useLogger("NotFound", false, false);
    logger.logWarning("Client requested a resource that doesn't exist");
    // Keep google at bay
    const metaRobots = document.createElement("meta");
    metaRobots.name = "robots";
    metaRobots.content = "noindex";
    document.head.appendChild(metaRobots);
    return (
        <div className="text-container" style={ {maxWidth: "750px"} }>
            <h1 className="light center big" style={ {fontSize: "80px" } }>
                Error 404<span style={ {whiteSpace: "pre-wrap"} }>   (○口○&nbsp;)</span>
            </h1>
            <br />
            <h4>Looks like you took a wrong turn in the cellar&hellip;</h4>
            { props.children }
        </div>
    );
};
NotFound.displayName = "NotFound";

export const Unauthorized: React.FC<RouteComponentProps> = (props) => {
    return (
        <div className="text-container">
            <h1 className="light center big">You need to log in to access this</h1>
            <br />
            { props.children }
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

export const Forbidden: React.FC<RouteComponentProps> = (props) => {
    const logger = useLogger("Forbidden", false, false);
    logger.logWarning("Client requested a forbidden resource");
    return (
        <div className="text-container">
            <h1 className="light center big">Forbidden</h1>
            { props.children }
        </div>
    );
}
Forbidden.displayName = "Forbidden";
