import { RouteComponentProps, Router as ReachRouter } from "@reach/router";
import React from "react";
import { AuthenticatedRoute, NotFound, RouteById } from "../components/CommonRoutes";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { IChildrenProp } from "../components/IProps";
import { UserProvider } from "../components/UserContext";
import { AboutApp } from "./about/AboutApp";
import { DashboardApp } from "./dashboards/DashboardApp";
import { Footer } from "./Footer";
import { GrapesApp } from "./grapes/GrapesApp";
import { HomeApp } from "./home/HomeApp";
import { InventoryApp } from "./inventory/InventoryApp";
import { Navbar } from "./Navbar";
import { NewWineApp } from "./new_wine/NewWineApp";
import { ProducerProfileApp } from "./producer_profile/ProducerProfileApp";
import { RegionProfileApp } from "./region_profile/RegionProfileApp";
import { SearchWinesApp } from "./search_wines/SearchWinesApp";
import { UserProfileApp } from "./user_profile/UserProfileApp";
import { VitiAreaProfileApp } from "./viti_area_profile/VitiAreaProfileApp";
import { WinesApp } from "./wines/WinesApp";
import { WineProfileApp } from "./wine_profile/WineProfileApp";
import { WineTypeProfileApp } from "./wine_type_profile/WineTypeProfileApp";
import { ViewportProvider } from "../components/ViewportContext";

const App: React.FC<RouteComponentProps<IChildrenProp>> = ({children}) => {
    return (
        <div id="site-content">
            <Navbar />
            <main>
                { children }
            </main>
            <Footer />
        </div>
    );
}

export const Router: React.FC<{}> = (_props) => (
    <ErrorBoundary>
        <UserProvider>
            <ViewportProvider>
                <ReachRouter>
                    <App path="/">
                        <HomeApp path="/" />
                        <AboutApp path="/about" />
                        <AuthenticatedRoute Component={ DashboardApp } path="dashboards" />
                        <AuthenticatedRoute Component={ GrapesApp } path="grapes" />

                        <AuthenticatedRoute Component={ WinesApp } path="wines" />
                        <RouteById Component={ WineProfileApp } path="wines/:id" />
                        <AuthenticatedRoute
                            // @ts-ignore
                            Component={ InventoryApp }
                            path="wines/inventory"
                        />
                        <AuthenticatedRoute Component={ NewWineApp } path="wines/new" />
                        <AuthenticatedRoute
                            // @ts-ignore
                            Component={ SearchWinesApp } path="wines/search"
                        />

                        <AuthenticatedRoute
                            // @ts-ignore
                            Component={ ProducerProfileApp }
                            path="producers/:producerId"
                        />
                        <AuthenticatedRoute
                            // @ts-ignore
                            Component={ RegionProfileApp }
                            path="regions/:regionId"
                        />
                        <AuthenticatedRoute Component={ UserProfileApp } path="profile" />
                        <AuthenticatedRoute
                            // @ts-ignore
                            Component={ VitiAreaProfileApp }
                            path="viti-areas/:vitiAreaId"
                        />
                        <AuthenticatedRoute
                            // @ts-ignore
                            Component={ WineTypeProfileApp }
                            path="wine-types/:wineTypeId"
                        />

                        <PleaseCrash path="/crash/please" />
                        <NotFound default />
                    </App>
                </ReachRouter>
            </ViewportProvider>
        </UserProvider>
    </ErrorBoundary>
);
Router.displayName = "Router";

/**
 * For testing purposes
 */
const PleaseCrash: React.FC<RouteComponentProps<{}>> = () => {
    throw Error();
}
