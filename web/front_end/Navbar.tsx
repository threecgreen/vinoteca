import { Link } from "@reach/router";
import { Dropdown, Sidenav } from "materialize-css";
import React from "react";
import { MaterialIcon } from "../components/MaterialIcon";

export const Top: React.FC<{}> = (_) => {
    return (
        <>
            <Navbar />
            <MobileNavbar />
        </>
    );
}

const Navbar: React.FC<{}> = (_) => {
    return (
        <>
            <nav>
                <div className="nav-wrapper pink darken-4">
                    <div className="container">
                        <Link to="/" className="brand-logo">
                            <img src="/static/img/wine-icon.png"
                                id="logo-img"
                                alt="vinoteca logo"
                            />
                            vinoteca
                        </Link>
                        <a href="#" data-target="mobile"
                            className="sidenav-trigger left hide-on-large-and-up"
                        >
                            <MaterialIcon iconName="menu" />
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <MenuItems id="top-dropdown" />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
Navbar.displayName = "Navbar";

const MobileNavbar: React.FC<{}> = (_) => {
    const sideNavRef = React.useRef() as React.MutableRefObject<HTMLUListElement>;
    React.useEffect(() => {
        // tslint:disable-next-line no-unused-expression
        new Sidenav(sideNavRef.current);
    }, [sideNavRef]);

    return (
        <ul className="sidenav" id="mobile" ref={ sideNavRef }>
            <MenuItems id="sidebar-dropdown" />
        </ul>
    );
}
MobileNavbar.displayName = "MobileNavbar";

const MenuItems: React.FC<{id: string}> = ({id}) => {
    const dropdownTriggerRef = React.useRef() as React.MutableRefObject<HTMLAnchorElement>;
    React.useEffect(() => {
        // tslint:disable-next-line no-unused-expression
        new Dropdown(dropdownTriggerRef.current);
    }, [dropdownTriggerRef]);

    return (
        <>
            <li id="new-wine-nav">
                <ul id={ id } className="dropdown-content">
                    <li>
                        <Link to="/wines/new">
                            New Wine
                        </Link>
                    </li>
                    <li>
                        <Link to="/wines/search">
                            Purchased Again
                        </Link>
                    </li>
                </ul>
                <a href="#!" className="dropdown-trigger" data-target={ id }
                    ref={ dropdownTriggerRef }
                >
                    <MaterialIcon className="left" iconName="add_circle" />
                    Add
                    <MaterialIcon className="right" iconName="arrow_drop_down" />
                </a>
            </li>
            <li id="wines-nav">
                <Link to="/wines">
                    <MaterialIcon className="left" iconName="reorder" />
                    Wines
                </Link>
            </li>
            <li id="dashboards-nav">
                <Link to="/dashboards">
                    <MaterialIcon className="left" iconName="dashboard" />
                    Dashboards
                </Link>
            </li>
            <li id="inventory-nav">
                <Link to="/wines/inventory">
                    <MaterialIcon className="left" iconName="view_comfy" />
                    Inventory
                </Link>
            </li>
        </>
    );
}
MenuItems.displayName = "MenuItems";
