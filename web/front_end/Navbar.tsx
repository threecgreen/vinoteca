import { Link, useLocation } from "@reach/router";
import { Dropdown, Sidenav } from "materialize-css";
import React from "react";
import { CancelOrConfirmBtns } from "../components/Buttons";
import { MaterialIcon } from "../components/MaterialIcon";
import { Modal, ModalContent, ModalFooter } from "../components/Modal";
import { EmailInput, PasswordInput, TextInput } from "../components/TextInput";
import { getCurrentUser } from "../lib/Auth";
import { IUser } from "../lib/Rest";
import { createUser, login } from "../lib/RestApi";

enum ModalState {
    None,
    Login,
    NewUser,
}

export const Navbar: React.FC<{}> = (_) => {
    const [user, setUser] = React.useState<IUser | null>(null);
    const [modalState, setModalState] = React.useState(ModalState.None);

    // Set user if already logged in.
    React.useEffect(() => {
        async function checkIfLoggedIn() {
            // Will return `null` if there's any error
            const user = await getCurrentUser();
            setUser(user);
        }
        checkIfLoggedIn();
    }, []);

    const props = {
        user,
        setUser,
        setModalState,
    }

    return (
        <>
            <DesktopNavbar {...props} />
            <MobileNavbar {...props} />
            { modalState === ModalState.Login &&
                <LoginForm onCancel={ () => setModalState(ModalState.None) }
                    onFinish={ setUser }
                /> }
            { modalState === ModalState.NewUser &&
                <NewUserForm onCancel={ () => setModalState(ModalState.None) }
                    onFinish={ setUser }
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
        <li className={ location.pathname === to ? "active" : "" }>
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
    // Only show login/new user headers when no one is logged in
    // FIXME: set activate based on modalState
    return (
        <>
            <li id="new-user-nav">
                <a onClick={ () => setModalState(ModalState.NewUser) }>
                    <MaterialIcon className="left" iconName="add_circle" />
                    Create Account
                </a>
            </li>
            <li id="login-nav" >
                <a onClick={ () => setModalState(ModalState.Login) }>
                    <MaterialIcon className="left" iconName="account_circle" />
                    Login
                </a>
            </li>
        </>
    );
}
MenuItems.displayName = "MenuItems";

interface IUserProps {
    onFinish: (user: IUser) => void,
    onCancel: () => void,
}

const LoginForm: React.FC<IUserProps> = ({onFinish, onCancel}) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onSubmit = async () => {
        const user = await login({email, password});
        onFinish(user);
    }

    return (
        <Modal>
            <ModalContent>
                <EmailInput name="E-mail"
                    className=""
                    value={ email }
                    onChange={ setEmail }
                />
                <PasswordInput name="Password"
                    className=""
                    value={ password }
                    onChange={ setPassword }
                />
            </ModalContent>
            <ModalFooter>
                <CancelOrConfirmBtns
                    onConfirmClick={ onSubmit }
                    onCancelClick={ onCancel }
                />
            </ModalFooter>
        </Modal>
    );
}
LoginForm.displayName = "LoginForm";

const NewUserForm: React.FC<IUserProps> = ({onFinish, onCancel}) => {
    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");
    const [password, setPassword] = React.useState("");
    // TODO: image

    const onSubmit = async () => {
        const user = await createUser({email, name, password});
        onFinish(user);
    }

    return (
        <Modal>
            <ModalContent>
                <EmailInput name="E-mail"
                    className=""
                    value={ email }
                    onChange={ setEmail }
                />
                <TextInput name="Name"
                    className=""
                    value={ name }
                    onChange={ setName }
                />
                <PasswordInput name="Password"
                    className=""
                    value={ password }
                    onChange={ setPassword }
                />
            </ModalContent>
            <ModalFooter>
                <CancelOrConfirmBtns
                    onConfirmClick={ onSubmit }
                    onCancelClick={ onCancel }
                />
            </ModalFooter>
        </Modal>
    );
}
NewUserForm.displayName = "NewUserForm";
