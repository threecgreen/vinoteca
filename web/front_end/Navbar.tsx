import { Link } from "@reach/router";
import { Dropdown, Sidenav } from "materialize-css";
import React from "react";
import { CancelOrConfirmBtns } from "../components/Buttons";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { MaterialIcon } from "../components/MaterialIcon";
import { Modal } from "../components/Modal";
import { EmailInput, PasswordInput, TextInput } from "../components/TextInput";
import { getCurrentUser } from "../lib/Auth";
import { IUser } from "../lib/Rest";
import { createUser, login } from "../lib/RestApi";

enum ModalState {
    None,
    Login,
    NewUser,
}

export const Top: React.FC<{}> = (_) => {
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
        <ErrorBoundary>
            <Navbar {...props} />
            {/* <MobileNavbar {...props} /> */}
            { modalState === ModalState.Login &&
                <LoginForm onCancel={ () => setModalState(ModalState.None) }
                    onFinish={ setUser }
                /> }
            { modalState === ModalState.NewUser &&
                <NewUserForm onCancel={ () => setModalState(ModalState.None) }
                    onFinish={ setUser }
                /> }
        </ErrorBoundary>
    );
}

interface INavProps {
    user: IUser | null;
    setUser: (user: IUser) => void;
    setModalState: (newState: ModalState) => void;
}

const Navbar: React.FC<INavProps> = (props) => {
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
                            <MenuItems id="top-dropdown" {...props} />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
Navbar.displayName = "Navbar";

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
                {/* TODO: create user profile page */}
                <li id="profile-nav">
                    <Link to="/profile">
                        <MaterialIcon className="left" iconName="account_circle" />
                        { user.name }
                    </Link>
                </li>
            </>
        );
    }
    // Only show login/new user headers when no one is logged in
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
            <form>
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
                <CancelOrConfirmBtns
                    onConfirmClick={ onSubmit }
                    onCancelClick={ onCancel }
                />
            </form>
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
            <form>
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
                <CancelOrConfirmBtns
                    onConfirmClick={ onSubmit }
                    onCancelClick={ onCancel }
                />
            </form>
        </Modal>
    );
}
NewUserForm.displayName = "NewUserForm";
