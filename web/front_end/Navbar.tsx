import { Link, navigate, useLocation } from "@gatsbyjs/reach-router";
import { useSetUser, useUser } from "components/context/UserContext";
import { MaterialIcon } from "components/MaterialIcon";
import { IUser } from "generated/rest";
import { logout } from "lib/api/auth";
import { Dropdown, Sidenav } from "materialize-css";
import React from "react";

export const Navbar: React.FC = () => {

    return (
        <>
            <DesktopNavbar />
            <MobileNavbar />
        </>
    );
};

const DesktopNavbar: React.FC = () => {
    return (
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
    );
};
DesktopNavbar.displayName = "DesktopNavbar";

const MobileNavbar: React.FC = (props) => {
    const sideNavRef = React.useRef() as React.MutableRefObject<HTMLUListElement>;
    React.useEffect(() => {
        new Sidenav(sideNavRef.current);
    }, [sideNavRef]);

    return (
        <ul className="sidenav" id="mobile" ref={ sideNavRef }>
            <MenuItems id="sidebar-dropdown" {...props} />
        </ul>
    );
};
MobileNavbar.displayName = "MobileNavbar";

const NavLink: React.FC<{to: string, children: React.ReactNode}> = ({to, ...props}) => {
    const location = useLocation();
    return (
        // Sidenav-close closes the sidenav on click
        <li className={ location.pathname === to ? "active sidenav-close" : "sidenav-close" }
            aria-current={ location.pathname === to ? "page" : undefined }
        >
            <Link to={ to }>
                { props.children }
            </Link>
        </li>
    );
};

interface IMenuItemsProps {
    id: string;
}

const MenuItems: React.FC<IMenuItemsProps> = (props) => {
    const user = useUser();

    return (
        user
        ? <UserMenuItems {...props} user={ user } />
        : <NoUserMenuItems {...props} />
    );
};
MenuItems.displayName = "MenuItems";

interface IUserMenuItemsProps extends IMenuItemsProps {
    user: IUser;
}

const UserMenuItems: React.FC<IUserMenuItemsProps> = ({id, user}) => {
    const setUser = useSetUser();

    const addDropdownRef = React.useRef() as React.MutableRefObject<HTMLAnchorElement>;
    const userDropdownRef = React.useRef() as React.MutableRefObject<HTMLAnchorElement>;
    const winesDropdownRef = React.useRef() as React.MutableRefObject<HTMLAnchorElement>;
    React.useEffect(() => {
        new Dropdown(addDropdownRef.current);
    }, [addDropdownRef]);
    React.useEffect(() => {
        new Dropdown(userDropdownRef.current);
    }, [userDropdownRef]);
    React.useEffect(() => {
        new Dropdown(winesDropdownRef.current);
    }, [winesDropdownRef]);

    const onLogout = async (e: React.MouseEvent) => {
        e.preventDefault();
        await logout();
        setUser(null);
        void navigate("/");
    };

    return (
        <>
            <li>
                <ul id={ `${id}-add` } className="dropdown-content">
                    <NavLink to="/wines/new">
                        New wine
                    </NavLink>
                    <NavLink to="/wines/search">
                        Purchased again
                    </NavLink>
                </ul>
                <a className="dropdown-trigger" data-target={ `${id}-add` }
                    ref={ addDropdownRef }
                >
                    <MaterialIcon className="left" iconName="add_circle" />
                    Add
                    <MaterialIcon className="right" iconName="arrow_drop_down" />
                </a>
            </li>
            <li>
                <ul id={ `${id}-wines` } className="dropdown-content">
                    <NavLink to="/wines">
                        All wines
                    </NavLink>
                    <NavLink to="/wines/inventory">
                        Inventory
                    </NavLink>
                    <NavLink to="/wines/shopping-list">
                        Shopping list
                    </NavLink>
                </ul>
                <a className="dropdown-trigger" data-target={ `${id}-wines` }
                    ref={ winesDropdownRef }
                >
                    <MaterialIcon className="left" iconName="reorder" />
                    Wines
                    <MaterialIcon className="right" iconName="arrow_drop_down" />
                </a>
            </li>
            {/* <NavLink to="/wines">
                Wines
            </NavLink> */}
            <NavLink to="/dashboards">
                <MaterialIcon className="left" iconName="dashboard" />
                Dashboards
            </NavLink>
            {/* <NavLink to="/wines/inventory">
                <MaterialIcon className="left" iconName="view_comfy" />
                Inventory
            </NavLink> */}
            <li>
                <ul id={ `${id}-user` } className="dropdown-content">
                    <NavLink to="/profile">
                        Profile
                    </NavLink>
                    <li className="sidenav-close">
                        <a onClick={ onLogout }>
                            Log out
                        </a>
                    </li>
                </ul>
                <a className="dropdown-trigger" data-target={ `${id}-user` }
                    ref={ userDropdownRef }
                >
                    <MaterialIcon className="left" iconName="account_circle" />
                    { user.name }
                    <MaterialIcon className="right" iconName="arrow_drop_down" />
                </a>
            </li>
        </>
    );
};
UserMenuItems.displayName = "UserMenuItems";

const NoUserMenuItems: React.FC<IMenuItemsProps> = () => (
    <>
        <NavLink to="/login">
            <MaterialIcon className="left" iconName="account_circle" />
            Login
        </NavLink>
        <NavLink to="/register">
            <MaterialIcon className="left" iconName="add_circle" />
            Register
        </NavLink>
    </>
);
NoUserMenuItems.displayName = "NoUserMenuItems";
