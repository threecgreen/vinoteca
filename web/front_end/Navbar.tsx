import { Link, redirectTo, useLocation } from "@reach/router";
import { Dropdown, Sidenav } from "materialize-css";
import React from "react";
import { LoginForm } from "../components/AccountModals";
import { MaterialIcon } from "../components/MaterialIcon";
import { useSetUser, useUser } from "../components/UserContext";
import { IUser } from "../lib/Rest";
import { logout } from "../lib/rest_api";

enum ModalState {
    None,
    Login,
}

export const Navbar: React.FC<{}> = () => {
    const [modalState, setModalState] = React.useState(ModalState.None);
    const setUser = useSetUser();

    const setUserAndHideModal = (user: IUser) => {
        setUser(user);
        setModalState(ModalState.None)
    }

    return (
        <>
            <DesktopNavbar setModalState={ setModalState } />
            <MobileNavbar setModalState={ setModalState } />
            { modalState === ModalState.Login &&
                <LoginForm onCancel={ () => setModalState(ModalState.None) }
                    onFinish={ setUserAndHideModal }
                /> }
        </>
    );
}

interface INavProps {
    setModalState: (newState: ModalState) => void;
}

const DesktopNavbar: React.FC<INavProps> = ({setModalState}) => {
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
                        <MenuItems id="top-dropdown" setModalState={ setModalState } />
                    </ul>
                </div>
            </div>
        </nav>
    );
}
DesktopNavbar.displayName = "DesktopNavbar";

const MobileNavbar: React.FC<INavProps> = (props) => {
    const sideNavRef = React.useRef() as React.MutableRefObject<HTMLUListElement>;
    React.useEffect(() => {
        // tslint:disable-next-line no-unused-expression
        new Sidenav(sideNavRef.current);
    }, [sideNavRef]);

    return (
        <ul className="sidenav" id="mobile" ref={ sideNavRef }>
            <MenuItems id="sidebar-dropdown" {...props} />
        </ul>
    );
}
MobileNavbar.displayName = "MobileNavbar";

const NavLink: React.FC<{to: string}> = ({to, ...props}) => {
    const location = useLocation();
    return (
        // Sidenav-close closes the sidenav on click
        <li className={ location.pathname === to ? "active sidenav-close" : "sidenav-close" }>
            <Link to={ to }>
                { props.children }
            </Link>
        </li>
    );
}

interface IMenuItemsProps extends INavProps {
    id: string
}

const MenuItems: React.FC<IMenuItemsProps> = (props) => {
    const user = useUser();

    return (
        user
        ? <UserMenuItems {...props} />
        : <NoUserMenuItems {...props} />
    );
}
MenuItems.displayName = "MenuItems";

const UserMenuItems: React.FC<IMenuItemsProps> = ({id}) => {
    const user = useUser();
    const setUser = useSetUser();

    const addDropdownRef = React.useRef() as React.MutableRefObject<HTMLAnchorElement>;
    const userDropdownRef = React.useRef() as React.MutableRefObject<HTMLAnchorElement>;
    React.useEffect(() => {
        // tslint:disable-next-line no-unused-expression
        new Dropdown(addDropdownRef.current);
    }, [addDropdownRef]);
    React.useEffect(() => {
        // tslint:disable-next-line no-unused-expression
        new Dropdown(userDropdownRef.current);
    }, [userDropdownRef]);

    const onLogout = async (e: React.MouseEvent) => {
        e.preventDefault();
        await logout();
        setUser(null);
        redirectTo("/");
    }

    return (
        <>
            <li>
                <ul id={ `${id}-add` } className="dropdown-content">
                    <NavLink to="/wines/new">
                        New Wine
                    </NavLink>
                    <NavLink to="/wines/search">
                        Purchased Again
                    </NavLink>
                </ul>
                <a href="#!" className="dropdown-trigger" data-target={ `${id}-add` }
                    ref={ addDropdownRef }
                >
                    <MaterialIcon className="left" iconName="add_circle" />
                    Add
                    <MaterialIcon className="right" iconName="arrow_drop_down" />
                </a>
            </li>
            <NavLink to="/wines">
                <MaterialIcon className="left" iconName="reorder" />
                Wines
            </NavLink>
            <NavLink to="/dashboards">
                <MaterialIcon className="left" iconName="dashboard" />
                Dashboards
            </NavLink>
            <NavLink to="/wines/inventory">
                <MaterialIcon className="left" iconName="view_comfy" />
                Inventory
            </NavLink>
            <li>
                <ul id={ `${id}-user` } className="dropdown-content">
                    <NavLink to="/profile">
                        Profile
                    </NavLink>
                    <li className="sidenav-close">
                        <a href="#!" onClick={ onLogout }>
                            Log out
                        </a>
                    </li>
                </ul>
                <a href="#!" className="dropdown-trigger" data-target={ `${id}-user` }
                    ref={ userDropdownRef }
                >
                    <MaterialIcon className="left" iconName="account_circle" />
                    { user?.name ?? "" }
                    <MaterialIcon className="right" iconName="arrow_drop_down" />
                </a>
            </li>
        </>
    );
}
UserMenuItems.displayName = "UserMenuItems";

const NoUserMenuItems: React.FC<IMenuItemsProps> = ({setModalState}) => (
    <li id="login-nav" className={ ModalState.Login ? "active" : "" } >
        <a onClick={ () => setModalState(ModalState.Login) }>
            <MaterialIcon className="left" iconName="account_circle" />
            Login
        </a>
    </li>
);
NoUserMenuItems.displayName = "NoUserMenuItems";
