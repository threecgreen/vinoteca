import { RouteComponentProps, Router as ReachRouter } from "@reach/router";
import { AuthenticatedRoute, NotFound, RouteById } from "components/CommonRoutes";
import { UserProvider } from "components/context/UserContext";
import { ViewportProvider } from "components/context/ViewportContext";
import { ErrorBoundary } from "components/ErrorBoundary";
import { IChildrenProp } from "components/IProps";
import React from "react";
import { AboutApp } from "./about/AboutApp";
import { Footer } from "./Footer";
import { HomeApp } from "./home/HomeApp";
import { Navbar } from "./Navbar";
import { LoginApp } from "./login/LoginApp";
import { RegisterApp } from "./register/RegisterApp";

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

export const Router: React.FC<{}> = () => (
    <ErrorBoundary>
        <UserProvider>
            <ViewportProvider>
                <ReachRouter>
                    <App path="/">
                        <HomeApp path="/" />
                        <AboutApp path="/about" />
                        <LoginApp path="/login" />
                        <RegisterApp path="/register" />

                        <AuthenticatedRoute componentName="Dashboard" path="dashboards" />
                        <AuthenticatedRoute componentName="Grapes" path="grapes" />

                        <AuthenticatedRoute componentName="Wines" path="wines" />
                        <RouteById componentName="WineProfile" path="wines/:id" />
                        <AuthenticatedRoute componentName="Inventory" path="wines/inventory" />
                        <AuthenticatedRoute componentName="NewWine" path="wines/new" />
                        <AuthenticatedRoute componentName="SearchWines" path="wines/search" />

                        <AuthenticatedRoute componentName="ProducerProfile" path="producers/:producerId" />
                        <AuthenticatedRoute componentName="RegionProfile"
                            path="regions/:regionId"
                        />
                        <AuthenticatedRoute componentName="UserProfile" path="profile" />
                        <AuthenticatedRoute componentName="VitiAreaProfile" path="viti-areas/:vitiAreaId" />
                        <AuthenticatedRoute componentName="WineTypeProfile" path="wine-types/:wineTypeId" />

                        {/* <PleaseCrash path="/crash/please" /> */}
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
// const PleaseCrash: React.FC<RouteComponentProps<{}>> = () => {
//     throw Error();
// }
