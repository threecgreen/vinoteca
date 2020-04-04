import { RouteComponentProps, Router as ReachRouter } from "@reach/router";
import React from "react";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { RouteById } from "../components/RouteById";
import { getCurrentUser } from "../lib/Auth";
import Logger from "../lib/Logger";
import { IUser } from "../lib/Rest";
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
import { VitiAreaProfileApp } from "./viti_area_profile/VitiAreaProfileApp";
import { WinesApp } from "./wines/WinesApp";
import { WineProfileApp } from "./wine_profile/WineProfileApp";
import { WineTypeProfileApp } from "./wine_type_profile/WineTypeProfileApp";
import { UserProfileApp } from "./user_profile/UserProfileApp";

const NotFound: React.FC<RouteComponentProps<{}>> = () => {
    new Logger("NotFound", false, false).logWarning("Client requested url that doesn't exist")
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

/**
 * For testing purposes
 */
const PleaseCrash: React.FC<RouteComponentProps<{}>> = () => {
    throw Error();
}
interface IProps {
    user: IUser | null;
    setUser: (user: IUser | null) => void;
}
const App: React.FC<RouteComponentProps<IProps>> = ({user, setUser, ...props}) => {
    return (
        <div id="site-content">
            <Navbar user={ user! }
                setUser={ setUser! }
            />
            <main>
                { props.children }
            </main>
            <Footer />
        </div>
    );
}

export const Router: React.FC<{}> = (_props) => {
    const [user, setUser] = React.useState<IUser | null>(null);
    // Set user if already logged in.
    React.useEffect(() => {
        async function checkIfLoggedIn() {
            // Will return `null` if there's any error
            const user = await getCurrentUser();
            setUser(user);
        }
        checkIfLoggedIn();
    }, []);

    return (
        <ErrorBoundary>
            <ReachRouter>
                <App path="/"
                    user={ user }
                    setUser={ setUser }
                >
                    <HomeApp path="/"
                        user={ user }
                        setUser={ setUser }
                    />
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
                    <UserProfileApp path="/profile" user={ user } />
                    <VitiAreaProfileApp path="/viti-areas/:vitiAreaId" />
                    <WineTypeProfileApp path="/wine-types/:wineTypeId" />

                    <PleaseCrash path="/crash/please" />
                    <NotFound default />
                </App>
            </ReachRouter>
        </ErrorBoundary>
    );
};
Router.displayName = "Router";
