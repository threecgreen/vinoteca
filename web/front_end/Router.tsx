import { RouteComponentProps, Router as ReachRouter } from "@reach/router";
import { AsyncRoute, AuthenticatedRoute, NotFound, RouteById } from "components/CommonRoutes";
import { UserProvider } from "components/context/UserContext";
import { VersionProvider } from "components/context/VersionContext";
import { ViewportProvider } from "components/context/ViewportContext";
import { ErrorBoundary } from "components/ErrorBoundary";
import { IChildrenProp } from "components/IProps";
import React from "react";
import { About } from "./about/About";
import { Changelog } from "./about/Changelog";
import { Footer } from "./Footer";
import { HomeApp } from "./home/HomeApp";
import { Navbar } from "./Navbar";

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
};
App.displayName = "VinotecaApp";

export const Router: React.FC = () => (
    <VersionProvider>
        <ErrorBoundary>
            <UserProvider>
                <ViewportProvider>
                    <ReachRouter>
                        <App path="/">
                            <HomeApp path="/" />
                            <About path="/about" />
                            <Changelog path="/about/changelog" />

                            <AsyncRoute path="/login" componentName="Login" />
                            <AsyncRoute path="/register" componentName="Register" />

                            <AuthenticatedRoute componentName="Dashboard" path="dashboards" />
                            <AuthenticatedRoute componentName="Grapes" path="grapes" />

                            <AuthenticatedRoute componentName="Wines" path="wines" />
                            <RouteById componentName="WineProfile" path="wines/:id" />
                            <AuthenticatedRoute componentName="Inventory" path="wines/inventory" />
                            <AuthenticatedRoute componentName="NewWine" path="wines/new" />
                            <AuthenticatedRoute componentName="SearchWines" path="wines/search" />
                            <AuthenticatedRoute componentName="ShoppingList"
                                path="wines/shopping-list"
                            />

                            <AuthenticatedRoute componentName="ProducerProfile"
                                path="producers/:producerId"
                            />
                            <AuthenticatedRoute componentName="RegionProfile"
                                path="regions/:regionId"
                            />
                            <AuthenticatedRoute componentName="UserProfile" path="profile" />
                            <AuthenticatedRoute componentName="VitiAreaProfile"
                                path="viti-areas/:vitiAreaId"
                            />
                            <AuthenticatedRoute componentName="WineTypeProfile"
                                path="wine-types/:wineTypeId"
                            />

                            {/* <PleaseCrash path="/crash/please" /> */}
                            <NotFound default />
                        </App>
                    </ReachRouter>
                </ViewportProvider>
            </UserProvider>
        </ErrorBoundary>
    </VersionProvider>
);
Router.displayName = "Router";

/**
 * For testing purposes
 */
// const PleaseCrash: React.FC<RouteComponentProps<{}>> = () => {
//     throw Error();
// }
