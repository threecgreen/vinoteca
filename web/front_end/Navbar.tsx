import { Link, useLocation } from "@reach/router";
import { Dropdown, Sidenav } from "materialize-css";
import React from "react";
import { MaterialIcon } from "../components/MaterialIcon";
import { IUser } from "../lib/Rest";
import { LoginForm } from "../components/AccountModals";

enum ModalState {
    None,
    Login,
}

interface IProps {
    user: IUser | null;
    setUser: (user: IUser) => void;
}

export const Navbar: React.FC<IProps> = ({user, setUser}) => {
    const [modalState, setModalState] = React.useState(ModalState.None);

    const props = {
        user,
        setUser,
        setModalState,
    }

    const setUserAndHideModal = (user: IUser) => {
        setUser(user);
        setModalState(ModalState.None)
    }

    return (
        <>
            <DesktopNavbar {...props} />
            <MobileNavbar {...props} />
            { modalState === ModalState.Login &&
                <LoginForm onCancel={ () => setModalState(ModalState.None) }
                    onFinish={ setUserAndHideModal }
                /> }
        </>
    );
}

interface INavProps {
    user: IUser | null;
    setUser: (user: IUser) => void;
    setModalState: (newState: ModalState) => void;
}

const DesktopNavbar: React.FC<INavProps> = (props) => {
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
                        <MenuItems id="top-dropdown" {...props} />
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

const MenuItems: React.FC<{id: string} & INavProps> = ({id, user, setModalState}) => {
    if (user) {
        const dropdownTriggerRef = React.useRef() as React.MutableRefObject<HTMLAnchorElement>;
        React.useEffect(() => {
            // tslint:disable-next-line no-unused-expression
            new Dropdown(dropdownTriggerRef.current);
        }, [dropdownTriggerRef]);

        return (
            <>
                <li id="new-wine-nav">
                    <ul id={ id } className="dropdown-content">
                        <NavLink to="/wines/new">
                            New Wine
                        </NavLink>
                        <NavLink to="/wines/search">
                            Purchased Again
                        </NavLink>
                    </ul>
                    <a href="#!" className="dropdown-trigger" data-target={ id }
                        ref={ dropdownTriggerRef }
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
                {/* TODO: create user profile page */}
                <NavLink to="/profile">
                    <MaterialIcon className="left" iconName="account_circle" />
                    { user.name }
                </NavLink>
            </>
        );
    }
    return (
        <li id="login-nav" className={ ModalState.Login ? "active" : "" } >
            <a onClick={ () => setModalState(ModalState.Login) }>
                <MaterialIcon className="left" iconName="account_circle" />
                Login
            </a>
        </li>
    );
}
MenuItems.displayName = "MenuItems";
