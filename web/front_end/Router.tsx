import { Router as ReachRouter, RouteComponentProps } from "@reach/router";
import React from "react";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { RouteById } from "../components/RouteById";
import { AboutApp } from "./about/AboutApp";
import { DashboardApp } from "./dashboards/DashboardApp";
import { GrapesApp } from "./grapes/GrapesApp";
import { HomeApp } from "./home/HomeApp";
import { InventoryApp } from "./inventory/InventoryApp";
import { NewWineApp } from "./new_wine/NewWineApp";
import { ProducerProfileApp } from "./producer_profile/ProducerProfileApp";
import { RegionProfileApp } from "./region_profile/RegionProfileApp";
import { SearchWinesApp } from "./search_wines/SearchWinesApp";
import { VitiAreaProfileApp } from "./viti_area_profile/VitiAreaProfileApp";
import { WinesApp } from "./wines/WinesApp";
import { WineProfileApp } from "./wine_profile/WineProfileApp";
import { WineTypeProfileApp } from "./wine_type_profile/WineTypeProfileApp";

const NotFound: React.FC<RouteComponentProps<{}>> = () => {
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

export const Router: React.FC<{}> = (_) => {
    return (
        <ErrorBoundary>
            <ReachRouter>
                <HomeApp path="/" />
                <AboutApp path="/about" />
                <DashboardApp path="dashboards" />
                <GrapesApp path="grapes" />

                <WinesApp path="wines" />
                <RouteById Component={ WineProfileApp } path="wines/:id" />
                <InventoryApp path="wines/inventory" />
                <NewWineApp path="wines/new" />
                <SearchWinesApp path="wines/search" />

                <ProducerProfileApp path="/producers/:producerId" />
                <RegionProfileApp path="/regions/:regionId" />
                <VitiAreaProfileApp path="/viti-areas/:vitiAreaId" />
                <WineTypeProfileApp path="/wine-types/:wineTypeId" />
                <NotFound default />
            </ReachRouter>
        </ErrorBoundary>
    );
};
Router.displayName = Router.name;
