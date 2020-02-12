import { Router as ReachRouter } from "@reach/router";
import React from "react";
import { DashboardApp } from "../dashboards/DashboardApp";
import { GrapesApp } from "../grapes/GrapesApp";
import { InventoryApp } from "../inventory/InventoryApp";
import { NewWineApp } from "../new_wine/NewWineApp";
import { ProducerProfileApp } from "../producer_profile/ProducerProfileApp";
import { RegionProfileApp } from "../region_profile/RegionProfileApp";
import { SearchWinesApp } from "../search_wines/SearchWinesApp";
import { VitiAreaProfileApp } from "../viti_area_profile/VitiAreaProfileApp";
import { WinesApp } from "../wines/WinesApp";
import { WineProfileApp } from "../wine_profile/WineProfileApp";
import { WineTypeProfileApp } from "../wine_type_profile/WineTypeProfileApp";
import { HomeApp } from "./HomeApp";

export const Router: React.FC<{}> = (_) => {
    return (
        <ReachRouter>
            <HomeApp path="/" />
            <DashboardApp path="dashboards" />
            <GrapesApp path="grapes" />
            <WinesApp path="wines">
                <WineProfileApp path=":id" />
                <InventoryApp path="inventory" />
                <NewWineApp path="new" />
                <SearchWinesApp path="search" />
            </WinesApp>
            <ProducerProfileApp path="/producers/:producerId" />
            <RegionProfileApp path="/regions/:regionId" />
            <VitiAreaProfileApp path="/viti-areas/:vitiAreaId" />
            <WineTypeProfileApp path="/wine-types/:wineTypeId" />
        </ReachRouter>
    );
};
