import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AsyncRoute, AuthAsyncRoute, NotFound, RouteById } from "components/CommonRoutes";
import { UserProvider } from "components/context/UserContext";
import { VersionProvider } from "components/context/VersionContext";
import { ViewportProvider } from "components/context/ViewportContext";
import { ErrorBoundary } from "components/ErrorBoundary";
import React from "react";
import { About } from "./about/About";
import { Changelog } from "./about/Changelog";
import { Footer } from "./Footer";
import { HomeApp } from "./home/HomeApp";
import { Navbar } from "./Navbar";

const App: React.FC = () => {
    return (
        <div id="site-content">
            <Navbar />
            <main>
                <Outlet />
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
                    <Toaster position="top-right" />
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<App />}>
                                <Route index element={<HomeApp />} />
                                <Route path="about" element={<About />} />
                                <Route path="about/changelog" element={<Changelog />} />

                                <Route path="login" element={<AsyncRoute componentName="Login" />} />
                                <Route path="register" element={<AsyncRoute componentName="Register" />} />

                                <Route path="dashboards" element={<AuthAsyncRoute componentName="Dashboard" />} />
                                <Route path="grapes" element={<AuthAsyncRoute componentName="Grapes" />} />
                                <Route path="producers" element={<AuthAsyncRoute componentName="Producers" />} />

                                <Route path="wines" element={<AuthAsyncRoute componentName="Wines" />} />
                                <Route path="wines/:id" element={<RouteById componentName="WineProfile" />} />
                                <Route path="wines/inventory" element={<AuthAsyncRoute componentName="Inventory" />} />
                                <Route path="wines/new" element={<AuthAsyncRoute componentName="NewWine" />} />
                                <Route path="wines/search" element={<AuthAsyncRoute componentName="SearchWines" />} />
                                <Route path="wines/shopping-list" element={<AuthAsyncRoute componentName="ShoppingList" />} />

                                <Route path="producers/:producerId" element={<AuthAsyncRoute componentName="ProducerProfile" />} />
                                <Route path="regions/:regionId" element={<AuthAsyncRoute componentName="RegionProfile" />} />
                                <Route path="profile" element={<AuthAsyncRoute componentName="UserProfile" />} />
                                <Route path="viti-areas/:vitiAreaId" element={<AuthAsyncRoute componentName="VitiAreaProfile" />} />
                                <Route path="wine-types/:wineTypeId" element={<AuthAsyncRoute componentName="WineTypeProfile" />} />

                                <Route path="*" element={<NotFound />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </ViewportProvider>
            </UserProvider>
        </ErrorBoundary>
    </VersionProvider>
);
Router.displayName = "Router";
